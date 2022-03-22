import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AltImage } from 'assets/index'
import './ImageCard.css'

const ImageCard = ({image}) => {
    const { id,  width, height, download_url } = image
    const navigate = useNavigate();

    const [imageReady, setImageReady] = useState(false);

    const onClickCard = (id, image) => {
        navigate(`:${id}`, { state: { image: image } })
    }

    const isVerticalImage = (width, height) => {
        return width > height
    }

    useEffect(() => {
        const img = new Image()
        img.onload = function() {
            setImageReady(true)
        }
        img.src = download_url
    }, [])

    return (
        <div className={"image-card"} onClick={() => onClickCard(id, image)}>
            { imageReady ? (
                <img src={download_url} loading="lazy" alt={download_url} className={isVerticalImage(width, height) ? "vertical" : "horizontal"}></img>
            ) : (
                <img src={AltImage} alt={""} className={"image-alt"}></img>
            )}
        </div>
    )
}

export default ImageCard