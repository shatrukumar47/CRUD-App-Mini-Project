import { Button, Checkbox, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Sidebar = ({ sortBy, setSortBy, page }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialColorQuery = searchParams.getAll("color");
  const [colors, setColors] = useState(initialColorQuery || []);
  const initialBrandQuery = searchParams.getAll("brand");
  const [brands, setBrands] = useState(initialBrandQuery || []);
  const initialGenderQuery = searchParams.getAll("gender");
  const [gender, setGender] = useState(initialGenderQuery || []);
  const initialCategoryQuery = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryQuery || []);

  useEffect(() => {
    const params = {
      color: colors,
      brand: brands,
      gender: gender,
      category: category,
      sort: sortBy,
      page: page,
    };
    setSearchParams(params);
  }, [colors, brands, gender, category, sortBy, page]);

  const filterValues = (value, state) => {
    let newState = [...state];
    if (newState.includes(value)) {
      newState = newState.filter((item) => {
        return item !== value;
      });
    } else {
      newState.push(value);
    }
    return newState;
  };

  const handleColors = (e) => {
    const { value } = e.target;
    let newColors = filterValues(value, colors);
    setColors(newColors);
  };

  const handleBrand = (e) => {
    const { value } = e.target;
    let newBrands = filterValues(value, brands);
    setBrands(newBrands);
  };

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [value];
    setGender(newGender);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [value];
    setCategory(newCategory);
  };

  const handleReset = () => {
    setColors([]);
    setBrands([]);
    setGender([]);
    setCategory([]);
    setSortBy("");
  };

  return (
    <DIV>
      <div>
        <Button
          className="reset"
          colorScheme="red"
          variant={"outline"}
          onClick={handleReset}
        >
          RESET
        </Button>
      </div>
      <div className="gender">
        <h1>Gender</h1>
        <Radio
          type="radio"
          colorScheme="green"
          name="gender"
          value="male"
          onChange={handleGender}
          isChecked={gender.includes("male")}
        >
          Men
        </Radio>
        <Radio
          type="radio"
          colorScheme="green"
          name="gender"
          value="female"
          onChange={handleGender}
          isChecked={gender.includes("female")}
        >
          Women
        </Radio>
        <Radio
          type="radio"
          colorScheme="green"
          name="gender"
          value="kids"
          onChange={handleGender}
          isChecked={gender.includes("kids")}
        >
          Kids
        </Radio>
      </div>
      <hr />
      <div className="category">
        <h1>Category</h1>
        <Radio
          colorScheme="green"
          name="category"
          value="topwear"
          onChange={handleCategory}
          isChecked={category.includes("topwear")}
        >
          Topwear
        </Radio>
        <Radio
          colorScheme="green"
          name="category"
          value="bottomwear"
          onChange={handleCategory}
          isChecked={category.includes("bottomwear")}
        >
          Bottomwear
        </Radio>
        <Radio
          colorScheme="green"
          name="category"
          value="footwear"
          onChange={handleCategory}
          isChecked={category.includes("footwear")}
        >
          Footwear
        </Radio>
      </div>
      <hr />
      <div className="filter-by-color">
        <h1>Color</h1>
        <div className="checkbox-div">
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="red"
            onChange={handleColors}
            isChecked={colors.includes("red")}
          />{" "}
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "red",
              borderRadius: "50%",
            }}
          ></div>
          <label>Red</label>
        </div>
        <div className="checkbox-div">
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="green"
            onChange={handleColors}
            isChecked={colors.includes("green")}
          />{" "}
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "green",
              borderRadius: "50%",
            }}
          ></div>
          <label>Green</label>
        </div>
        <div className="checkbox-div">
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="black"
            onChange={handleColors}
            isChecked={colors.includes("black")}
          />{" "}
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "black",
              borderRadius: "50%",
            }}
          ></div>
          <label>Black</label>
        </div>
        <div className="checkbox-div">
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="white"
            onChange={handleColors}
            isChecked={colors.includes("white")}
          />{" "}
          <div
            style={{
              width: "12px",
              height: "12px",
              border: "1px solid black",
              borderRadius: "50%",
            }}
          ></div>
          <label>White</label>
        </div>
      </div>
      <hr />
      <div>
        <h1>Brand</h1>
        <div>
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="Puma"
            onChange={handleBrand}
            isChecked={brands.includes("Puma")}
          />{" "}
          <label>Puma</label>
        </div>
        <div>
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="Killer"
            onChange={handleBrand}
            isChecked={brands.includes("Killer")}
          />{" "}
          <label>Killer</label>
        </div>
        <div>
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="LEVI'S"
            onChange={handleBrand}
            isChecked={brands.includes("LEVI'S")}
          />{" "}
          <label>LEVI'S</label>
        </div>
        <div>
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="LIBERTY"
            onChange={handleBrand}
            isChecked={brands.includes("LIBERTY")}
          />{" "}
          <label>LIBERTY</label>
        </div>
        <div>
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="action"
            onChange={handleBrand}
            isChecked={brands.includes("action")}
          />{" "}
          <label>action</label>
        </div>
        <div>
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="Calvin Klein Jeans"
            onChange={handleBrand}
            isChecked={brands.includes("Calvin Klein Jeans")}
          />{" "}
          <label>Calvin Klein Jeans</label>
        </div>
        <div>
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="Bata"
            onChange={handleBrand}
            isChecked={brands.includes("Bata")}
          />{" "}
          <label>Bata</label>
        </div>
        <div>
          <Checkbox
            colorScheme="green"
            type="checkbox"
            value="HIGHLANDER"
            onChange={handleBrand}
            isChecked={brands.includes("HIGHLANDER")}
          />{" "}
          <label>HIGHLANDER</label>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  padding: 10px;
  border-right: 1px solid #e9e9ed;

  .reset {
    font-size: 16px;
    color: #e2686d;
  }
  .reset:hover {
    border-radius: 20px;
    transition: border-radius 0.3s ease-in-out 0s;
  }
  .gender,
  .category {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0px;
    color: #e2686d;
  }
  label {
    margin-left: 5px;
  }
  hr {
    margin: 10px 0px;
  }
  .checkbox-div {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    align-items: center;
  }
`;

export default Sidebar;
