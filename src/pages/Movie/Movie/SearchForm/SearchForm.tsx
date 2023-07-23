import React, { SetStateAction, useState } from "react";
import { LuPackageSearch } from "react-icons/lu";
import {
  FormContainer,
  FormInput,
  FormBtn,
  SearchFormStyled,
} from "./SearchForm.styled";
import { SearchFormProps } from "../../../../utils/interfaces";

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const sendQuery = (
    state: string,
    setState: React.Dispatch<SetStateAction<string>>
  ) => {
    setState(query);
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
            type="text"
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
