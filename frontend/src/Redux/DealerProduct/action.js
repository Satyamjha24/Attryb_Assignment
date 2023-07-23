import axios from "axios"
import { ADDCARS, DELETECARS, GETCARS, UPDATECARS } from "./actionTypes"


export const getFun = ()=> (dispatch)=>{
     axios.get(`https://zany-lime-moth-cape.cyclic.app/marketItem/dealer`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: GETCARS, payload: res.data }))
}
export const addFun = (payload)=> (dispatch)=>{
    console.log('payload:', payload)
     axios.post(`https://zany-lime-moth-cape.cyclic.app/marketItem/create`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: ADDCARS, payload: res.data }))
}
export const updateFun = (id,payload)=> (dispatch)=>{
    console.log(payload,id);
     axios.patch(`https://zany-lime-moth-cape.cyclic.app/marketItem/update/${id}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: UPDATECARS}))
}
export const deleteFun = (id)=> (dispatch)=>{
     axios.delete(`https://zany-lime-moth-cape.cyclic.app/marketItem/delete/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: DELETECARS, payload: id }))
}