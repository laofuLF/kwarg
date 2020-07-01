import React, {Component} from 'react';
import {Button, Divider, Input, List, Typography} from "antd";

class TodolistUI extends Component {
    render() {
        return (
            <div>
                <div>
                    <Input
                        placeholder='add task'
                        value={this.props.inputValue}
                        style={{width:400, marginRight:25}}
                        onChange={this.props.handleInputChange}
                    />
                    <Button type='default' onClick={this.props.handleButtonClick}>add</Button>
                </div>
                <Divider orientation="left">Default Size</Divider>
                <List
                    style={{marginTop:10, width:400}}
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={(index) => {this.props.handleItemClick(index)}}
                        >
                            <Typography.Text mark/> {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodolistUI;