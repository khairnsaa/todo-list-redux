import styled from "styled-components";
import TodoDoneContainer from "../components/TodoDoneContainer";
import TodoListContainer from "../components/TodoListContainer";
import AddForm from "../components/AddForm";

const Home = () => {
    return (
        <StContainer>
            <Header className="test">
                <Greetings>Hello</Greetings>
                <AddForm />
            </Header>
            <TodoContainer>
                <TodoListContainer />
                <TodoDoneContainer />
            </TodoContainer>
        </StContainer>
    );
}
 
export default Home;

const StContainer = styled.section`
  margin: 0 auto;
  width: 60%;
  font-family: 'Poppins', sans-serif;
`;

const TodoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Greetings = styled.h2`
margin: 0;
padding: 1rem 0;
text-align: center;
color: white;
`;

const Header = styled.header`
    background-image: url('http://localhost:3000/static/media/3.73afbd078c319bf37746.png');
    background-position: top center;
    padding: 0.5rem 0;
    margin-bottom: 2rem;
`;
