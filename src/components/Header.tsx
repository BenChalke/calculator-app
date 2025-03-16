import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Calculator</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    text-align: center;
    background-color: #333333;
    color: white;
    justify-content: center;

    h1 {
        /* padding: 20px 30px; */
        line-height: 60px;
    }
`;

export default Header;