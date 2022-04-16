import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { getAllImages } from "../../store/image";
import ImageDetail from "../ImageDetail";
import SingleImage from '../SingleImage'
import ImageInput from '../ImageInput'
import Footer from "../Footer"
import "./Explore.css";

const Explore = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const imagesObj = useSelector((state) => state.image);
  const images = Object.values(imagesObj);
  console.log("---------------", images)
  const [isLoaded, setIsLoaded] = useState(false);
  // const sessionImages = images.filter(
  //   (image) => image.userId === sessionUser.id
  // );

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
});

  return (
    <>
    <div className="image-page-container">
        <div id="navbar-background"></div>
        <div className="explore-header">Explore</div>
        {isLoaded && images ?
            <div className="photo-stream-content">
                {images?.map((image) => (
                    <>
                    <ImageDetail key={image.id} id={image.id} imageUrl={image.imageUrl} description={image.description}/>
                    </>
                ))}
            </div> : <div className="loading photo-loading"></div>}
            {/* <Footer /> */}
        </div>
    </>
    // <div className="images-container">
    //   <div className="explore-content">
    //     {sessionImages?.map(({ imageUrl, id, description }) => (
    //       <ImageDetail
    //         key={id}
    //         id={id}
    //         imageUrl={imageUrl}
    //         description={description}
          
    //       />
    //     ))}
    //   </div>

    //   <Route path="images/:id">
    //     <SingleImage images={images} />
    //   </Route>
    //   <Route path="/images/upload">
    //     <ImageInput />
    //   </Route>
    // </div>
  );
};

export default Explore;
