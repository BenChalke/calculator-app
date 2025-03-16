import styled from "styled-components";

type CalculatorDisplayProps = {
    displayText: string;
}

const CalculatorDisplay = ({displayText}: CalculatorDisplayProps) => {
    return (
        <DisplayContainer>
            <DisplayInner>
                <p>{displayText}</p>
            </DisplayInner>
        </DisplayContainer>
    )
}

const DisplayContainer = styled.div`
    width: 100%;
`;

const DisplayInner = styled.div`
    color: white;
    background-color: #6f6f6f;
    margin: 2vw;
    display: flex;
    justify-content: right;
    padding: 20px;
    height: 8vw;

    p {
        font-size: 3vw;
        align-self: flex-end;
    }
`;

export default CalculatorDisplay;