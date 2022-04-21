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
      else if (option === 'cafe')
        return data.filter((item) => item.category === 'Café/Dessert');
      else if (option[0] == '#') {
        if (option === '#d1')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 1');
        else if (option ==='#d2')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 2');
        else if (option ==='#d3')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 3');
        else if (option ==='#d4')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 4');
        else if (option ==='#d5')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 5');
        else if (option ==='#d6')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 6');
        else if (option ==='#d7')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 7');
        else if (option ==='#d8')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 8');
        else if (option ==='#d9')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 9');
        else if (option ==='#d10')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 10');
        else if (option ==='#d11')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 11');
        else if (option ==='#d12')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận 12');
        else if (option ==='#dbt')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận Bình Thạnh');
        else if (option ==='#dtd')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Tp. Thủ Đức');
        else if (option ==='#dgv')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận Gò Vấp');
        else if (option ==='#dpn')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận Phú Nhuận');
        else if (option ==='#dtb')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận Tân Bình');
        else if (option ==='#dtp')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận Tân Phú');
        else if (option ==='#dbt')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Quận Bình Tân');
        else if (option ==='#dnb')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Huyện Nhà Bè');
        else if (option ==='#dhm')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Huyện Hóc Môn');
        else if (option ==='#dbc')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Huyện Bình Chánh');
        else if (option ==='#dcc')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Huyện Củ Chi');
        else if (option ==='#dcg')
          return data.filter((item) => item.address.split(", ").at(-2) === 'Huyện Cần Giờ');
      }
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
      else if (option === 'cafe')
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
