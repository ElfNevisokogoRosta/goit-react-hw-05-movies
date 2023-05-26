import React, { useState, useEffect } from "react";
import axios from "axios";

export const usePopular = (
  page: number
): [boolean, boolean | {}, [], number] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | {}>(false);
  const [response, setResponse] = useState<[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const options: {
    method: string;
    url: string;
    params: {
      language: string;
      page: number;
    };
    headers: { accept: string; Authorization: string };
  } = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/day",
    params: { language: "en-US", page: page },
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
      .then((res) => {
        setLoading(false);
        setResponse(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((error) => {
        setError(error);
      });
  }, [page]);
  return [loading, error, response, totalPages];
};
