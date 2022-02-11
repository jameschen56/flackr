import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = 'comments/LOAD_COMMENTS';

/***** Actions ****/

const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments
})

/***** Thunk Actions ****/

export const getComments = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`)

    if(response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments))
    }
}

/***** Reducer ****/

const initialState = {}

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_COMMENTS: {
            const newAllComments = {}    
            action.comments.forEach(comment => {
                newAllComments[comment.id] = comment
            })
            return {
                ...newAllComments, ...state
           }
        }
        default:
            return state
    }
}

export default commentReducer