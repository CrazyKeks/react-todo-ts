import styled from 'styled-components';

export const TodoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TodoInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TodoText = styled.div`
  margin-right: 10px;
  font-size: 16px;
  font-family: Roboto,Helvetica Neue,sans-serif;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 30%;
  flex-shrink: 0;
`;

export const TodoWrapBtn = styled.div`
 display: flex;
`;

export const TodoLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
`;

export const TodoWrap = styled.ul`
  padding:0;
  margin: 0;
`;