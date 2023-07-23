import { SetStateAction } from "react";
interface SearchFormProps {
  onSubmit: (
    func: (arg0: string, arg1: React.Dispatch<SetStateAction<string>>) => void
  ) => void;
}
export default SearchFormProps;
