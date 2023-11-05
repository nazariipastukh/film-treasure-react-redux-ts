import axios, {AxiosInstance} from "axios";
import {baseURL} from "../constants";

const apiService: AxiosInstance = axios.create({baseURL})

apiService.interceptors.request.use((request) => {
    request.headers.Authorization = `${process.env.REACT_APP_SECRET_CODE}`
    return request
})

export {
    apiService
}