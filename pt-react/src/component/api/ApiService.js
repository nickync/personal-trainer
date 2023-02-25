import { apiClient } from "./ApiClient";

export const getAllTrainers = () => apiClient.get(`/trainers`)

export const signUpService = (user) => apiClient.post(`/sign-up`, user)

export const getRoleService = (username) => apiClient.get('/getRole/' + username)

export const getUserId = (username) => apiClient.get('/getUserId/' + username)

export const getTrainerService = (id) => apiClient.get('/trainers/get?id=' + id)

export const getCustomerService = (id) => apiClient.get('/customers/get?id=' + id)

export const bookTrainerService = (trainerId, customerId) => apiClient.post(`/customers/book?trainerId=${trainerId}&&customerId=${customerId}`)