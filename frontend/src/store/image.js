import { csrfFetch } from "./csrf";

const LOAD_IMAGES = 'images/loadImages'

export const loadImages = (images) => {
    return {
        type: LOAD_IMAGES,
        images
    };
}


export const getAllImages = () => async(dispatch) => {
    const response = await csrfFetch('/api/images')
    const data = await response.json()
    dispatch(loadImages(data))
}

const initialState = { };

const imageReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case LOAD_IMAGES:
            return {...action.images};
        default:
            return state;
    }
}

export default imageReducer;