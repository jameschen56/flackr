import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllLikes, addLike, removeLikeById } from "../../store/like";
import './Likes.css'

const Likes = (imageId) => {
  const dispatch = useDispatch();

  const [updateFavoriteCount, setUpdateFavoriteCount] = useState("");

  let idOfImage = imageId?.imageId;
  const userId = useSelector((state) => state.session.user?.id);
  const allLikesObj = useSelector((state) => state.likes);
  const allLikesArr = Object.values(allLikesObj);

  const imageLikes = allLikesArr.filter(
    (likes) => likes.imageId === +idOfImage
  );

  const favorited = imageLikes.find((likes) => likes.userId === +userId);

  useEffect(() => {
    dispatch(getAllLikes());
    setUpdateFavoriteCount("");
  }, [dispatch, updateFavoriteCount]);

  const payload = {
    userId,
    imageId: idOfImage
  }

  const favoriteImage = (e) => {
    return dispatch(addLike(payload))
    .then(() => {
      setUpdateFavoriteCount("Increase fave")
    })
      
  }

  const removeFavoriteImage = (e) => {
    let favoritedImage = imageLikes.find(like => like.userId === +userId)

    if (favoritedImage) {
      return dispatch(removeLikeById(favoritedImage.id))
        .then(() => {
          setUpdateFavoriteCount("Decrease fave")
        })
    }
  }

  let favoriteIcon;

  if (favorited) {
    favoriteIcon = <i className="fas fa-star" onClick={removeFavoriteImage}></i>;
  } else {
    favoriteIcon = <i className="far fa-star" onClick={favoriteImage}></i>;
  }

  return (
    <div className="favorites-container">
      <div className="favorites-icon">{favoriteIcon}</div>
      <span>
        {imageLikes.length === 0 && <div>{imageLikes.length} faves</div>}
        {imageLikes.length === 1 && <div>{imageLikes.length} faves</div>}
        {imageLikes.length > 1 && <div>{imageLikes.length} faves</div>}
      </span>
    </div>
  );
};

export default Likes;
