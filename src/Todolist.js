import React, { Component, Fragment } from 'react';
import './style.css'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['study english', 'study chinese']
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    todo list
                </div>
                <div>
                    <label
                        htmlFor='insertArea'
                    >
                        input your todo list
                    </label>
                    <input
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button
                        onClick={this.handleButtonClick.bind(this)}
                    >add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
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

    handleButtonClick(e) {
        console.log(e.target.value);
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
        console.log(index);
    }
}

export default Todolist;
