import { NavLink } from 'react-router-dom';
import React from 'react';


const ImageDetail = ({ id, imageUrl, description }) => {
  return (
    <div className="images-show">
      <NavLink className="single-image" to={`/images/${id}`}><img src={`${imageUrl}`} alt={description}/></NavLink>
    </div>
  );
};
export default ImageDetail;
