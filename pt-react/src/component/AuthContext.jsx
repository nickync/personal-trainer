import { createContext, useContext, useState } from "react";
import { apiClient } from "./api/ApiClient";
import { getRoleService } from "./api/ApiService";
import { jwtAuthenticationService } from "./api/AuthenticationApi";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    const [token, setToken] = useState(null);

    const [role, setRole] = useState(null)

    async function login(username, password){
        try{
            const response = await jwtAuthenticationService(username, password)

            if (response.status === 200){
                const jwtToken = 'Bearer ' + response.data.token
                setIsAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)
                console.log(response.data)
                await getRoleService(username).then(res => {
                    setRole(res.data)
                    console.log(res.data)
                })

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('passing token to all requests')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            } else {
                setIsAuthenticated(false)
                setUsername(null)
                setToken(null)
                setRole(null)
                console.log('authentication failed')
                return false
            }
        } catch (error) {
            setIsAuthenticated(false)
            setUsername(null)
            setRole(null)
            console.log(error)
            return false
        }
    }

    function logout(){
        setIsAuthenticated(false)
        setToken(null)
        setUsername(null)
        setRole(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, token, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}