interface LoadMoreBtnProps {
  onClick: (
    func: (
      page: number,
      setPage: React.Dispatch<React.SetStateAction<number>>
    ) => void
  ) => void;
}
export default LoadMoreBtnProps;
