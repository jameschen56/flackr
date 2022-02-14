import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import ImageEdit from '../ImageEdit';
import Comment from '../Comments';
import { getSingleImage } from '../../store/image';
import './SingleImage.css'


const SingleImage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const singleImage = useSelector(state => state.image.singleImage);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(getSingleImage(id));
  }, [dispatch, id]);

  const openCloseMenu = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  };


  return (
    <div className="single-image-page">
        <div className='single-image-container'>
          <div className="single-icons">
            <NavLink to="/images" className='back-to-explore'>
               Back to Explore</NavLink>
            </div>
                <img className="single-image" src={singleImage?.imageUrl} alt={singleImage?.description} />


        </div>

        <div className="photo-description">

            <div className="photo-description-text">
                <div className="name-and-edit">
                <h2>Hi, {sessionUser.username}</h2>
                <button id="edit-image-button" onClick={openCloseMenu}>
                  <i className="fas fa-pen"></i>
                </button>
                </div>
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
