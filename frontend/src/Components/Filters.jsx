import React from 'react'
import { colorFilter, mileagehtl, mileagelth, pricehtl, pricelth } from './filterFunction';
import { Select } from '@chakra-ui/react';

const Filters = ({setData,data,from}) => {
    const handlePriceFilter=(e)=>{
        let value = e.target.value
        console.log('value:', value)
        if(value=="lowToHigh"){
            setData(pricelth(data,from))
        }else if(value=="highToLow"){
            setData(pricehtl(data,from))
        }
    }
    const handleColorFilter=(e)=>{
        let value = e.target.value
        console.log('value:', value)
        if(value=="Silver"){
            setData(colorFilter(data,value,from))
        }else if(value=="Black"){
            setData(colorFilter(data,value,from))
        }else if(value=="Blue"){
            setData(colorFilter(data,value,from))
        }else if(value=="Gray"){
            setData(colorFilter(data,value,from))
        }else if(value=="White"){
            setData(colorFilter(data,value,from))
        }else if(value=="Red"){
            setData(colorFilter(data,value,from))
        }
    }
    const handleMileageFilter=(e)=>{
        let value = e.target.value
        console.log('value:', value)
        if(value=="lowToHigh"){
            setData(mileagelth(data,from))
        }else if(value=="highToLow"){
            setData(mileagehtl(data,from))
        }
    }
  return (
    <div style={{display:"flex", justifyContent:"space-around",gap:'10px'}} >
        <Select onChange={handlePriceFilter}>
            <option value="">Select Price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
        </Select>
        <Select onChange={handleColorFilter}>
            <option value="">Select Color</option>
            <option value="Silver">Silver</option>
            <option value="Blue">Blue</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Gray">Gray</option>
            <option value="Red">Red</option>
        </Select>
        <Select onChange={handleMileageFilter}>
            <option value="">Select Mileage</option>
            <option value="lowToHigh">Mileage: Low to High</option>
            <option value="highToLow">Mileage: High to Low</option>
        </Select>

    </div>
  )
}

export default Filters