import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Pagination = ({ handlePage, page }) => {
  const length = useSelector((store) => store.productReducer.length);
  let totalButtons = 0;
  if(typeof length === "number"){
    totalButtons = Math.ceil(+length / 10);
  }
  let buttonsArray = new Array(totalButtons).fill(0).map((el, index) => index + 1);
  console.log(buttonsArray)
  console.log(length)
  return (
    <DIV>
      <div>
        {buttonsArray.map((item) => {
          return (
            <button
              style={
                page == item ? { background: "black", color: "white" } : null
              }
              key={item}
              onClick={() => handlePage(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </DIV>
  );
};

export default Pagination;

const DIV = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;

  div {
    display: flex;
    gap: 10px;
  }
  button {
    width: 25px;
    border: none;
    font-weight: bold;
    padding: 5px;
  }
`;
