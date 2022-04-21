import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #ffc890;
    color: 'black';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return <Container>Free ship tất cả các quán ăn quận 1 và quận 10! Chỉ hôm nay!</Container>;
};

export default Announcement;