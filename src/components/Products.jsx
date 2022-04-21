import styled from "styled-components";
import Product from "./ProductCard";
import { useState, useEffect } from "react";
import axios from 'axios';
import { all } from "../data.js"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({value, option, itemDetail}) => {
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState([]);

  const checkFilter = (value, option) => {
    // No need to check for searched value
    if (value === ''){
      if (option === 'all')
        return data;
      else if (option === 'restaurant')
        return data.filter((item) => item.category === 'Nhà hàng');
      else if (option === 'bistro')
        return data.filter((item) => item.category === 'Quán ăn');
      else if (option === 'street')
        return data.filter((item) => item.category === 'Ăn vặt/vỉa hè');
      else
        return data.filter((item) => item.category === 'Café/Dessert');
    }
    // Need to check for searched value
    else{
      if (option === 'all')
        return data.filter((item) => item["restaurant"].toLowerCase().includes(value.toLowerCase()));
      else if (option === 'restaurant')
        return data.filter((item) => item["restaurant"].toLowerCase().includes(value.toLowerCase()) && item.category === 'Nhà hàng');
      else if (option === 'bistro')
        return data.filter((item) => item["restaurant"].toLowerCase().includes(value.toLowerCase()) && item.category === 'Quán ăn');
      else if (option === 'street')
        return data.filter((item) => item["restaurant"].toLowerCase().includes(value.toLowerCase()) && item.category === 'Ăn vặt/vỉa hè');
      else
      return data.filter((item) => item["restaurant"].toLowerCase().includes(value.toLowerCase()) && item.category === 'Café/Dessert');
    }
  }

  useEffect(() => { 
    // Get items from database
    setData(all)
    setFilter(checkFilter(value, option));
  // eslint-disable-next-line
  }, [value, option, data]);

  const valueList = (
    filter? (<Container>
      {filter.map((item) => (
          <Product item = {item} onChange = {itemDetail}/>
      ))}
    </Container>)
    : 'Product is loading'
  );

  return (
    <div>
      {valueList}
    </div>
  );
};


export default Products;
