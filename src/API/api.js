import * as axios from "axios";


const instance= axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "e764f0f5-578d-4fbf-8ecb-4c2136dd8353"}
})
export const peopleAPI= {
     getUsers (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteUsersUnfollow (id) {
         return instance.delete(`follow/${id}`)
             .then(response => {
                 return response.data
             })
    },
    postUsersFollow (id){
    return instance.post(`follow/${id}`,{},)
        .then(response => {
            return response.data
            })
}}
export const profileAPI= {
    getUsers (userId)  {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status })
    }
}
export const headerAPI={
    getMe()  {
    return instance.get(`auth/me`, )
        .then(response => {
            return response.data
        })
}}
export const loginAPI={
    postLogin(email, password, rememberMe = false)  {
        return instance.post(`auth/login`, {email, password, rememberMe}, )
            .then(response => {
                return response.data
            })
    },
    deleteLogin()  {
        return instance.delete(`auth/login`, )
            .then(response => {
                return response.data
            })
    }
}
