import { login, register} from "./actionTypes";

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
  //console.log('loginData:', loginData)
  fetch("https://zany-lime-moth-cape.cyclic.app/dealerItem/login",{
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