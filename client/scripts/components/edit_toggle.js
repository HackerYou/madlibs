import React from 'react';

class EditToggle extends React.Component {
    constructor() {
        super();
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleView = this.toggleView.bind(this);
    }

    render() {
        return <div className='edit-toggles'>
            <a href='#' className={ this.props.mode == 'edit' ? 'selected' : '' } onClick={ this.toggleEdit }>Edit</a>
            <a href='#' className={ this.props.mode == 'view' ? 'selected' : '' } onClick={ this.toggleView }>View</a>
        </div>
    }

    toggleEdit() {
        this.props.onChange('edit');
    }

    toggleView() {
        this.props.onChange('view');
    }
}

export default EditToggle;