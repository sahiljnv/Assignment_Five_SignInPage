import axios from "axios";

const API = axios.create({
    baseURL : 'https://qa-ns-api.debutinfotech.in'
})

export default API