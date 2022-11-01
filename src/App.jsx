import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import styled from "styled-components";
import AddForm from "./components/AddForm";
import TodoDoneContainer from "./components/TodoDoneContainer";

const App = () => {
  return (
    <StContainer>
        <AddForm />
        <TodoContainer>
            <TodoListContainer />
            <TodoDoneContainer />
        </TodoContainer>
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  margin: 0 auto;
`;

const TodoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
