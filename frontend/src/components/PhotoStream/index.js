import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { getAllImages } from "../../store/image";
import ImageDetail from "../ImageDetail";
import SingleImage from '../SingleImage'
import ImageInput from '../ImageInput'
import "./PhotoStream.css";

const PhotoStream = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const imagesObj = useSelector((state) => state.image);
  const images = Object.values(imagesObj);
  // console.log('images', images)
  // console.log('sessionUser', sessionUser.id)
  const sessionImages = images.filter(
    (image) => image.userId === sessionUser.id
  );
  console.log("sessionImages", sessionImages);

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  return (
    <div className="photo-page">
      <div className="photo-info-container">
        <div className="info-container">
          <h1>PhotoStream</h1>
        </div>
      </div>
      <div className="photo-stream-content">
        {sessionImages?.map(({ imageUrl, id, description }) => (
          <ImageDetail
            key={id}
            id={id}
            imageUrl={imageUrl}
            description={description}
          />
        ))}
      </div>

      <Route path="images/:id">
        <SingleImage images={images} />
      </Route>
      <Route path="/images/upload">
        <ImageInput />
      </Route>
    </div>
  );
};

export default PhotoStream;
