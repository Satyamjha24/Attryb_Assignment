import axios from "axios";
import { ERROR, GETALL, LOADING } from "./actionTypes";

export const getMarketData=()=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await axios.get('https://zany-lime-moth-cape.cyclic.app/data')
        console.log('data all market:', data)
        dispatch({type:GETALL,payload:data.data})
    }catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}