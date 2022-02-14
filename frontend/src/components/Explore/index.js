import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { getAllImages } from "../../store/image";
import ImageDetail from "../ImageDetail";
import SingleImage from '../SingleImage'
import ImageInput from '../ImageInput'
import "./Explore.css";

const Explore = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const imagesObj = useSelector((state) => state.image);
  const images = Object.values(imagesObj);
  const sessionImages = images.filter(
    (image) => image.userId === sessionUser.id
  );

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  return (
    <div className="images-container">
      <div className="explore-content">
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

export default Explore;
