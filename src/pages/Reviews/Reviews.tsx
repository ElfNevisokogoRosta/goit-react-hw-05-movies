import React, { Suspense, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useReviews } from "../../utils/useReviews";
import { Review } from "../../utils/useReviews";
import { MutatingDots } from "react-loader-spinner";
import { ReviewList } from "./Reviews.styled";
const ReviewElement = React.lazy(() => import("./components/ReviewElement"));
export const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    { author: "", content: "", id: "1" },
  ]);

  const params = useParams<Record<string, string | undefined>>();
  const id = params.movieID;
  const [loading, error, result] = useReviews(id || "");
  const navigate = useNavigate();
  useEffect(() => {
    setReviews(result);
  }, [result]);
  if (error) {
    navigate("/error_page");
  }
  return (
    <div>
      <ReviewList>
        {reviews.map((review: Review, id: number) => {
          return (
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <MutatingDots />
                </div>
              }
            >
              <ReviewElement key={`${review.id}-${id}`} review={review} />
            </Suspense>
          );
        })}
        {loading ? <MutatingDots /> : ""}
      </ReviewList>
    </div>
  );
};
