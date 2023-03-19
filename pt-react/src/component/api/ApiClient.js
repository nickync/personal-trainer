import axios from "axios";

export const apiClient = axios.create({
    baseURL:"http://p-env.eba-nyp3pj7u.us-east-1.elasticbeanstalk.com/"
})