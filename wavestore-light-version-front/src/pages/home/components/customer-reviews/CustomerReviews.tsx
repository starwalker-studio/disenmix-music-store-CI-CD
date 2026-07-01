import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./CustomerReviews.module.scss";
import { REVIEWS } from "./reviews";

export const CustomerReviews = () => {
  return (
    <section className={style.reviews_section}>
      <div className={style.reviews_container}>
        <div className={style.reviews_wrapper}>
          <div className={style.reviews_content}>
            <div className={style.reviews_header}>
              <h2>What Our Customers Say</h2>
            </div>
            <div className={style.reviews_grid}>
              {REVIEWS.map((review) => (
                <div className={style.review_card} key={review.id}>
                  <div className={style.review_stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={
                          i < review.rating
                            ? style.star_filled
                            : style.star_empty
                        }
                      />
                    ))}
                  </div>
                  <p className={style.review_comment}>"{review.comment}"</p>
                  <div className={style.review_author}>
                    <strong>{review.name}</strong>
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                      {review.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
