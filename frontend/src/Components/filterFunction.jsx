
export const pricelth =(data,from)=>{
    if(from==="marketplace"){
        return  data?.filter((car) => car?.currentPrice).sort((a, b) => a.currentPrice - b.currentPrice);
    }else{
        return  data?.filter((car) => car?.listPrice).sort((a, b) => a.listPrice - b.listPrice);
    }
}

export const pricehtl =(data,from)=>{
    if(from==="marketplace"){
        return data?.filter((car) => car?.currentPrice).sort((a, b) => b.currentPrice - a.currentPrice);
    }else{
        return data?.filter((car) => car?.listPrice).sort((a, b) => b.listPrice - a.listPrice);
    }
}

export const colorFilter =(data,color,from)=>{
    if(from==="marketplace"){
        return data?.filter((car) => car?.oemSpecs?.availableColors.includes(color));
    }else{
        return data?.filter((car) => car?.availableColors.includes(color));
    }
}

export const mileagelth = (data,from) => {
    if(from==="marketplace"){
        return data?.filter((car) => car?.oemSpecs?.mileage !== undefined).sort((a, b) => a.oemSpecs.mileage - b.oemSpecs.mileage);
    }else{
        return data?.filter((car) => car?.mileage !== undefined).sort((a, b) => a.mileage - b.mileage);
    }
};
  
  export const mileagehtl = (data,from) => {
      if(from==="marketplace"){
        return data?.filter((car) => car?.oemSpecs?.mileage !== undefined).sort((a, b) => b.oemSpecs.mileage - a.oemSpecs.mileage);
    }else{
          return data?.filter((car) => car?.mileage !== undefined).sort((a, b) => b.mileage - a.mileage);
      
      }
  };
  