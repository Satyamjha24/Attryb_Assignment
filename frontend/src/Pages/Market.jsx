import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarketData } from "../Redux/MarketProduct/action";
import Filters from "../Components/Filters";


const Market = () => {
  const store = useSelector((state) => state.marketReducer);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getMarketData(search));
  }, [search]);

  useEffect(() => {
    if (Array.isArray(store?.marketData)) {
      setData(store.marketData);
      console.log(data);
    }
  }, [store]);

  return (
    <div className='container'>
      <div className='inputBox'>
        <Filters setData={setData} data={store?.marketData} from={"marketData"} />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search you are interested in"
          className='input'
        />
      </div>
      {data?.map((car, index) => (
          <div className='carItem' key={index}>
            <div className='carImageContainer'>
              <img src={car?.image} alt="Car" className='carImage' />
            </div>
            <div className='middle'>
              <h2 className='title'>{car?.title}</h2>
              <ul className='descriptionList'>
                <li>Kms on Odometer: {car?.kmsOnOdometer}</li>
                <li>Current Price: {car?.currentPrice}</li>
                <li>Major Scratches: {car?.majorScratches ? "Yes" : "No"}</li>
                <li>Original Paint: {car?.originalPaint ? "Yes" : "No"}</li>
                <li>Accidents Reported: {car?.accidentsReported}</li>
                <li>Previous Buyers: {car?.previousBuyers}</li>
                <li>Registration Place: {car?.registrationPlace}</li>
              </ul>
              <button className='book_button'>Buy Now</button>
            </div>
            <div className='left'>
              <ul className='carDetails'>
                {car?.description &&
                  car.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
              <div className='specs'>
                <ul className='colorList'>
                  {car?.oemSpecs?.availableColors?.map((color, index) => (
                    <li
                      key={index}
                      className='colorItem'
                      style={{ backgroundColor: color }}
                    ></li>
                  ))}
                </ul>
                <ul className='descriptionList'>
                  <li>
                    model: G68 2021
                  </li>
                  <li>mileage: 25</li>
                  <li>power: 385 BHP</li>
                  <li>maxSpeed: 180</li>
                  <li>List-Price: 1500000</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Market