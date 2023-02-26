import axios from "axios";

const TRAINER_API = "http://localhost:8080/api/v1/tra"

class TrainerService {
    getTrainers(){
        return axios.get(TRAINER_API + "/all")
    }
    
    getTrainerByUsername(username){
        return axios.get(`${TRAINER_API}/${username}`)
    }
}

export default new TrainerService();