import { csrfFetch } from "./csrf";

const LOAD_LIKES = "likes/LOAD_LIKES";

/* ----- ACTIONS ------ */

const load_likes = (likes) => {
  return {
    type: LOAD_LIKES,
    likes,
  };
};


/* ------ THUNK ACTIONS ------ */

export const getAllLikes = () => async(dispatch) => {
    const response = await csrfFetch('/api/likes');
  
    if (response.ok) {
      const data = await response.json()
      dispatch(load_likes(data.likes))
      return data.likes
    }
  }



/* ------ REDUCER ------ */

const initialState = {};

export default function likeReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case LOAD_LIKES:
        newState = {};
        action.likes.forEach((like) => { newState[like.id] = like })
        return newState;

      default:
        return state;

    }

}