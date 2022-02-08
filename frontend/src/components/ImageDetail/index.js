import { NavLink } from 'react-router-dom'


const ImageDetail = ({ id, imageUrl, description}) => {
    return (
        <div className="image-gallery">
            <NavLink className="single-image" to={`/images/${id}`}><img src={`${imageUrl}`} alt={description} /></NavLink>
        </div>
    )
}

export default ImageDetail;