import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFun, getFun } from '../Redux/DealerProduct/action';
import {Image} from '@chakra-ui/react'
import '../CSS/DealerItem.css'
import Popup from '../Components/Popup';

const DealerItems = () => {
  const store = useSelector((state) => state.dealerReducer);
  const [update,setUpdate] = useState(false)
  const [selected,setSelected] = useState(null)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getFun());
  }, []);

  const deleteFunction = (id) => {
    dispatch(deleteFun(id));
  };
  if (store.loading === true) {
    return (
      <>
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          alt="loading"
          margin="auto"
          paddingTop="90px"
          marginBottom="360px"
        />
      </>
    );
  }
  if (store.error === true) {
    return (
      <>
        <Image
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
          alt="error"
          margin="auto"
          paddingTop="30px"
        />
      </>
    );
  }
  return (
    <div className='container'>
      {store?.dealerData &&
        store?.dealerData?.map((car, index) => (
          <div className='carItem' key={index}>
            <div className='carImageContainer'>
              <img src={car?.image} alt="Car" className='carImage' />
            </div>
            <div className='middle'>
              <h2 className='title'>{car?.title}</h2>
              <ul className='descriptionList'>
                <li>Current Price: ₹{car?.currentPrice}/-</li>
                <li>Kms on Odometer: {car?.kmsOnOdometer}</li>
                <li>Major Scratches: {car?.majorScratches ? 'Yes' : 'No'}</li>
                <li>Original Paint: {car?.originalPaint ? 'Yes' : 'No'}</li>
                <li>Accidents Reported: {car?.accidentsReported}</li>
                <li>Previous Buyers: {car?.previousBuyers}</li>
                <li>Registration Place: {car?.registrationPlace}</li>
              </ul>
              <div>
              <button onClick={()=>{setUpdate(true); setSelected(car) }} className='edit_button'> Edit</button>
              <div className={update?'show':'hide'} ><Popup car={selected} setUpdate={setUpdate} /><div className='close' onClick={()=>setUpdate(false)} >X</div></div>
              <button onClick={(e)=>{e.preventDefault(); deleteFunction(car?._id)}} className='delete_button'> Delete</button>
              </div>
            </div>
            <div className='left'>
              <ul className='carDetails'>
                {car?.description && car?.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className='specs'>
                <ul className='colorList'>
                  {car?.oemSpecs?.availableColors?.map((color, index) => (
                    <li key={index} className='colorItem' style={{ backgroundColor: color }}></li>
                    ))}
                </ul>
                <ul className='descriptionList'>
                  <li>model: {car?.oemItem?.model} {car?.oemItem?.year}</li>
                  <li>mileage: {car?.oemItem?.mileage}</li>
                  <li>power: {car?.oemItem?.power} BHP</li>
                  <li>maxSpeed: {car?.oemItem?.maxSpeed}</li>
                  <li>List-Price: ₹{car?.oemItem?.listPrice}/-</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default DealerItems