import axios from 'util/axios'

const getImageListAPI = async (page, limit) => {
    const params = {
        page: page,
        limit: limit
    }

    try {
        const { data } = await axios.get('/v2/list', { params: params })
        return data
    } catch (e) {
        throw new Error()
    }
}

const getImageDetailAPI = async (id) => {
    try {
        const { data } = await axios.get(`/id/${id}/info`)
        return data
    } catch (e) {
        throw new Error()
    }
}

export { getImageListAPI, getImageDetailAPI }