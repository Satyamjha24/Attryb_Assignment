import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Addcar.css'
import { useDispatch, useSelector } from 'react-redux';
import { addFun } from '../Redux/DealerProduct/action';

const AddCar = () => {
  let {id} = useParams()
  const [obj,setObj] = useState({})
  console.log('obj:', obj)
  const [carDetails, setCarDetails] = useState({
    image: '',
    title: '',
    description: [''],
    kmsOnOdometer: '',
    majorScratches: false,
    originalPaint: true,
    accidentsReported: 0,
    previousBuyers: 0,
    registrationPlace: '',
    currentPrice:0,
    oemSpecs:id
  });
  
  const store = useSelector((state) => state.dealerReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getData = () =>{
    axios.get(`http://localhost:8080/OEM/${id}`,{
      headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
      }
  })
    .then((res)=>setObj(res.data[0]))
    .catch((Error)=>(<h1>{Error.message}</h1>))
  }
  useEffect(()=>{
    getData()
  },[])
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleDescriptionChange = (index, event) => {
    const { value } = event.target;
    setCarDetails((prevDetails) => {
      const updatedDescription = [...prevDetails.description];
      updatedDescription[index] = value;
      return {
        ...prevDetails,
        description: updatedDescription
      };
    });
  };

  const handleAddDescription = () => {
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      description: [...prevDetails.description, '']
    }));
  };
  
  const submitRegister = (event) => {
    event.preventDefault();
    dispatch(addFun(carDetails));
    navigate(`/dealer`)
  };
  const { model, year, listPrice, availableColors, mileage, power, maxSpeed } = obj
  return (
    <div className='container' >
        <form onSubmit={submitRegister} className='box'>
            <input name="image" type="text" value={carDetails.carImage} onChange={handleInputChange} placeholder="Image URL" className='input' required/>
            <input name="title" type="text" value={carDetails.title} onChange={handleInputChange} placeholder="Title" className='input' required/>
            <input name="kmsOnOdometer" type="number" value={carDetails.kmsOnOdometer} onChange={handleInputChange} placeholder="Kilometers on Odometer" className='input' required   />
            <div className='checkbox_label'>
              <input name="majorScratches" type="checkbox" checked={carDetails.majorScratches} onChange={() => setCarDetails((prevDetails) => ({ ...prevDetails, majorScratches: !prevDetails.majorScratches })) } className='checkbox_input' />
              Major Scratches
            </div>
            <div className='checkbox_label'>
              <input name="originalPaint" type="checkbox" checked={carDetails.originalPaint} onChange={() => setCarDetails((prevDetails) => ({ ...prevDetails, originalPaint: !prevDetails.originalPaint })) } className='checkbox_input' />
              Original Paint
            </div>
            <span>Accidents Reported</span><input name="accidentsReported" type="number" value={carDetails.accidentsReported} onChange={handleInputChange} placeholder="Accidents Reported" className='input'   />
            <span>Previous Buyers</span><input name="previousBuyers" type="number" value={carDetails.previousBuyers} onChange={handleInputChange} placeholder="Previous Buyers" className='input'   />
            <input name="registrationPlace" type="text" value={carDetails.registrationPlace} onChange={handleInputChange} placeholder="Registration Place" className='input' required   />
            <span>Current Price</span><input name="currentPrice" type="text" value={carDetails.currentPrice} onChange={handleInputChange} placeholder="Current Price" className='input' required   />
            <button type="submit" className='button'>ADD</button>
        </form>
        <div className='box'>
            {carDetails.description.map((desc, index) => (
            <input key={index} name={`description${index}`} type="text" value={desc} onChange={(event) => handleDescriptionChange(index, event)} placeholder="Description" className='description_input' required/>
            ))}
            <button type="button" onClick={handleAddDescription} className='add_description_button'> Add Description </button>
            <input name="model" type="text" value={`Model: ${model}`} onChange={handleInputChange} placeholder="Model" className='input' required/>
            <input name="year" type="text" value={`Year: ${year}`} onChange={handleInputChange} placeholder="Year" className='input' required/>
            <input name="listPrice" type="text" value={`List Price: ${listPrice}`} onChange={handleInputChange} placeholder="ListPrice" className='input' required/>
          <p>Available Colors:</p>
          <ul className='colorList'>
            {availableColors?.map((color, index) => (
              <li key={index} className='colorItem' style={{ backgroundColor: color }}></li>
              ))}
          </ul>
          <input name="listPrice" type="text" value={`Mileage: ${mileage} miles`} onChange={handleInputChange} placeholder="ListPrice" className='input' required/>
          <input name="listPrice" type="text" value={`Power: ${power} BHP`} onChange={handleInputChange} placeholder="ListPrice" className='input' required/>
          <input name="listPrice" type="text" value={`Max Speed: ${maxSpeed} mph`} onChange={handleInputChange} placeholder="ListPrice" className='input' required/>
        </div>


    </div>
    );
};
          
          export default AddCar;