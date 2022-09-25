import axios from "axios";

const TRAINER_API_URL = "http://localhost:8080/api/all";

class TrainerService{
    
    getAllTrainer() {
        return axios.get(TRAINER_API_URL);
    }

    searchByName(name) {
        
        let url = "http://localhost:8080/api/search"

        for (let i=0; i<name.split(" ").length; i++){
            url += `/${name.split(" ")[i]}`
        }

        console.log(url)

        return axios.get(url);
    }
}

export default new TrainerService();