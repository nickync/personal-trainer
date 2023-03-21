import axios from "axios";

export const apiClient = axios.create({
    baseURL:"http://ptback-env.eba-umjcmcpn.us-east-1.elasticbeanstalk.com"
    // baseURL:"http://localhost:5000"
})