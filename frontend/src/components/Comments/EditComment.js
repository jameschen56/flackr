import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Redirect, useHistory} from 'react-router-dom';
import {Modal} from '../../context/Modal';
import {getComments, updateComment} from '../../store/comment';

import './Comment.css'

function EditCommentModal ({ render, setRender }) {
    const {id} = useParams()

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const comments = useSelector(state=>{
        return Object.values(state.comments)
    })

    const usersComments = comments.filter(comment => comment.imageId === Number(id))

    const [commentToUpdateId, setCommentUpdateId] = useState('');
    const [editedComment, setEditedComment] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getComments(id))
    }, [dispatch, id, sessionUser.id])

    if(!comments) return null;

    if(!sessionUser) {
        return <Redirect to='/login' />
    };

    const handleEditComment = async(e) => {
        e.preventDefault();
        const data = {id: commentToUpdateId, content: editedComment}
        await dispatch(updateComment(data))
        setRender(!render)
        setShowModal(false)
    }

    const handleCancelEdit = (e) => {
        e.preventDefault();
        history.push(`/images/${id}`)
        setShowModal(false)
    };

    return (
        <>
        <button className="far fa-edit" text="Edit Comment" onClick={() => {setShowModal(true)}}></button>
        {usersComments?.map((comment)=>(
            <div hidden={comment.userId !== sessionUser.id} key={comment.id}>
                {showModal && (
                    <Modal>
                        <div className='edit-form-container' >
                            <form className="edit-form" onSubmit={handleEditComment}>
                                <h1>Edit Comment</h1>
                                <div className="update-textarea">
                                    <textarea placeholder={comment.comment} className="comment-txt-area" type="textarea" value={editedComment.comment} onChange={(e) =>setEditedComment(e.target.value)} required/>
                                </div>
                                <div className="update-bttn">
                                    <button onClick={e=> setCommentUpdateId(comment.id)}>Edit Comment</button>
                                </div>
                                <div className="update-bttn">
                                    <button onClick={handleCancelEdit}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                )}
            </div>
        ))}
        </>
    )




}

export default EditCommentModal
