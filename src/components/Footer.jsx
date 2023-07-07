import React from 'react'
import logo from './logo.png'
import { Button } from "@chakra-ui/react";
import {Link} from "@chakra-ui/react";
import { ChevronRightIcon, InfoOutlineIcon} from '@chakra-ui/icons'
import styled from 'styled-components';
import { FaRegEnvelope } from 'react-icons/fa';



const Footer = () => {
  return (
    <DIV className="container">
       <h1>© 2023 Shop Unlimited,  All rights reserved.</h1>
       <div>
            <FaRegEnvelope />
            <h1> shatrukumar47@gmail.com</h1>
       </div>
    </DIV>
  )
}

const DIV = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      background: #B7B7B7 ;
      padding: 20px;
      color: white;
      font-size:16px;

      div{
        display: flex;
        align-items:center;
        justify-content:center;
        gap:10px;
      }
    
`
export default Footer