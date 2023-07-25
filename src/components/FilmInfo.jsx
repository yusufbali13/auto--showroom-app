import React from "react";
import StarRatingComponent from "react-star-rating-component";

const FilmInfo = ({ film }) => {
  const { title, rate, image } = film;
  return (
    <div className="col-12 col-sm-9">
      <div>
        <h3>{title}</h3>
      </div>
      <img src={image} alt="img" width={"250px"} />
      <article className="d-flex align-items-center"></article>
      <article className="d-flex align-items-center">
        <div className="d-flex mx-1 align-items-center">
          <div
            className="d-flex pe-1 pe-md-2 pe-lg-4 align-items-center"
            style={{ fontSize: "1.8rem" }}
          >
            <StarRatingComponent
              name="rate"
              starCount={5}
              value={Math.round(rate / 2)}
              editing={true}
            />
          </div>
          <div
            className="pe-1 pe-md-2 pe-lg-4 d-flex align-items-center text-danger"
            style={{ fontSize: "1.4rem" }}
          >
            {rate.toFixed(2)} / 10
          </div>
        </div>
      </article>
    </div>
  );
};

export default FilmInfo;
