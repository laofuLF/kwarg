import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content } = this.props;
        return (<div
            onClick={this.handleClick}
        >
            {content}
        </div>)
    }

    handleClick() {
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }
}

// check prop types
// will throw warning if type does not match
TodoItem.protoTypes = {
    content: PropTypes.string.isRequired,
    handleItemDelete: PropTypes.func,
    index: PropTypes.number
}

// assign default value if not received
TodoItem.defaultProps = {
    test: 'value1'
}

export default TodoItem;