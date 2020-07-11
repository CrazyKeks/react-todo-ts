import React from "react";
import {TodoText, TodoWrapBtn} from "../styled"
import {ItemList} from "./styled";
import {DefButton} from "../../../assets/button/styled";
import {DefInput} from "../../../assets/input/styled";
import {InputWrapper} from "../../../assets/wrapper/styled";

interface ItemProps {
    key: number,
    id: number,
    text: string,
    edit: boolean,
    onEdit: (event: React.MouseEvent)=>void,
    onEditText: React.Dispatch<React.SetStateAction<string>>,
    onRemove: ()=>void,
    onSaveText: (event: React.MouseEvent)=>void,
    onCancelEdit: ()=>void
}

function TodoItem(props: ItemProps) {

  const editAndRemoveBtn = () => {
    return (
      <ItemList margin={'0 0 10px 0'}>
        <TodoText contentEditable={false} title={props.text}>{props.text}</TodoText>
        <TodoWrapBtn>
          <DefButton onClick={props.onEdit} margin={'0 10px 0 0'}>Изменить</DefButton>
          <DefButton onClick={props.onRemove} background={'#f44336'}>Удалить</DefButton>
        </TodoWrapBtn>
      </ItemList>
    )
  };
  const editOptionBtn = () => {
    return (
      <ItemList margin={'0 0 10px 0'}>
        <InputWrapper margin={'0 10px 0 0'}>
          <DefInput type="text" editable="true" defaultValue={props.text} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>props.onEditText(event.target.value)} ></DefInput>
        </InputWrapper>
        <TodoWrapBtn>
          <DefButton onClick={props.onSaveText} margin={'0 10px 0 0'}>
            Сохранить
          </DefButton>
          <DefButton onClick={props.onCancelEdit} background={'#f44336'}>
            Отменить
          </DefButton>
        </TodoWrapBtn>
      </ItemList>
    )
  };

  return (props.edit ? editOptionBtn() : editAndRemoveBtn());
}

export default TodoItem;