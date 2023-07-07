import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../redux/ProductReducer/action';
import styled from "styled-components"
import Sidebar from '../components/Sidebar';
import { Select, useToast } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';


const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store)=> store.productReducer.isLoading);
  const error = useSelector((store)=> store.productReducer.isError);
  const data = useSelector((store)=> store.productReducer.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const toast = useToast()
 
  useEffect(()=>{
    let paramsObj ={
      params: {
        color:searchParams.getAll("color"),
        brand: searchParams.getAll("brand"),
        gender: searchParams.getAll("gender"),
        category: searchParams.getAll("category"),
        _sort: searchParams.get("sort") && "price",
        _order: searchParams.get("sort"),
        _limit:10,
        _page:searchParams.get("page")
      }
    }
    dispatch(getProduct(paramsObj));
  },[searchParams])

  const handleDeleteProduct = (id)=>{
    dispatch(deleteProduct(id)).then(()=>{
      console.log("calling getProduct after deleting the product")
      dispatch(getProduct());
    })
    toast({
      position: 'top',
      title: 'Product deleted successfully',
      status: 'success',
      duration: 1000,
      isClosable: false,
    })
  }

  const handlePage = (number)=>{
      setPage(number);
  }

  if(loading){
    return <Loading />
  }

  return (
    <DIV>
        <div className='sort'>
          <h1 className='filter-text'>FILTERS</h1>
          <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)} >
            <option value=''>Sort By : Recommended</option>
            <option value='desc'>Price : High to Low </option>
            <option value='asc'>Price : Low to High </option>
          </select>
        </div>
        <div className='container'>
          <div className='sidebar-container'>
          <Sidebar sortBy={sortBy} setSortBy={setSortBy} page={page} />
          </div>
          <div>
            <div className='product-container'>
            {
              data?.map((item)=>{
                return <ProductCard key={item.id} item={item} handleDeleteProduct={handleDeleteProduct} />
              })
            }
            </div>
            <div className='pagination'>
              <Pagination handlePage={handlePage} page={page} />
            </div>
          </div>
        </div>
    </DIV>
  )
}


const DIV = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 5px;

  .container{
    display: flex;
    margin: auto;
    gap: 20px;
  }

  .sidebar-container{
    border: 1px solild black;
  }

  .sort{
    margin-bottom: 20px;
    border-bottom: 1px solid #e9e9ed;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 10px;
  }
  select{
    width: 250px;
    border: 1px solid #e9e9ed;
    padding: 10px;
  }

  .filter-text {
    color: black;
    font-size: 18px;
    font-weight: bold;
    font-family: Assistant, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
    margin-left: 10px;
  }
  .product-container{
    width: 1150px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 30px;
    border-bottom:1px solid #e9e9ed;
    margin-bottom: 20px;
    padding-bottom:50px;
  }
`



export default HomePage
