import axios from "axios";

export const apiClient = axios.create({
    baseURL:"http://trainer.eba-hfiihfqp.us-east-1.elasticbeanstalk.com"
    // baseURL:"http://localhost:5000"
})