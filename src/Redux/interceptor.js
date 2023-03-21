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
    console.log(error)

    if (error.response.status === 401) {
        console.log("token expired")
        const refreshToken = localStorage.getItem("refreshToken")

        if (refreshToken) {
            console.log("calling request")
            return axios.post("", refreshToken)
                .then((res) => {
                    console.log(res)
                    localStorage.setItem("access token", re)
                })
        }
    }
})

export default instance