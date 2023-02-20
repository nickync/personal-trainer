import { apiClient } from "./ApiClient";

export const jwtAuthenticationService = (username, password) => apiClient.post('/authenticate', {username, password});