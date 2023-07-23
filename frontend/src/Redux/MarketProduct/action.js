import axios from "axios";
import { ERROR, GETALL, LOADING } from "./actionTypes";

export const getMarketData=()=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await axios.get('https://zany-lime-moth-cape.cyclic.app/data')
        //console.log('data all market:', data)
        dispatch({type:GETALL,payload:data.data})
    }catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}

export const sortByPrice = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: LOADING })

    return axios.get(`https://zany-lime-moth-cape.cyclic.app/price?price=${value}`,).then((res) => {
        dispatch({ type: GETALL, payload: res.data })
    }).catch((err) => {
        dispatch({ type: ERROR })
    })

}

export const getSearchFun = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: LOADING })

    return axios.get(`https://zany-lime-moth-cape.cyclic.app/search?search=${value}`,).then((res) => {
        dispatch({ type: GETALL, payload: res.data })
    }).catch((err) => {
        dispatch({ type: ERROR })
    })

}