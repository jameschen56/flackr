import { csrfFetch } from "./csrf";

const LOAD_IMAGES = "images/loadImages";
const ADD_IMAGE = "images/addImage";
const UPDATE_IMAGE = "images/updateImage";
const REMOVE_IMAGE = "images/removeImage";

/***** Actions ****/

export const loadImages = (images) => {
  return {
    type: LOAD_IMAGES,
    images,
  };
};

export const addImage = (image) => {
  return {
    type: ADD_IMAGE,
    image,
  };
};

export const editImage = (image) => {
  return {
    type: UPDATE_IMAGE,
    image,
  };
};

export const removeImage = (imageId) => {
  return {
    type: REMOVE_IMAGE,
    imageId,
  };
};

/***** Thunk Actions ****/

export const getAllImages = () => async (dispatch) => {
  const response = await csrfFetch("/api/images");
  const data = await response.json();
  dispatch(loadImages(data));
};

export const updateImage = (image) => async (dispatch) => {
  console.log(image);
  const response = await csrfFetch(`/api/images/${image.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addImage(data.image));
    // return data;
  }
};

export const createImage = (newImage) => async (dispatch) => {
  const { userId, imageUrl, description } = newImage;
  const response = await csrfFetch("/api/images", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      imageUrl,
      description,
    }),
  });

  // console.log('response', response)

  const data = await response.json();
  console.log('data', data)
  dispatch(addImage(data.id));
  return response;
};

export const deleteImage = (image) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${image.id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  dispatch(removeImage(data.id));
  return response;
};

/***** Reducer ****/

const initialState = {};

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_IMAGES:
      return { ...action.images };
    case ADD_IMAGE:
      newState = { ...state, ...action.image };
      return newState;
    case UPDATE_IMAGE:
      newState = {
        ...state,
        [action.image.id]: {
          ...action.image,
        },
      };
      return newState;
    case REMOVE_IMAGE:
      newState = { ...state };
      delete newState[action.imageId];
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
