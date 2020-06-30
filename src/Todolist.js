import React, { Component } from "react";
import { Input, Button, Divider, Typography, List } from 'antd';
import 'antd/dist/antd.css';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class Todolist extends Component {

    render() {
        return (
            <div>
                <div>
                    <Input placeholder='add task' style={{width:400, marginRight:25}}/>
                    <Button type='default'>add</Button>
                </div>
                <Divider orientation="left">Default Size</Divider>
                <List
                    style={{marginTop:10, width:400}}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark/> {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Todolist;