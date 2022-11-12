import { createContext } from "react";
import AddTrainerComponent from "./AddTrainerComponent";

const LoginVerification = createContext(true);

function changeValue() {
    if (Math.random > 0.5){
        LoginVerification = false;
    } else {
        LoginVerification = true;
    }
}
changeValue()
export default LoginVerification;