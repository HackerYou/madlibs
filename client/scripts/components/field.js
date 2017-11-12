import React from 'react';

class Field extends React.Component {
    render() {
        const { label, value, onChange } = this.props;
        return <div className='field'>
            <label>{ label }</label>
            <input type='text' value={ value } onChange={ onChange } />
        </div>
    }
}

export default Field;