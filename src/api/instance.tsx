import axios from "axios";


const instance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    headers:{
        Authorization: `bearer ${JSON.parse(localStorage.getItem("user"))}`
    }
})

export default instance;