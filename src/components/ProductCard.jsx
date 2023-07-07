import { Button } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ item,handleDeleteProduct }) => {
  const { id, name, image, brand, price, color, gender, category } = item;
  const isAuth = useSelector((store)=> store.authReducer.isAuth);
  const navigate = useNavigate();
 

  const handleEditProduct = ()=>{
    navigate(`/edit/${id}`, {replace:true})
  }
  
  return (
    <DIV>
      <img src={image} alt={name} />
      <div className="text-content">
        <p>{brand}</p>
        <div className="name">{name}</div>
        <p>
          Rs. {price}{" "}
          <span style={{ color: "green", fontSize: "14px" }}>60% off</span>
        </p>
      </div>
      {isAuth && <div className="buttons">
        <Button className="edit-button" size={"sm"} variant={"outline"} onClick={handleEditProduct}>
          Edit
        </Button>
        <Button className="delete-button" colorScheme="red" size={"sm"} variant={"solid"} onClick={()=> handleDeleteProduct(id)}>
          Delete
        </Button>
      </div>}
    </DIV>
  );
};

const DIV = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .text-content {
    padding: 10px;
  }
  .text-content> p{
    font-weight: bold;
  }
  div > :nth-child(2) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }
  .name {
    color: #696868;
  }
  div > :nth-child(3) {
    font-weight: 500;
    font-size: 16px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .edit-button {
    width: 100px;
    font-size: 16px;
    color: #e2686d;
  }
  .edit-button:hover{
    border-radius:20px; 
    transition: border-radius 0.3s ease-in-out 0s;
  }
  .delete-button {
    width: 100px;
    font-size: 16px;
    color: white;
  }
  .delete-button:hover{
    border-radius:20px; 
    transition: border-radius 0.3s ease-in-out 0s;
  }
`;

export default ProductCard;
