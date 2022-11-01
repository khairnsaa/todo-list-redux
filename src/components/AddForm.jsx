import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (title === "" || content === "") return; 

        dispatch(
            addTodo({
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
                title,
                content,
            })
        );
        setTitle('')
        setContent('')
    };

    return (
        <StFormContainer>
        <form onSubmit={onSubmitHandler}>
            <label>I Wanna Do....</label>
            <StInput
            type="text"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}
            />
            <StInput
            type="text"
            value={content}
            onChange={(e) => {
                setContent(e.target.value);
            }}
            />
            <StButton>Add</StButton>
        </form>
        </StFormContainer>
    );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
