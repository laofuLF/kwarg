import React, { Component, Fragment } from 'react';
import './style.css'
import TodoItem from "./TodoItem";

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['study english', 'study chinese']
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
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
                        onChange={this.handleInputChange}
                    />
                    <button
                        onClick={this.handleButtonClick}
                    >add</button>
                </div>
                <ul>
                    {this.getItem()}
                </ul>
            </Fragment>
        );
    }

    getItem() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        handleItemDelete={this.handleItemDelete}
                    />
                )
            })
        )
    }

    handleInputChange(e) {
        console.log(this);
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleButtonClick(e) {
        console.log(e.target.value);
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list};
        })
        console.log(index);
    }
}

export default Todolist;
