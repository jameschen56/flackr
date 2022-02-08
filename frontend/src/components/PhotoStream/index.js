import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllImages, createImage } from "../../store/image";
// import ImageDetail from '../ImageDetail'
// import SingleImage from '../SingleImage'

const PhotoStream = () => {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.image);
  console.log('images', images)
  const imagesArr = Object.values(images);
  console.log("imagesArr", imagesArr);

  useEffect(() => {
    dispatch(getAllImages());
    // dispatch(createImage())
  }, [dispatch]);

  return (
    <div>
      <h1>PhotoStream</h1>
      <ol>
        {imagesArr?.map((image) => (
        //   <li key={image.id}>{image.description}</li>
          <img key={image.id} src={image.imageUrl} alt={image.description}/>
        ))}
      </ol>
    </div>
  );
};

export default PhotoStream;
