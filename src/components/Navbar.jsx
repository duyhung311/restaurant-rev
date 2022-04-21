import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffc890;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 80px;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = ({onChange}) => {
    return (
        <Container>
            <Center>
                <NavItem onClick = {() => onChange('all')}>   Tất cả          </NavItem>
                <NavItem onClick = {() => onChange('restaurant')}>  Nhà hàng     </NavItem>
                <NavItem onClick = {() => onChange('bistro')}> Quán ăn    </NavItem>
                <NavItem onClick = {() => onChange('street')}> Đường phố    </NavItem>
                <NavItem onClick = {() => onChange('cafe')}> Café/ Tráng miệng    </NavItem>
            </Center>
        </Container>
    )
}

export default Navbar
