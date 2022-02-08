import { csrfFetch } from "./csrf";

const LOAD_IMAGES = 'images/loadImages';
const ADD_IMAGE = 'images/addImage';

/***** Actions ****/

export const loadImages = (images) => {
    return {
        type: LOAD_IMAGES,
        images
    };
}

export const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image
    }
}

/***** Thunk Actions ****/

export const getAllImages = () => async(dispatch) => {
    const response = await csrfFetch('/api/images')
    const data = await response.json()
    dispatch(loadImages(data))
}

export const createImage = (newImage) => async (dispatch) => {
    const { userId, imageUrl, description } = newImage;
    const response = await csrfFetch ("/api/images", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        userId,
        imageUrl,
        description,
      }),
    });
    console.log('response', response)

    const data = await response.json();
    dispatch(addImage(data));
    return response;
};

/***** Reducer ****/

const initialState = { };

const imageReducer = (state = initialState, action) => {
    
    let newState;
    switch(action.type) {
        case LOAD_IMAGES:
            return {...action.images};
        case ADD_IMAGE:
            newState = {...state, ...action.image}
            return newState
        default:
            return state;
    }
}

export default imageReducer;



