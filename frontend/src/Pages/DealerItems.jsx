import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFun, getFun } from '../Redux/DealerProduct/action';
import {Heading, Image, useToast} from '@chakra-ui/react'
import '../CSS/DealerItem.css'
import { Link } from 'react-router-dom';

const DealerItems = () => {
  const store = useSelector((state) => state.dealerReducer);
  const dispatch = useDispatch();
  const toast=useToast()


  useEffect(() => {
    dispatch(getFun());
  }, []);

  const deleteFunction = (id) => {
    dispatch(deleteFun(id)).then(() => {
      toast({
        title: "Data Has Been Deleted Successfully",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }); 
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
  if(store?.dealerData && store.dealerData.length==0){
    return(
      <>
      <Image
          src="https://cdn.dribbble.com/users/1065420/screenshots/4314595/gary-oops.gif"
          alt="error"
          margin="auto"
          paddingTop="30px"
          width={'30%'}
          borderRadius={'50%'}
        />
        <Heading>You haven't added any car Please add car to view your inventory</Heading>
      </>
    )
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
              <Link to={`/edit/${car._id}`}><button className='edit_button'> Edit</button></Link>
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
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default DealerItems