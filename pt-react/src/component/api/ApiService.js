import { apiClient } from "./ApiClient";

export const getAllTrainers = () => apiClient.get(`/trainers`)