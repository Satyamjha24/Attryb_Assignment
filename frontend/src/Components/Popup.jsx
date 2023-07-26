import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateFun } from "../Redux/DealerProduct/action";
//import { editMyDealFun } from "../Redux/marketplaceReducer/action";

const Popup = () => {
  const toast = useToast();
  const {id} = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { dealerData } = useSelector((store) => store.dealerReducer);

  const handleFormChange = (e) => {
    if (e.target.type === "number") {
      setData((prev) => {
        return { ...data, [e.target.name]: Number(e.target.value) };
      });
    } else {
      setData((prev) => {
        return { ...data, [e.target.name]: e.target.value };
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    delete data._id;
    delete data.dealer
   console.log(data);
    dispatch(updateFun(id, data)).then(() => {
      toast({
        title: `Car Updated Successfully.`,
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
       navigate('/dealer')
    });
  };

  useEffect(() => {
    let filteredData = dealerData.filter((el) => {
      return el._id == id;
    });
    // console.log(filteredData);
   setData(filteredData[0]);
  }, []);

  return (
    <Box style={{ width: "100%", paddingBottom: "10px", paddingTop: "80px" }}>
      <form
        onSubmit={handleFormSubmit}
        style={{
          width: "60%",
          margin: "auto",
          padding: "40px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "50px",
          borderRadius: "20px",
          color: "teal",
        }}
      >
        <Heading>Edit Your Car Details</Heading>

        <HStack style={{ width: "100%" }}>
          <br />
          <Box style={{ width: "49%", marginTop: "15px" }}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                type="text"
                value={data?.title}
                onChange={handleFormChange}
                placeholder="Enter Title"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>KM on Odometer</FormLabel>
              <Input
                name="kmsOnOdometer"
                type="number"
                value={data?.kmsOnOdometer}
                onChange={handleFormChange}
                placeholder="Enter Manufacture Year"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input
                name="image"
                type="url"
                value={data?.image}
                onChange={handleFormChange}
                placeholder="Enter Car Image URL"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                name="currentPrice"
                type="number"
                value={data?.currentPrice}
                onChange={handleFormChange}
                placeholder="Enter Car price"
              />
            </FormControl>
          </Box>
          <Box style={{ width: "49%", marginLeft: "20px" }}>
            <br />
            <FormControl>
              <FormLabel>No of Previous Buyers</FormLabel>
              <Input
                name="previousBuyers"
                type="number"
                value={data?.previousBuyers}
                onChange={handleFormChange}
                placeholder="Enter Vehicle mileage"
              />
            </FormControl>
            <br />
            <FormControl>
            <FormLabel>Major Scratches</FormLabel>
              <Select name='majorScratches' type="text" value={data?.majorScratches} onChange={handleFormChange}>
                <option value='No'>Any Major Scratches</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </Select>
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Registration Place</FormLabel>
              <Input
                name="registrationPlace"
                type="text"
                value={data?.registrationPlace}
                onChange={handleFormChange}
                placeholder="Enter Registration Place"
              />
            </FormControl>
            <br />
            <Button mt={4} colorScheme="teal" type="submit">
              EDIT DEAL
            </Button>
          </Box>
        </HStack>
      </form>

      <br />
      <Link to="/dealer">
        <Button colorScheme="teal" size="md">
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default Popup;
