import React, { Component } from "react";
import { Input, Button, Divider, Typography, List } from 'antd';
import store from "./store/index";
import 'antd/dist/antd.css';

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
        store.subscribe(this.handleStoreChange);
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div>
                    <Input
                        placeholder='add task'
                        value={this.state.inputValue}
                        style={{width:400, marginRight:25}}
                        onChange={this.handleInputChange}
                    />
                    <Button type='default' onClick={this.handleButtonClick}>add</Button>
                </div>
                <Divider orientation="left">Default Size</Divider>
                <List
                    style={{marginTop:10, width:400}}
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item
                        >
                            <Typography.Text mark/> {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleButtonClick() {
        const action = {
            type: 'add_item',
        }
        store.dispatch(action);
    }
}

export default Todolist;