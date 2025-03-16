import styled from "styled-components";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";

const calculateTotal = (values: (string | number)[], displayText: string) => {
    const newValues = [...values, Number(displayText)];
    const equation = newValues.map((val) => val === 'x' ? '*' : val).join('');
    const total = eval(equation);
    const isWholeNumber = Number.isInteger(total);
    return isWholeNumber ? total : total.toFixed(2);
}


const Calculator = () => {
    const [displayText, setDisplayText] = useState("0");
    const [values, setValues] = useState<(string | number)[] >([]);
    const [isNewNumber, setIsNewNumber] = useState(false);

    const buttonOnClick = (text: string) => {
        if(text === "AC")  {
            resetCalculator();
            return;
        }

        const userInputNumber =  !isNaN(Number(text));
        const lastInputIsNotNumber = isNaN(Number(values[values.length - 1]));
        const hasPreviousInputs = values.length > 0;
        const userWantsTotal = text === "=";

        // Get the total
        if(userWantsTotal) {
            const total = calculateTotal(values, displayText);
            setDisplayText(total);
            setValues([]);
            // setHasTotal(true);
            return;
        }


        // Create a new number if the last input was a operator
        if(!isNewNumber && hasPreviousInputs && lastInputIsNotNumber && userInputNumber) {
            setDisplayText(text);
            setIsNewNumber(true);
            return;
        }

        // If the userInput a number or a '.' then add it to the display
        if(userInputNumber || text === '.') {
            if(displayText === "0") {
                setDisplayText(text);
            } else {
                setDisplayText(displayText + text)
            }
            return;
        }
        
        // Input was an operator so save the operator and the number
        setValues(prevValues => [
            ...prevValues,
            ...[Number(displayText), text]
        ]);
        setIsNewNumber(false);
        
    }

    const resetCalculator = () => {
        setDisplayText("0");
        setValues([]);
        setIsNewNumber(false);
    }

    return (
        <CalculatorContainer>
            <CalculatorInner>
                <CalculatorDisplay displayText={displayText}/>
                <CalculatorButtons buttonOnClick={buttonOnClick} />
            </CalculatorInner>
        </CalculatorContainer>
    );

}

const CalculatorContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
`;

const CalculatorInner = styled.div`
    background-color: #111111;
    margin: 30px;
`;

export default Calculator;