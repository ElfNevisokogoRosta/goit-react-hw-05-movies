import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReviews } from "../../../../utils/customHooks/useReviews";
import { ReviewList } from "./Review.styled";
import ReviwElement from "./ReviewElement/ReviwElement";
import { ReviewI } from "../../../../utils/interfaces";
import { Loader } from "../../../../components/Loader";

const Review: React.FC = () => {
  const { movieId } = useParams();
  const [loading, error, result] = useReviews(movieId || "");
  const navigate = useNavigate();
  if (error) {
    navigate("/error");
  }
  return (
    <div>
      <ReviewList>
        {result.map((review: ReviewI) => (
          <ReviwElement review={review} />
        ))}
        {loading && <Loader />}
      </ReviewList>
    </div>
  );
};
export default Review;
