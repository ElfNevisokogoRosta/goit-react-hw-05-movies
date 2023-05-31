import axios from "axios";
import { useState, useEffect } from "react";
import { MovieI } from "../pages/Movie/Movie";
export const useMovie = (id: string): [boolean, boolean | {}, MovieI] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | {}>(false);
  const [result, setResult] = useState<MovieI>({
    title: "",
    poster_path: "",
    vote_average: 0,
    overview: "",
    genres: [{ name: "" }],
  });
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: "en-US" },
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
        setResult(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });
  }, [id]);
  return [loading, error, result];
};
