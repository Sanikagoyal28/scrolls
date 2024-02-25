import Baseurl from "./Baseurl";
import axios from "axios"

const instance = axios.create(
    {
        baseURL: "https://web-production-f8d3.up.railway.app/"
    }

);


instance.interceptors.response.use((response) => {
    return response
}, (error) => {

    if (error.response.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken")

        if (refreshToken) {
            return axios.post("", refreshToken)
                .then((res) => {
                    localStorage.setItem("access token", re)
                })
        }
    }
})

export default instance