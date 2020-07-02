import React from 'react';
import {Button, Divider, Input, List, Typography} from "antd";

const TodolistUI = (props) => {
    return (
        <div>
            <div>
                <Input
                    placeholder='add task'
                    value={props.inputValue}
                    style={{width:400, marginRight:25}}
                    onChange={props.handleInputChange}
                />
                <Button type='default' onClick={props.handleButtonClick}>add</Button>
            </div>
            <Divider orientation="left">Default Size</Divider>
            <List
                style={{marginTop:10, width:400}}
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item
                        onClick={() => {props.handleItemClick(index)}}
                    >
                        <Typography.Text mark/> {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodolistUI;