import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Redirect, Link} from 'react-router-dom';
import EditCommentModal from './EditComment';
import {getComments, createComment,removeComment} from '../../store/comment';

import './Comment.css'

const Comment = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [comment, setComment] = useState('');
    const [commentToDeleteId, setCommentToDeleteId] = useState('');
    const [render, setRender] = useState(false);


    const {id} = useParams();

    const comments = useSelector(state=>{
        return Object.values(state.comments)
    })

    const usersComments = comments.filter(comment => comment.imageId === Number(id))

    let renderCommentList = null;

    useEffect(() => {
        dispatch(getComments(id))
        renderCommentList();
    }, [dispatch, id, render])
    
    if(!comments) return null;

    if(!sessionUser) {
        return <Redirect to='/login' />
    };

    renderCommentList = () => {
        return(
            usersComments.length === 0 ? <div className="empty-comment">Post your comment here!</div> :
            usersComments?.map((comment)=>(
                <div className="comments-container" key={comment.id}>
                    <h4><p className="link-comment-user" >{comment?.User?.username}</p></h4>
                    <div className="user-comment-info">
                        <div className="comment-p">
                            <p>{comment.comment}</p>
                        </div>
                        <div className="user-comment-delete-edit">
                            <div>
                                <form onSubmit={handleDeleteComment} hidden={comment.userId !== sessionUser?.id}>
                                    <button className="fas fa-times" text="Delete Comment" onClick={e=> setCommentToDeleteId(comment.id)}></button>
                                </form>
                            </div>
                            <div hidden={comment.userId !== sessionUser?.id} className="edit-comment">
                                <EditCommentModal render={render} setRender={setRender}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const commentData = {
            comment: comment,
            userId: sessionUser.id,
            imageId: id
        }

        await dispatch(createComment(commentData))
        setComment('')
    }

    const handleDeleteComment = async (e) => {
        e.preventDefault();
        await dispatch(removeComment(commentToDeleteId))
    }



    return (
        <div className='comment-container'>
            {renderCommentList()}


            <div className="comment-form-container">
                <form className="comment-form" onSubmit={handleSubmit}>
                    <div className="comment-textarea">
                        <textarea placeholder='Add a comment' value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
                    </div>
                    <div className='post-comment-bttn-div'>
                        <button className='post-comment-bttn' onClick={handleSubmit}>Post Comment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comment
