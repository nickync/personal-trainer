import axios from "axios";

export const apiClient = axios.create({
    baseURL:"http://pt-springboot-env.eba-9ebv4r9d.us-east-1.elasticbeanstalk.com"
    // baseURL:"http://localhost:5000"
})