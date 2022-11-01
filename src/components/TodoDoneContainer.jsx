import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodoDone, workingTodo } from "../redux/modules/todos";

const TodoDoneContainer = () => {
    const { doneTodos } = useSelector((state) => state.todos);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Done 🎉</h1>
            <StTodos>
                {console.log(doneTodos)}
                {doneTodos.map((todo) => (
                    <StTodo key={todo.id}>
                    <TodoTitle>{todo.title}</TodoTitle>
                    <TodoTitle>{todo.content}</TodoTitle>
                    <CtaWrap>
                        <DelBtn onClick={() => dispatch(deleteTodoDone({id: todo.id}))}>delete</DelBtn>
                        <DoneBtn onClick={() => dispatch(workingTodo({id: todo.id}))}>done</DoneBtn>
                    </CtaWrap>
                    <DetailBtn>Detail Todo</DetailBtn>
                    </StTodo>
                ))}
            </StTodos>
        </div>
    );
};

export default TodoDoneContainer;

const StTodos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 12px;
`;

const TodoTitle = styled.h1`
    font-weight: 700;
    text-transform: capitalize;
    margin: 0;
`;

const CtaWrap = styled.div`
    display: flex;
    margin: 0.5rem 0;
    width: 100%;
`;

const DelBtn = styled.button`
  border: 0.12rem solid maroon;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  width: 100%;
`;

const DoneBtn = styled.button`
  border: 0.12rem solid green;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  width: 100%;
`;

const DetailBtn = styled.button`
  border: 0.12rem solid blue;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  width: 100%;
`;
