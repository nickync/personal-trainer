import axios from "axios";

const REGISTRATION_API = "http://localhost:8080/api/v1/reg"

class RegistrationService {
    findRegistration(username){
        return axios.get(`REGISTRATION_API/${username}`)
    }
}