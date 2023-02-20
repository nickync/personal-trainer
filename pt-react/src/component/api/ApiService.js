import { apiClient } from "./ApiClient";

export const getAllTrainers = () => apiClient.get(`/trainers`)

export const signUpService = (user) => apiClient.post(`/sign-up`, user)