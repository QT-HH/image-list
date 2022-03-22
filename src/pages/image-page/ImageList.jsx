import React, {useState, useEffect, useCallback} from 'react'

import { ImageCard, Pagination } from './components/index'
import { getImageListAPI } from "./util/api";

import './ImageList.css'

const ImageList = () => {
    const [imageList, setImageList] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)

    const getImageList = useCallback(async (page, limit) => {
        const dataRes = await getImageListAPI(page, limit)
        setImageList(dataRes)
    }, [])

    useEffect(() => {
        getImageList(page, limit)
    }, [page, limit])

    return (
        <>
            <div className={"image-list"}>
                {imageList.map(image => {
                    return (
                        <ImageCard key={`image-card-${image.id}`} image={image}/>
                    )
                })}
            </div>
            <Pagination page={page} setPage={setPage} limit={limit} setLimit={setLimit} />
        </>
    )
}

export default ImageList