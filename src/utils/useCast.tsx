import axios from "axios";
import { useState, useEffect } from "react";
export interface Actor {
  character: string;
  name: string;
  profile_path: string;
  id: string;
}
export const useCast = (id: string): [boolean, boolean | {}, Actor[]] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | {}>(false);
  const [result, setResult] = useState<Actor[]>([
    {
      character: "",
      name: "",
      profile_path: "",
      id: "1",
    },
  ]);
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
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
        setResult(response.data.cast);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return [loading, error, result];
};
