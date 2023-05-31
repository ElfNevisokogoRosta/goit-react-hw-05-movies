import axios from "axios";
import { useState, useEffect } from "react";
export interface Review {
  author: string;
  content: string;
  id: string;
}
export const useReviews = (id: string): [boolean, boolean | {}, Review[]] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | {}>(false);
  const [result, setResult] = useState<Review[]>([
    { author: "", content: "", id: "1" },
  ]);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjMyZGIyYjk3MmRhNDVhYTM2ZGNjNDQ4OTkxZjVhOSIsInN1YiI6IjYzZGNjMzI1MzczYWMyMDA3YzFmMWQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DZJG4ucbFS5JBmGqClsdFcJE-gYfRMAFvYwLoM8XCWc",
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setResult(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });
  }, [id]);
  return [loading, error, result];
};
