import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
    const { getDoneTodo } = useSelector((state) => state.todos);
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }
    return (
        <DetailTodo>
            <HeaderTodo>
                <p>ID: {getDoneTodo[0].id}</p>
                <BackBtn onClick={goBack}>go back</BackBtn>
            </HeaderTodo>
            <div>
                <TodoTitle>{getDoneTodo[0].title}</TodoTitle>
                <TodoDetail>{getDoneTodo[0].content}</TodoDetail>
            </div>
        </DetailTodo>
    );
}
 
export default Detail;

const DetailTodo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-height: 80vh;
`;

const HeaderTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 0.12rem solid #1c1c1c;
`;

const TodoTitle = styled.h1`
    font-weight: 700;
    text-transform: capitalize;
    margin: 0;
`;

const TodoDetail = styled.p`
    text-transform: capitalize;
    margin: 1rem 0;
`;