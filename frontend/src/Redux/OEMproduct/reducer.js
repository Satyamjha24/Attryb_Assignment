import { ERROR, GETOEM, LOADING } from "./actionTypes";

let initState={
    oemData:[],
    loading:false,
    error:false
}
export const reducer=(state=initState,{payload,type})=>{
    switch(type){
        case GETOEM:{
            return {...state,oemData:payload,loading:false,error:false}
        }
        case LOADING:{
            return {...state,loading:true,error:false}
        }
        case ERROR:{
            return {...state,loading:false,error:true}
        }
        default:{
            return state
        }
    }
}