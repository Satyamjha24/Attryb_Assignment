import axios from "axios";
import { login, logout, register} from "./actionTypes";

export const registerDealer = (payload) => (dispatch) => {
  fetch('https://zany-lime-moth-cape.cyclic.app/dealerItem/register' ,{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
         dispatch({type:register})
        })
        .catch(err=>console.log(err))
};


export const loginDealer = (loginData) => (dispatch) => {

  return axios.post('https://zany-lime-moth-cape.cyclic.app/dealerItem/login', loginData).then((res) => {
    console.log(res);
    if (res.data.token) {
        dispatch({ type: login, payload: res.data.token })
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("status", res.status)

    }
}).catch((err) => {
    console.log(err.response.status);
    localStorage.setItem("status", err.response.status)
})
};

export const logoutFun=()=>(dispatch)=>{
  dispatch({type:logout})
}