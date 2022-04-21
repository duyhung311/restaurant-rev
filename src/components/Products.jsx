import styled from "styled-components";
import { q10, items } from "../csvjson";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  function realItem () {
    //const uniqueArr = [...new Set(items.map(data => data.RESTAURANT_IMAGE))]
    // uniqueArr.forEach(ele => console.log(ele))
    // return uniqueArr
    // var arr = [];
    // for(var i = 0; i < items.length; i++) {
    //     if(!uniqueArr.includes(items[i].RESTAURANT_IMAGE)) {
    //         arr.push(items[i]);
    //     }
    // }
    var uniqueItem = [];
    var uniqueItemID = [];
    for(var i = 0; i < items.length; i++) {
        if(!uniqueItemID.includes(items[i].RESTAURANT_IMAGE)) {
            uniqueItemID.push(items[i].RESTAURANT_IMAGE);
            uniqueItem.push({'RESTAURANT_IMAGE': items[i].RESTAURANT_IMAGE});
        }
    }
    return uniqueItem;
  }
  return (
    
    <Container>
      {realItem().map((item) => (
        <Product item={item} key={item.RESTAURANT_IMAGE}  />
      ))}
    </Container>
  );
};

export default Products;
