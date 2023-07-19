import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OEMCard from "../Components/OEMCard";
import { getOEM } from "../Redux/OEMproduct/action";
import '../CSS/OEM.css'
import Filters from "../Components/Filters";

const OEM = () => {
  const [search, setSearch] = useState("");
  const store = useSelector((state) => state.oemReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  console.log('data:', data)

  useEffect(() => {
    dispatch(getOEM({search}));
  }, [search]);
  
  useEffect(() => {
    if (Array.isArray(store?.oemData)){
      setData(store?.oemData);
    }
  }, [store]);
  return (
    <div>
      <div className='inputBox'>
      <Filters setData={setData} data={store?.oemData} from={"oem"} />
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your Car" className='input' />
      </div>
      {store.loading && <h2 style={{textAlign:"center"}} >Loading...</h2>}
      <div className='container'>
        {data && data?.map((el,i)=>(
            <OEMCard key={i} car={el} />
        )) }
      </div>
    </div>
  );
};

export default OEM;