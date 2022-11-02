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
            <FormTag onSubmit={onSubmitHandler}>
                <Formdiv>
                    <StInput
                    type="text"
                    value={title}
                    placeholder="title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    />
                    <StInput
                    type="text"
                    value={content}
                    placeholder="description"
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                    />
                </Formdiv>
                <StButton>Add</StButton>
            </FormTag>
        </StFormContainer>
    );
};

export default AddForm;

const StFormContainer = styled.div`
  padding: 0.5rem 0;
`;

const FormTag =  styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    padding: 0;
`;

const Formdiv =  styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`;



const StButton = styled.button`
  border: none;
  background-color: #eee;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  border-radius: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
`;
