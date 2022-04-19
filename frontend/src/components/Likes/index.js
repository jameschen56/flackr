import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllLikes, addLike, removeLikeById } from "../../store/like";
import './Likes.css'

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

  const payload = {
    userId,
    imageId: idOfImage
  }

  const likeImage = (e) => {
    return dispatch(addLike(payload))
    .then(() => {
      setUpdateLikeCount("Increase count")
    })
      
  }

  const removeLikeImage = (e) => {
    let likedImage = imageLikes.find(like => like.userId === +userId)

    if (likedImage) {
      return dispatch(removeLikeById(likedImage.id))
        .then(() => {
          setUpdateLikeCount("Decrease count")
        })
    }
  }

  let likeIcon;

  if (liked) {
    likeIcon = <i className="fas fa-heart icon" onClick={removeLikeImage}></i>;
  } else {
    likeIcon = <i className="far fa-heart" onClick={likeImage}></i>;
  }

  return (
    <div className="likes-container">
      <div className="likes-icon">{likeIcon}</div>
      <span>
        {imageLikes.length === 0 && <div>{imageLikes.length} faves</div>}
        {imageLikes.length === 1 && <div>{imageLikes.length} faves</div>}
        {imageLikes.length > 1 && <div>{imageLikes.length} faves</div>}
      </span>
    </div>
  );
};

export default Likes;
