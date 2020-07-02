import React, { Component } from "react";
import TodolistUI from './TodolistUI'
import store from "./store/index";
import 'antd/dist/antd.css';
import axios from 'axios'
import {
    getAddItemAction,
    getDeleteItemAction,
    getInputChangeAction,
    getTodoList,
    initListAction
} from "./store/actionCreator";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);
        console.log(this.state);
    }

    render() {
        return (
            <TodolistUI
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleButtonClick = {this.handleButtonClick}
                handleItemClick = {this.handleItemClick}
            />
        )
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleButtonClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemClick(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default Todolist;