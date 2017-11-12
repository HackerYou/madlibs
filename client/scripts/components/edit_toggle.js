import React from 'react';

class EditToggle extends React.Component {
    render() {
        return <div>
            <a href='#' onClick={ this.toggleEdit }>Edit</a>
            <a href='#' onClick={ this.toggleView }>View</a>
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