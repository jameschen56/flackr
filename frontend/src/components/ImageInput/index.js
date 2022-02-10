import { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createImage } from "../../store/image";
import "./ImageInput.css";

const ImageInput = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  // console.log("userId", userId);

  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const uploadValidation = (e) => {
    let validationErrors = [];
    if (!imageUrl.length) validationErrors.push("Please provide a valid URL");
    if (imageUrl.length > 0 && !imageUrl.match(/^https?:\/\/.+\/.+$/)) validationErrors.push("Please provide a valid URL");
    if (!description.length) validationErrors.push("Please provide a description");

    if (validationErrors.length) {
      setErrors(validationErrors);
      console.log('validationErrors', validationErrors);
      return true;
    } else return false;
  }

  const reset = () => {
    setImageUrl("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    if(uploadValidation()) {

      e.preventDefault();
    } else {

      const newImage = {
        userId,
        imageUrl,
        description,
      };

      await dispatch(createImage(newImage));
      reset();
      // history.push("/images")
    }
  };

  return (
    <div className="upload-photo-page">
      <form onSubmit={handleSubmit} className="upload-photo-form">
        <header className="upload-photo-logo">
          <NavLink
            id="home-logo"
            exact
            to="/"
            style={{ textDecoration: "none" }}
          >
            <span className="dot" id="blueDot"></span>
            <span className="dot" id="redDot"></span>
            <span className="logo-title">flackr</span>
          </NavLink>
        </header>
        <h1 className="upload-photo-title">Upload Photo</h1>
        <ul className='errors-list'>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="inputs-container">
          <input
            type="text"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            placeholder="Image URL"
            name="imageUrl"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="Add your description"
            rows="3"
          ></textarea>
          <div className="blank-spaces">{""}</div>
          {/* <button type="submit">Submit</button> */}
          <NavLink className="upload-image-button" onClick={handleSubmit} to="/images">Submit</NavLink>
        </div>
      </form>
    </div>
  );
};

export default ImageInput;


