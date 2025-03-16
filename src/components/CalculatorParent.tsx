import styled from "styled-components";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";

type GetEquationProps = {
    values: (string | number)[];
    displayText: string;
}

interface CalculateTotalProps extends GetEquationProps {
    setEquationDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const getEquation = ({values, displayText}: GetEquationProps) => {
    const newValues = [...values, displayText];
    return newValues.map((val) => val === 'x' ? '*' : val).join('');
}

const calculateTotal = ({values, displayText, setEquationDisplay}: CalculateTotalProps) => {
    const equation = getEquation({values, displayText});
    setEquationDisplay(equation);
    const total = eval(equation);
    const isWholeNumber = Number.isInteger(total);
    return isWholeNumber ? total : total.toFixed(2);
}


const Calculator = () => {
    const [displayText, setDisplayText] = useState("0");
    const [values, setValues] = useState<(string | number)[] >([]);
    const [isNewNumber, setIsNewNumber] = useState(false);
    const [equationDisplay, setEquationDisplay] = useState('');

    const buttonOnClick = (text: string) => {
        if(!text) {
            return;
        }
        
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
            const total = calculateTotal({values, displayText, setEquationDisplay});
            setDisplayText(total);
            setValues([]);
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
        setEquationDisplay(getEquation({values, displayText: displayText + text}))
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
        setEquationDisplay('');
    }

    return (
        <CalculatorContainer>
            <CalculatorInner>
                <CalculatorDisplay displayText={displayText} equationDisplay={equationDisplay}/>
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
    border-radius: 10px;
    margin: 30px;
`;

export default Calculator;