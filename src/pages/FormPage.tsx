import React, { FormEventHandler, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Modal from '../components/Modal';
import PageLayout from '../components/PageLayout';
import Title from '../components/Title';

const FormPage = () => {
  const [isSignUp, setIsSingUp] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const nameInputChangeHandler = (event: React.FormEvent) => {
    setEnteredName((event.target as HTMLInputElement).value);
  };

  const emailInputChangeHandler = (event: React.FormEvent) => {
    setEnteredEmail((event.target as HTMLInputElement).value);
  };
  const passwordInputChangeHandler = (event: React.FormEvent) => {
    setEnteredPassword((event.target as HTMLInputElement).value);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (enteredName.trim() === '') return;
    setIsOpen(true);
  };

  return (
    <PageLayout>
      <Wrapper>
        <Title name="FormApp" />
        <div>
          <Button btn="Sign Up" onClick={() => setIsSingUp(true)} />
          <Button btn="Sign In" onClick={() => setIsSingUp(false)} />
        </div>
        <FormWrapper>
          {isSignUp === true ? (
            <SignUp onSubmit={formSubmitHandler}>
              <h2>Sign Up </h2>
              <input
                type="text"
                placeholder="Name"
                onChange={nameInputChangeHandler}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={emailInputChangeHandler}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={passwordInputChangeHandler}
              />
              <Button btn="Sign Up" />
            </SignUp>
          ) : (
            <SignIn onSubmit={formSubmitHandler}>
              <h2>Sign In </h2>
              <input
                type="email"
                placeholder="Email"
                onChange={emailInputChangeHandler}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={passwordInputChangeHandler}
              />
              <Button btn="Sign In" />
            </SignIn>
          )}
        </FormWrapper>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <>Thank you for sign up {enteredName}</>
        </Modal>
      </Wrapper>{' '}
    </PageLayout>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  input {
    padding: 1rem 2rem;
    border-radius: 3rem;
    border: 0.2rem solid #286fc7;
    text-transform: capitalize;
  }
  h2 {
    color: #286fc7;
    margin: 1rem;
  }
`;
const FormWrapper = styled.div`
  padding: 0 7rem;
  margin: 2.5rem;
  border: 0.2rem solid #286fc7;
  border-radius: 3rem;
`;
const SignUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const SignIn = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export default FormPage;
