import axios from "axios";

export const apiClient = axios.create({
    // baseURL: 'http://localhost:8080'
    baseURL:'http://Trainer-env.eba-hfiihfqp.us-east-1.elasticbeanstalk.com'
})