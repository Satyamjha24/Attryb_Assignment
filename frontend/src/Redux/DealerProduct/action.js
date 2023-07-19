import axios from "axios"
import { ADDCARS, DELETECARS, GETCARS, UPDATECARS } from "./actionTypes"


export const getFun = ()=> (dispatch)=>{
     axios.get(`http://localhost:8080/marketItem/dealer`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: GETCARS, payload: res.data }))
}
export const addFun = (payload)=> (dispatch)=>{
    console.log('payload:', payload)
     axios.post(`http://localhost:8080/marketItem/create`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: ADDCARS, payload: res.data }))
}
export const updateFun = (id,payload)=> (dispatch)=>{
     axios.patch(`http://localhost:8080/marketItem/update/${id}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: UPDATECARS, payload: res }))
}
export const deleteFun = (id)=> (dispatch)=>{
     axios.delete(`http://localhost:8080/marketItem/delete/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    ).then((res)=>dispatch({ type: DELETECARS, payload: id }))
}