import { Button } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';


const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <DIV>
      <img src="https://cdn.dribbble.com/users/1665077/screenshots/10738715/media/90712c2d7fd869e9d7586a108024d62c.gif" alt="" />
      <h1>404 Error</h1>
      <h1>Page Not Found</h1>
      <Button
            _hover={{borderRadius:"20px", transition:"border-radius 0.3s ease-in-out 0s" }}
            colorScheme="red"
            variant="outline"
            size="lg"
            onClick={()=> navigate("/") }
          > Go Back </Button>
    </DIV>
  )
}

const DIV = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 650px;
        margin: auto;
        padding: 50px;

        img{
            width: 300px;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
            margin-bottom: 20px;
        }
        h1{
            color: #e2686d;
            font-size: 40px;
            margin-bottom: 20px;
        }
`

export default PageNotFound