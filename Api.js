import React from 'react'
import axios from 'axios';


const api = axios.create({
    baseURL: `http://ioting.cl/`,
    withCredentials: false, // default
    auth: {
        username: 'arland',
        password: 'test'
    },
})

const Api = () => {
    return (
        <div>

        </div>
    )
}

export default Api
