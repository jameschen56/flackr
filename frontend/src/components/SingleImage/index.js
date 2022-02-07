import { useSelector } from "react-redux";
import { useParams } from "react-router";

const SingleImage = () => {
  const { id } = useParams();

  const singleImage = useSelector((state) => state.image.entries[id]);

  return (
    <div className="singleImage">
      <img src={singleImage?.imageUrl} alt={singleImage?.description} />
      <p>{singleImage?.description}</p>
    </div>
  );
};

export default SingleImage;
