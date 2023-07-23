import React from "react";
import { ReviewI } from "../../../../../utils/useReviews";
import {
  ReviewContainer,
  ReviewTitle,
  ReviewDis,
} from "./ReviewElement.styled";
interface ReviewElementProps {
  review: ReviewI;
}
const ReviewElement: React.FC<ReviewElementProps> = ({ review }) => {
  return (
    <>
      <ReviewContainer>
        <ReviewTitle>{review.author}</ReviewTitle>
        <ReviewDis>{review.content}</ReviewDis>
      </ReviewContainer>
    </>
  );
};
export default ReviewElement;
