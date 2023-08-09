import { SetURLSearchParams } from "react-router-dom";
interface SearchFormProps {
  onSubmit: (
    func: (arg0: URLSearchParams, arg1: SetURLSearchParams) => void
  ) => void;
}
export default SearchFormProps;
