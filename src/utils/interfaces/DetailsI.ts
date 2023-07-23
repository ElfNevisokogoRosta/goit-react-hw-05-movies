interface DetailsI {
  id?: string;
  title: string;
  poster: string;
  vote: number;
  overview: string;
  genre: [{ name: string }];
}
export default DetailsI;
