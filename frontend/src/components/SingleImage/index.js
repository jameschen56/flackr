import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import ImageEdit from '../ImageEdit';
import Comment from '../Comments';


const SingleImage = () => {
  const { id } = useParams();

  const sessionUser = useSelector(state => state.session.user);
  const imagesObject = useSelector((state) => state.image)
  const images = Object.values(imagesObject);
  const singleImage = images.find((image) => image.id === +id);
  const [showMenu, setShowMenu] = useState(false);

  // console.log('sessionUser', sessionUser)

  const openCloseMenu = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  };


  return (
    <div className="single-image-page">
        <div className='single-image-container'>
          <div className="single-icons">
            <NavLink to="/images">
              <i className="arrow left"></i>
               Back to Photostream</NavLink>
            </div>

        


        </div>
        <div className="photo-description">

            <div className="photo-description-text">
                <div className="name-and-edit">
                <h2>Hi, {sessionUser.username}</h2>
                <button id="edit-photo-button" onClick={openCloseMenu}>
                  <i className="fas fa-pen"></i>
                </button>
                </div>
                <img className="single-image" src={singleImage?.imageUrl} alt={singleImage?.description} />
                <p>Description: {singleImage?.description}</p>
                <div>
                  <Comment />
                </div>
            </div>
        </div>
        {showMenu && (
            <div className="photo-edit-delete-form">
                <ImageEdit singleImage={singleImage}/>
            </div>
        )}
    </div>
  );
};
export default SingleImage;
