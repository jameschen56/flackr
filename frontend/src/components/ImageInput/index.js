import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createImage } from "../../store/image";

const ImageInput = () => {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session);
  console.log(sessionUser)
  const userId = sessionUser.id;
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const reset = () => {
    setImageUrl("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newImage = {
      userId,
      imageUrl,
      description,
    };

    dispatch(createImage(newImage));
    reset();
  };

  return (
    <div className="inputBox">
      <h1>Create New Image</h1>
      <form onSubmit={handleSubmit}>
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
          placeholder="Add a description"
          rows="3"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageInput;
