import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaCartArrowDown, FaHeart, FaUserTie } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { logoutAction } from "../redux/AuthReducer/actions";

const Navbar = () => {
  const isAuth = useSelector((store)=> store.authReducer.isAuth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogo = () => {
    return navigate("/");
  };
  const handleLogin = ()=>{
    return navigate("/login")
  }
  const handleLogout = ()=>{
    dispatch(logoutAction)
  }
  return (
    <DIV>
      <img src={logo} alt="" onClick={handleLogo} />
      <div>
        <Link className="links" to={"/add-products"}>Admin</Link>
        {!isAuth && <FaUserTie className="icon" onClick={handleLogin} />}
        <FaCartArrowDown className="icon" />
        <FaHeart className="icon" />
        {isAuth && <Button className="log-out" variant={"outline"} onClick={handleLogout}>Logout</Button>}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: #e2686d 0px 4px 6px -1px,
  #e2686d 0px 2px 4px -1px;
  padding:5px;
  margin-bottom: 40px;

  img {
    width: 50px;
    border-radius: 50%;
    margin-left: 20px;
  }
  img:hover {
    cursor: pointer;
  }
  div{
    margin-right: 50px;
    font-size: 25px;
    display: flex;
    align-items: center;
    gap: 50px;
    color:#e2686d;
  }
  div > img{
    width: 70px;
    border-radius: 50%;
  }
  div > img:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .links:hover{
    color: black;
  }
  .icon{
    cursor: pointer;
    color: #e2686d;
  }
  .log-out{
    font-size: 16px;
    color: #e2686d;
  }
  .log-out:hover{
    border-radius:20px; 
    transition: border-radius 0.3s ease-in-out 0s;
  }
`;

export default Navbar;
