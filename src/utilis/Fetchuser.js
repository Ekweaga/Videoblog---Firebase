export const userAccessToken = ()=>{
const accesstoken = localStorage.getItem('accessToken') !== "undefined" ? JSON.parse(localStorage.getItem('accesstoken')) :localStorage.clear()
return accesstoken
}

export const fetchUser = ()=>{
    const User = localStorage.getItem('user') !== "undefined" ? JSON.parse(localStorage.getItem('user')) :localStorage.clear()
    return User
    }