import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteImage, updateImage } from '../../store/image';
import { useHistory } from "react-router-dom";
import './ImageEdit.css'


const ImageEdit = ({ singleImage }) => {

    console.log('singleImage', singleImage)
    const id = singleImage.id
    console.log('id', id)
    const userId = (parseInt(singleImage.userId, 10));
    const [description, setDescription] = useState(singleImage.description);
    const [imageUrl, setImageUrl] = useState(singleImage.imageUrl);

    const updateDescription = (e) => setDescription(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
      e.preventDefault();
      await dispatch(deleteImage(singleImage))
      history.push("/images")
    };

    const handleSubmit =  async (e) => {
      e.preventDefault();

      const updatedImage = {
        id,
        userId,
        imageUrl,
        description
      };


      await dispatch(updateImage(updatedImage))
      history.push("/images")

    };

    return (
      <div className='editBox'>
        <form onSubmit={handleSubmit}>
          <label> Image URL
          <input
            type='text'
            placeholder={imageUrl}
            value={imageUrl}
            onChange={updateImageUrl}
            name='imageUrl'
          />
          </label>
          <label> Description
          <textarea
            value={description}
            onChange={updateDescription}
            name='description'
            placeholder={description}
            rows='3'
          ></textarea>
          </label>
          <button className="edit-button" type='submit'>Edit</button>
          <button className="edit-button" onClick={handleDelete}>Delete</button>
        </form>
      </div>
    );
  };

  export default ImageEdit;
