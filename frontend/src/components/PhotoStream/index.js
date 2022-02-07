import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllImages } from "../../store/image"
// import ImageDetail from '../ImageDetail'
// import SingleImage from '../SingleImage'

const PhotoStream = () => {
    const dispatch = useDispatch();

    const imagesObj = useSelector((state) => (state.image.entries))
    // console.log('imagesObj', imagesObj)
    // const images = Object.values(imagesObj)

    useEffect(() => {
        dispatch(getAllImages())
    }, [dispatch])

    return (
    
        // <div className="photo-stream">
        //      {sessionImages?.map(({ imageUrl, id, description }) => (
        //             <ImageDetail key={id} id={id} imageUrl={imageUrl} description={description}/>
        //         ))}
        // </div>
        <h1>PhotoStream</h1>
        
    )
}


export default PhotoStream;