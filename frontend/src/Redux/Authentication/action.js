import { login, register} from "./actionTypes";

export const registerDealer = (payload) => (dispatch) => {
  fetch('http://localhost:8080/dealerItem/register' ,{
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
  //console.log('loginData:', loginData)
  fetch("http://localhost:8080/dealerItem/login",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(loginData)
        }).then(res=>res.json())
        .then(res=>{
          console.log(res);
            dispatch({ type: login, payload: res.token })
            localStorage.setItem("token",res.token)
        })
        .catch(err=>console.log(err))
  
};