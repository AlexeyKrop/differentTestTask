import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true
});

export const profileAPI = {
  getProfile(id: number){
    return instance.get(`profile/${id}`)
  },
  getProfileStatus(id: number){
    return instance.get(`profile/status/${id}`)
  },
  updateProfileStatus(){
    return instance.put(`profile/status`)
  },
  updateProfile(){
    return instance.put(`profile`)
  }
}
export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe : boolean = false){
    return instance.post(`auth/login`, {email, password, rememberMe})
  }
}