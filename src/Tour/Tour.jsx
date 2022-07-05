import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setreadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">
            <span>$</span>
            {price}
          </h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, info.length / 2)}...`}
          <button onClick={() => setreadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
