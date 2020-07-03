import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAddItem, getDeleteItem, getInputValueChange} from "./store/actionCreator";

const Todolist = (props) => {
    const {inputValue, list, changeInputValue, handleButtonClick, handleDelete } = props;
    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button onClick={handleButtonClick}>add</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index} onClick={handleDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

// get data from store(state) to this component's props
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
        index: state.index
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getInputValueChange(e.target.value);
            dispatch(action);
        },

        handleButtonClick() {
            const action = getAddItem()
            dispatch(action);
        },

        handleDelete(index) {
            console.log("index is: " + index);
            const action = getDeleteItem(index)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);