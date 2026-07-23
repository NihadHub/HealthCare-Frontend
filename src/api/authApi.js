import axiosClient from "./axiosClient";

export const login = (credentials)=>{
    return axiosClient.post('/auth/login', credentials)
}
export const register= (data)=>{
    return axiosClient.post('/auth/register', data)
}