import { ADDCARS, DELETECARS, ERROR, GETCARS, LOADING, UPDATECARS } from "./actionTypes";


let initState={
    dealerData:[],
    loading:false,
    error:false
}
export const reducer=(state=initState,{payload,type})=>{
    switch(type){
        case GETCARS:{
            return {...state,dealerData:payload,loading:false,error:false}
        }
        case ADDCARS:{
            return {...state,dealerData:[...state.dealerData,payload],loading:false,error:false}
        }
        case UPDATECARS:{       
            return {...state,loading:false,error:false}
        }
        case DELETECARS:{
            let data=state.dealerData.filter((el)=>{
                return el._id!==payload
            })
            return {...state,dealerData:data,loading:false,error:false}
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