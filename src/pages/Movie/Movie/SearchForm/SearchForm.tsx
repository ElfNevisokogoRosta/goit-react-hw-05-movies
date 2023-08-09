import React, { useState } from "react";
import { LuPackageSearch } from "react-icons/lu";
import {
  FormContainer,
  FormInput,
  FormBtn,
  SearchFormStyled,
} from "./SearchForm.styled";
import { SearchFormProps } from "../../../../utils/interfaces";
import { SetURLSearchParams } from "react-router-dom";

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const sendQuery = (state: URLSearchParams, setState: SetURLSearchParams) => {
    setState({ query: query });
  };
  return (
    <FormContainer>
      <SearchFormStyled
        onSubmit={(e) => {
          onFormSubmit(e);
          onSubmit(sendQuery);
        }}
      >
        <FormContainer>
          <FormInput
            type="search"
            name="query"
            value={query}
            onChange={onInputChange}
          />
          <FormBtn>
            <LuPackageSearch />
          </FormBtn>
        </FormContainer>
      </SearchFormStyled>
    </FormContainer>
  );
};
