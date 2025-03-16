import { faDivide } from "@fortawesome/free-solid-svg-icons/faDivide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

type CalculatorDisplayProps = {
    displayText: string;
    equationDisplay: string;
}

const renderEquation = (equationDisplay: string) => {
    return equationDisplay.split("").map((char, index) => {
    if (char === "/") {
        return <StyledFontAwesomeIcon key={index} icon={faDivide} />;
    } else if (char === "*") {
        return <span key={index}>x</span>;
    } else {
        return <span key={index}>{char}</span>;
    }
    });
};
  

const CalculatorDisplay = ({displayText, equationDisplay}: CalculatorDisplayProps) => {
    // const formattedEquationText = formatEquationDisplay(equationDisplay);
    return (
        <DisplayContainer>
            <DisplayInner>
                {equationDisplay && <p className="equation">{renderEquation(equationDisplay)}</p>}
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
    margin: 20px;
    display: flex;
    justify-content: right;
    padding: 20px;
    height: 110px;
    position: relative;

    p {
        font-size: 45px;
        align-self: flex-end;

        &.equation {
            font-size: 14px;
            position: absolute;
            top: 20px;
        }
        
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 10px;
`;

export default CalculatorDisplay;