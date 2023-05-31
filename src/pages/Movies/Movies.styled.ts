import styled from "styled-components";
const MovieContianer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const FormInput = styled.input`
  width: 65%;
  padding: 10px 15px;
  font-size: 24px;
  border: none;
  background-color: tomato;
  border-radius: 15px;
  color: #fff;
  &:focus {
    outline: none;
  }
`;
const FormBtn = styled.button`
  cursor: pointer;
  width: 25%;
  border: none;
  border-radius: 15px;
  background-color: teal;
  font-size: 24px;
  color: #fff;
  transition: background-color, 250ms, cubic-bezier(0.075, 0.82, 0.165, 1),
    color, 250ms, cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: tomato;
    color: #2a2a2a;
  }
`;
const SearchForm = styled.form`
  display: block;
`;
export { FormContainer, FormInput, FormBtn, MovieContianer, SearchForm };
