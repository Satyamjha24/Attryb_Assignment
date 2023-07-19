import axios from "axios";
import { ERROR, GETOEM, LOADING } from "./actionTypes";

export const getOEM=({search})=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
       
        if(search!=""){
            axios.get(`http://localhost:8080/OEM/?search=${search}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }).then((res)=>dispatch({type:GETOEM,payload:res.data}))
        
        }else{
            axios.get(`http://localhost:8080/OEM`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }).then((res)=>dispatch({type:GETOEM,payload:res.data}))
        }

    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}