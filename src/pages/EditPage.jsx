import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { updateProduct } from '../redux/ProductReducer/action';
import Loading from '../components/Loading';

const initialState = {
  name: "",
  image: "",
  price: "",
  brand: "",
  gender: "",
  category: "",
  color: "",
};
const EditPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);
  const products = useSelector((store)=> store.productReducer.products)
  const loading = useSelector((store)=> store.productReducer.isLoading);
  const error = useSelector((store)=> store.productReducer.isError);
  const toast = useToast()

  function getItem(){
    const temp = products.find((el)=> el.id === +id)
    setData(temp);
  }
  
  useEffect(()=>{
    getItem()
  },[id])

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (data?.name && data?.image && data?.price && data?.brand && data?.gender && data?.category && data?.color) {
      dispatch(updateProduct(id,data))
      toast({
        position: 'top',
        title: 'Product updated successfully',
        status: 'success',
        duration: 1000,
        isClosable: false,
      })
    } else {
      toast({
        position: 'top',
        title: 'Fill all details',
        status: 'warning',
        duration: 1000,
        isClosable: false,
      })
    }
  }
  const handleChange = (e)=>{
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  }

  if(loading){
    return <Loading />
  }


  return (
    <DIV>
    <div className="input-box">
      <form onSubmit={handleSubmit}>
          <Heading as={"h2"} size={"md"}>Update Product</Heading>
          <FormControl>
          <Input
              type="text"
              name="name"
              placeholder="Product Name"
              value={data?.name}
              onChange={handleChange}
          />
          </FormControl>
          <FormControl>
          <Input
              type="text"
              name="image"
              placeholder="Image"
              value={data?.image}
              onChange={handleChange}
          />
          </FormControl>
          <FormControl>
          <Input
              type="number"
              name="price"
              placeholder="Price"
              value={data?.price}
              onChange={handleChange}
          />
          </FormControl>
          <FormControl>
          <Input
              type="text"
              name="brand"
              placeholder="Brand"
              value={data?.brand}
              onChange={handleChange}
          />
          </FormControl>
          <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select
              variant="filled"
              name="gender"
              value={data?.gender}
              onChange={handleChange}
          >
              <option value="">Select Gender</option>
              <option value="male">Men</option>
              <option value="female">Women</option>
              <option value="kids">Kids</option>
          </Select>
          </FormControl>
          <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
              variant="filled"
              name="category"
              value={data?.category}
              onChange={handleChange}
          >
              <option value="">Select Category</option>
              <option value="topwear">Top Wear</option>
              <option value="bottomwear">Bottom Wear</option>
              <option value="footwear">Footwear</option>
          </Select>
          </FormControl>
          <FormControl>
          <FormLabel>Color</FormLabel>
          <Select
              variant="filled"
              name="color"
              value={data?.color}
              onChange={handleChange}
          >
              <option value="">Select Color</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="black">Black</option>
          </Select>
          </FormControl>
          <Button
          type="submit"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="red"
          variant="solid"
          width={"150px"}
          className="submit-button"
          >
          Update
          </Button>
      </form>
    </div>
    
    <div className="product-box">
      <Heading size={"md"}>Display Product</Heading>
      <img src={data?.image? data?.image : "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=sph" } alt={data?.name} />
      <div>
      <h3>Name: {data?.name}</h3>
      <p>Price: {data?.price}</p>
      <p>Brand: {data?.brand}</p>
      <p>Gender: {data?.gender}</p>
      <p>Color: {data?.color}</p>
      <p>Category: {data?.category}</p>
      </div>
    </div>
  </DIV>
  )
}

export default EditPage

const DIV = styled.div`
    display: flex;
    gap: 100px;
    /* border: 1px solid red; */
    width: 80%;
    margin: 50px auto;
    justify-content: space-between;
 
  .input-box{
    width: 600px;
    padding: 20px;
    max-height: 700px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    /* color: #E2686D; */
  }
 
  form {
    display: flex;
    flex-direction: column;
    gap:8px;
  }
  .submit-button {
    display: block;
    margin: auto;
    margin-top: 15px;
  }
  .submit-button:hover{
    border-radius:20px; 
    transition: border-radius 0.3s ease-in-out 0s;
  }
  .product-box{
    width: 600px;
    padding: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .product-box{
    display:flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    background: #E2686D;
    color: white;
  }
  .product-box > img{
    width:250px;
    height: 280px;
    object-fit: cover;
    margin-top: 10px;
  }
  .product-box > div{
    width:90%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    text-align: left;
    margin-top: 22px;
  }
`;
