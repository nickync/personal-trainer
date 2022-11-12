import axios from "axios";

const TRAINER_API_URL = "http://localhost:8080/api/";

class TrainerService{
    
    getAllTrainer() {
        return axios.get(TRAINER_API_URL + "all");
    }

    searchByName(name) {
        
        let url = "http://localhost:8080/api/search"

        for (let i=0; i<name.split(" ").length; i++){
            url += `/${name.split(" ")[i]}`
        }

        console.log(url)

        return axios.get(url);
    }

    addTrainer(trainer){
        return axios.post(TRAINER_API_URL + "add", trainer)
        
    }
}

export default new TrainerService();