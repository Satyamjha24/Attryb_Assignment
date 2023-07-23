import React from 'react';
import '../CSS/OEMCard.css'
import { useNavigate } from 'react-router-dom';

const OEMCard = ({ car }) => {
    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/addcar/${car._id}`)} className='card'>
      <h2 style={{fontWeight:'bold'}}>{car.model}</h2>
      <p>Year: {car.year}</p>
      <p>List Price: Rs.{car.listPrice}</p>
      <p>Available Colors:
          <ul className='colorList' style={{marginLeft:'30px'}}>
            {car.availableColors?.map((color, index) => (
              <li key={index} className='colorItem' style={{ backgroundColor: color }}></li>
              ))}
          </ul>
      </p>
      <p>Mileage: {car.mileage} miles</p>
      <p>Power: {car.power} BHP</p>
      <p>Max Speed: {car.maxSpeed} mph</p>
    </div>
  );
};

export default OEMCard;