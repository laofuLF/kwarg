import React, { Component, Fragment } from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    todo list
                </div>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button>add</button>
                </div>
                <ul>
                    <li>study chinese</li>
                    <li>study english</li>
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        console.log(this);
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default Todolist;
