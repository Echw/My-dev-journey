import React, { useState } from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Title from '../components/Title';
import { FaBackspace } from 'react-icons/fa';

const Calculator = () => {
  const [actualValue, setActualValue] = useState('0');
  const [action, setAction] = useState('');

  const onDigitBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.textContent;
    if (actualValue === '0') {
      setActualValue(value!);
    } else {
      setActualValue((prevValue) => prevValue + value);
    }
  };

  const onActionBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.textContent;
    setAction(value!);
    setActualValue(actualValue + value);
  };

  const onEqualBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const numbers = actualValue.split(action);
    const firstNumber = parseInt(numbers[0]);
    const secondNumber = parseInt(numbers[1]);
    let result = 0;
    if (action === '+') {
      result = firstNumber + secondNumber;
    } else if (action === '-') {
      result = firstNumber - secondNumber;
    } else if (action === '/') {
      result = firstNumber / secondNumber;
    } else if (action === 'x') {
      result = firstNumber * secondNumber;
    } else if (action === '%') {
      result = (100 * secondNumber) / firstNumber;
    }
    setActualValue(result.toString());
  };

  const onClearBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActualValue('0');
  };

  const onDeleteBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newValue = actualValue.slice(0, -1);
    if (newValue === '') {
      setActualValue('0');
    } else {
      setActualValue(newValue);
    }
  };

  return (
    <PageLayout>
      <Wrapper>
        <Title name="Calculator" />
        <CalculatorWrapper>
          <Panel>
            <Result>
              <input
                type="text"
                name="display"
                id="display"
                disabled
                value={actualValue}
              />
            </Result>
            <Buttons>
              <BtnWrapper1>
                <button onClick={onClearBtnClick}>C</button>
                <button onClick={onActionBtnClick}>/</button>
                <button onClick={onActionBtnClick}>x</button>
                <DeleteBtnWrapper onClick={onDeleteBtnClick}>
                  <DeleteBtn />
                </DeleteBtnWrapper>
                <button onClick={onDigitBtnClick}>1</button>
                <button onClick={onDigitBtnClick}>2</button>
                <button onClick={onDigitBtnClick}>3</button>
                <button onClick={onActionBtnClick}>-</button>
                <button onClick={onDigitBtnClick}>4</button>
                <button onClick={onDigitBtnClick}>5</button>
                <button onClick={onDigitBtnClick}>6</button>
                <button onClick={onActionBtnClick}>+</button>
              </BtnWrapper1>
              <BtnWrapper2>
                <button onClick={onDigitBtnClick}>7</button>
                <button onClick={onDigitBtnClick}>8</button>
                <button onClick={onDigitBtnClick}>9</button>
                <button onClick={onActionBtnClick}>%</button>
                <button onClick={onDigitBtnClick}>0</button>
                <button>.</button>
              </BtnWrapper2>
              <BtnWrapper3>
                <EqualBtn onClick={onEqualBtnClick}>=</EqualBtn>
              </BtnWrapper3>
            </Buttons>
          </Panel>
        </CalculatorWrapper>
      </Wrapper>
    </PageLayout>
  );
};

export default Calculator;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalculatorWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  padding-top: 2rem;
`;

const Panel = styled.div`
  height: 600px;
  width: 420px;
  background-image: linear-gradient(to bottom right, c, #212730);
  border-radius: 5%;
  box-shadow: 1px 0 5px #0000005c;
  border: 0.2rem solid #286fc7;
  overflow: hidden;
`;

const Result = styled.div`
  height: 25%;
  width: 100%;

  input {
    box-sizing: border-box;
    background-color: transparent;
    height: 100%;
    width: 100%;
    font-size: 5rem;
    color: #286fc7;
    border: none;
    text-align: right;
    padding-right: 1rem;
  }
`;

const Buttons = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;

  button {
    background: transparent;
    text-decoration: none;
    border: none;
    cursor: pointer;
    height: calc((600px * 0.75) / 5);
    width: calc(420px / 4);
    text-align: center;
    font-size: 5vh;
    color: #286fc7;
    border: 0.2rem solid #286fc7;
  }
`;

const BtnWrapper1 = styled.div`
  grid-area: 1 / 1 / 4 / 5;
`;
const BtnWrapper2 = styled.div`
  grid-area: 4 / 1 / 6 / 4;
`;
const BtnWrapper3 = styled.div`
  grid-area: 4 / 4 / 6 / 5;
`;

const EqualBtn = styled.button`
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-size: 5vh;
  color: #286fc7;
  border: 0.2rem solid #286fc7;
  height: 100%;
  line-height: calc((600px * 0.75) / 3);
`;

const DeleteBtn = styled(FaBackspace)`
  margin: 0;
  padding: 0;
`;

const DeleteBtnWrapper = styled.button`
  font-size: 2.6rem !important;
`;
