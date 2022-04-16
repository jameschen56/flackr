import { NavLink } from "react-router-dom";
import React from "react";
import "./ImageDetail.css";

const ImageDetail = ({ id, imageUrl, description }) => {
  return (
    <div className="photostream-container">
      <div className="photostream-item">
        <div className="photostream-image">
          <NavLink className="single-image" to={`/images/${id}`}>
            <img src={`${imageUrl}`} alt={description} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default ImageDetail;
