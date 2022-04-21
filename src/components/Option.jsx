import styled from "styled-components";
import { mobile } from "../responsive";
import { NativeSelect } from '@material-ui/core';
import Item from "./Item";
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Option = ({menu}) => {
   return menu[0]? (
   <Container>
    {menu.map((item) => (
      <Item item = {item}/>
    ))}
  </Container>)
  : 'loading'

}
    // <FilterContainer>
    //     <NativeSelect defaultValue="" onChange={(e) => handleOptionChange(e.target.value)}>
    //     {options.map((c) =>{return <option value={c.OptionID}>{c.Volume}</option>})};
    //   </NativeSelect>
    // </FilterContainer>
    // )
    // };

export default Option;