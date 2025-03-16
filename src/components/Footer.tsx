import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; Ben Chalke 2025</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    text-align: center;
    background-color: #333333;
    color: white;

    p {
        line-height: 30px;
    }
`;

export default Footer;