import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getImageDetailAPI } from './util/api'
import { Icon, AltImage } from "assets/index"
import './ImageDetail.css'

const ImageDetail = () => {
    const params = useParams()
    const imageId = params.imageId.split(':')[1]
    const navigate = useNavigate()

    const [imageData, setImageData] = useState([])
    const [imageReady, setImageReady] = useState(false)

    const onClickArrowLeft = () => {
        navigate('/')
    }

    const isVerticalImg = (width, height) => {
        return width > height
    }

    const imageLoading = (url) => {
        const img = new Image()
        img.onload = function () {
            setImageReady(true)
        }
        img.src = url
    }

    const getImageDetail = useCallback(async (id) => {
        const resData = await getImageDetailAPI(id)
        setImageData(resData)
        imageLoading(resData.download_url)
    }, [])

    useEffect(() => {
        getImageDetail(imageId)
    }, [params])

    return (
        <div className={"image-detail"}>
            <div className={"image-detail-header"}>
                <Icon.ArrowLeft height={40} fill={"white"} onClick={() => onClickArrowLeft()} className={"icon-left"}/>
            </div>
            <div className={"detail-image-area"}>
                { imageReady ? (
                    <img src={imageData.download_url} alt={"image-detail"} className={isVerticalImg(imageData.width, imageData.height) ? "vertical" : "horizontal"}></img>
                ): (
                    <img src={AltImage} alt={""} className={"image-alt"}></img>
                )}
            </div>
            <div className={"detail-info-area"}>
                {Object.keys(imageData).map(key => {
                    return (
                        <div key={`info-${imageData.id}-${key}`} className={`info-item`}>
                            <div className={"info-title"}>{key}</div>
                            <div className={"info-content"}>{imageData[key]}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageDetail