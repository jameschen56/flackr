import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllLikes } from "../../store/like";

const Likes = (imageId) => {
  const dispatch = useDispatch();

  const [updateLikeCount, setUpdateLikeCount] = useState("");

  let idOfImage = imageId?.imageId;
  const userId = useSelector((state) => state.session.user?.id);
  const allLikesObj = useSelector((state) => state.likes);
  const allLikesArr = Object.values(allLikesObj);

  const imageLikes = allLikesArr.filter(
    (likes) => likes.imageId === +idOfImage
  );

  const liked = imageLikes.find((likes) => likes.userId === +userId);

  useEffect(() => {
    dispatch(getAllLikes());
    setUpdateLikeCount("");
  }, [dispatch, updateLikeCount]);

  let likeIcon;

  if (liked) {
    likeIcon = <i className="fas fa-heart icon"></i>;
  } else {
    likeIcon = <i className="far fa-heart"></i>;
  }

  return (
    <div className="likes-container">
      <div className="likes-icon">{likeIcon}</div>
      <span>
        {imageLikes.length === 0 && <div>{imageLikes.length} likes</div>}
        {imageLikes.length === 1 && <div>{imageLikes.length} like</div>}
        {imageLikes.length > 1 && <div>{imageLikes.length} likes</div>}
      </span>
    </div>
  );
};

export default Likes;
