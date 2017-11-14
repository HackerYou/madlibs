import React from 'react';

class Field extends React.Component {
    constructor() {
        super();
        this.state = {
            requiredError: false
        }

        this.renderError = this.renderError.bind(this);
        this.valueChanged = this.valueChanged.bind(this);
    }

    render() {
        const { label, value, onChange, error, isRequired } = this.props;
        const hasError = error || this.state.requiredError;

        return <div className='field'>
            <label>{ label }</label>
            <input type='text' value={ value } onChange={ this.valueChanged } />
            { hasError ? this.renderError() :
                         null }
        </div>
    }

    valueChanged(e) {
        console.log(e);
        if (this.props.isRequired && e.target.value === '') {
            this.setState({ requiredError: true });
        }
        this.props.onChange(e);
    }

    renderError() {
        if (this.state.requiredError || this.props.error.kind === 'required' ) {
            return <div className='error'>Field is required</div>;
        } else if (this.props.error.kind === 'enum') {
            return <div classNamq='error'>
                Field must be one of: { this.props.error.properties.enumValues.join(", ") }
            </div>
        } else {
            return <div className='error'>{ this.props.error.message }</div>;
        }
    }
}

export default Field;