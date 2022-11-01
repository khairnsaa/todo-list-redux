import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, doneTodo } from "../redux/modules/todos";

const TodoListContainer = () => {
    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch()
    // const handleDelete = (e) => {
    //     e.preventDefault()

    //     useDispatch(
    //         deleteTodo({id: })
    //     )
    // }
    return (
        <Container>
            <h1>Working On It!! 🔥</h1>
            <StTodos>
                {console.log(todos)}
                {todos.map((todo) => (
                    <StTodo key={todo.id}>
                    <TodoTitle>{todo.title}</TodoTitle>
                    <TodoTitle>{todo.content}</TodoTitle>
                    <CtaWrap>
                        <DelBtn onClick={() => dispatch(deleteTodo({id: todo.id}))}>delete</DelBtn>
                        <DoneBtn onClick={() => dispatch(doneTodo({id: todo.id}))}>done</DoneBtn>
                    </CtaWrap>
                    <DetailBtn>Detail Todo</DetailBtn>
                    </StTodo>
                ))}
            </StTodos>
        </Container>
    );
};

export default TodoListContainer;



const Container = styled.div`
    padding: 0.5rem 1rem;
    border-right: 0.3rem dashed #1c1c1c;
`;
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
