import React, {useState} from "react";
import TodoItem from "./TodoItem";
import {TodoWrap, TodoStyle, TodoInputWrap} from "./styled";
import {DefTitle} from "../../assets/title/styled";
import {DefButton} from "../../assets/button/styled";
import {DefInput} from "../../assets/input/styled";
import {InputWrapper} from "../../assets/wrapper/styled";

function Todo() {

    function editTask(id: number,text : string, event: React.MouseEvent){
        event.preventDefault();
        let newDataList = [...todoList];
        newDataList.map((item)=> {
            if (item.id === id) {
                item.edit = true;
            }
        });
        setEditTextTask(text);
        setListState(newDataList);
    }

    function removeTask(id: number) {
        let newDataList = [...todoList];
        newDataList.map((item, index)=>{
            if (item.id === id) {
                newDataList.splice(index, 1)
            }
        });
        setListState(newDataList);
    }

    function cancelTask(id: number){
        let newDataList = [...todoList];
        newDataList.map((item)=>{
            if (item.id === id) {
                item.edit = false;
            }
        });
        setEditTextTask('');
        setListState(newDataList);
    }

    function saveTask(id: number, event: React.MouseEvent) {
        event.preventDefault();
        let newDataList = [...todoList];
        newDataList.map((item)=>{
            if (item.id === id) {
                item.text = editTextTask;
                item.edit = false;
            }
        });
        setEditTextTask('');
        setListState(newDataList);
    }

    function addTask(event: any) {
        event.preventDefault();
        const value = currentValue;
        if (value) {
            let newDataList = [...todoList],
                lastIndex;

            if (newDataList.length === 0) {
                lastIndex = 0;
            } else {
                lastIndex = newDataList[newDataList.length - 1].id;
            }

            newDataList.push(
                {
                    id: ++lastIndex,
                    text: value,
                    edit: false,
                }
            );
            setCurrentValue('');
            setListState(newDataList);
        }
    }

    const [currentValue, setCurrentValue] = useState(''),
          [editTextTask, setEditTextTask] = useState(''),
          [todoList, setListState] = useState( [
                {
                    id: 1,
                    text: 'test',
                    edit: false,
                }
            ]
        );

    return (
        <TodoStyle>
            <DefTitle>Todo лист</DefTitle>
            <form onSubmit={addTask}>
                <TodoInputWrap>
                    <InputWrapper margin={'0 10px 0 0'}>
                        <DefInput
                            type="text"
                            placeholder='Введите запись'
                            onChange ={(event: React.ChangeEvent<HTMLInputElement>)=>setCurrentValue(event.target.value)}
                            value={currentValue}
                        />
                    </InputWrapper>
                    <DefButton>Добавить</DefButton>
                </TodoInputWrap>
                <TodoWrap>
                    {
                        todoList.map((item)=>{
                            return <TodoItem
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                edit={item.edit}
                                onEdit={(event: React.MouseEvent)=>editTask(item.id, item.text, event)}
                                onEditText={setEditTextTask}
                                onRemove={()=>removeTask(item.id)}
                                onSaveText={(event: React.MouseEvent)=>saveTask(item.id, event)}
                                onCancelEdit={()=>cancelTask(item.id)}
                            />
                        })
                    }
                </TodoWrap>
            </form>
        </TodoStyle>
    )
}
export default Todo;