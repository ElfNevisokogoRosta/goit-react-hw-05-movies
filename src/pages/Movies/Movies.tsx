import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../components/Header.styled";
import { FormContainer, FormInput, FormBtn, SearchForm } from "./Movies.styled";
import { MovieContianer } from "./Movies.styled";
export const Movies: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();
  const queryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/movies/searh/${query}`);
  };
  return (
    <Container>
      <MovieContianer>
        <SearchForm action="" onSubmit={submitHandler}>
          <FormContainer>
            <FormInput type="text" name="query" onChange={queryHandler} />
            <FormBtn>Search</FormBtn>
          </FormContainer>
        </SearchForm>
        <Outlet />
      </MovieContianer>
    </Container>
  );
};
