import styled from "styled-components";

const BUTTONS = ["AC", "", "%", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "", "="];

type CalculatorButtonsProps = {
    buttonOnClick: (text: string) => void;
}

const CalculatorButtons = ({buttonOnClick} : CalculatorButtonsProps) => {
    return (
        <CalculatorButtonsContainer>
            <CalculatorButtonsInner>
                {BUTTONS.map((text, value) => {
                    return (
                        <ButtonContainer key={value}>
                            <StyledButton value={text} onClick={() => buttonOnClick(text)}>{text}</StyledButton>
                        </ButtonContainer>
                    )
                })}
            </CalculatorButtonsInner>
        </CalculatorButtonsContainer>
    )
}

const CalculatorButtonsContainer = styled.div`
    width: 100%;
`;

const CalculatorButtonsInner = styled.div`
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
`;

const ButtonContainer = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-around;
`;

const StyledButton = styled.button`
    width: 80px;
    height: 80px;
    font-size: 16px;
    border-radius: 50%;
    border: none;
    background-color: #6f6f6f;
    color: white;

    @media screen and (max-width: 400px) {
        width: 60px;
        height: 60px;
    }

    &:hover {
        background-color: #333333;
    }

    &:active {
        background-color: rgba(255, 255, 255, 0.7);
    }
`;

export default CalculatorButtons;