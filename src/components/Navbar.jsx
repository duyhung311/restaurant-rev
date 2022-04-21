import styled from "styled-components";
import { mobile } from "../responsive";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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

const MyDrop = styled.div`
    background-color: #ffc890;
`;

const Navbar = ({onChange}) => {

    const customStyles = {
        control: (base, state) => ({
          background: "#ffc890",
        }),
      };
    return (
        <Container>
            <Center>
                <NavItem onClick = {() => onChange('all')}>   Tất cả          </NavItem>
                <NavItem onClick = {() => onChange('restaurant')}>  Nhà hàng     </NavItem>
                <NavItem onClick = {() => onChange('bistro')}> Quán ăn    </NavItem>
                <NavItem onClick = {() => onChange('street')}> Đường phố    </NavItem>
                <NavItem onClick = {() => onChange('cafe')}> Café/ Tráng miệng    </NavItem>
                <NavItem>
                    <Dropdown style={{backgroundColor: "#ffc890", borderStyle: "none", borderRadius: "20px"}} >              
                        <Dropdown.Toggle style={{color: "black", backgroundColor: "#ffc890", borderStyle: "none" }}>
                            Filter  
                        </Dropdown.Toggle>
    
                        <Dropdown.Menu>
                            <Dropdown.Item onClick = {() => onChange('#d1')}>Quận 1</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d2')}>Quận 2</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d3')}>Quận 3</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d4')}>Quận 4</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d5')}>Quận 5</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d6')}>Quận 6</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d7')}>Quận 7</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d8')}>Quận 8</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d9')}>Quận 9</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d10')}>Quận 10</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d11')}>Quận 11</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#d12')}>Quận 12</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dbt')}>Quận Bình Thạnh</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dtd')}>Tp.Thủ Đức</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dgv')}>Quận Gò Vấp</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dpn')}>Quận Phú Nhuận</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dtb')}>Quận Tân Bình</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dtp')}>Quận Tân Phú</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dbt')}>Quận Bình Tân</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dnb')}>Huyện Nhà Bè</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dhm')}>Huyện Hóc Môn</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dbc')}>Huyện Bình Chánh</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dcc')}>Huyện Củ Chi</Dropdown.Item>
                            <Dropdown.Item onClick = {() => onChange('#dcg')}>Huyện Cần Giờ</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </NavItem>
            </Center>
        </Container>
    )
}

export default Navbar
