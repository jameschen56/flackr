import { useState, useEffect } from "react";
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

  useEffect(() => {
    const validationErrors = [];
    if (!imageUrl.length) validationErrors.push("Please provide a valid URL");
    if (imageUrl.length > 0 && !imageUrl.match(/^https?:\/\/.+\/.+$/)) validationErrors.push("Please provide a valid URL");
    if (!description.length) validationErrors.push("Please provide a description");
    setErrors(validationErrors);
}, [imageUrl, description])

  const reset = () => {
    setImageUrl("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newImage = {
      userId,
      imageUrl,
      description,
    };

    await dispatch(createImage(newImage));
    history.push("/images")
    reset();
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
          <button type="submit" disabled={!!errors.length}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ImageInput;
