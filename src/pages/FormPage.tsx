import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Title from '../components/Title';

const FormPage = () => {
  return (
    <Wrapper>
      <Title name="FormApp" />
      <div>
        <Button btn="Sign Up" />
        <Button btn="Sign In" />
      </div>
      <Form>
        <SignUp action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <Button btn="Sign Up" />
        </SignUp>

        <SignIn action="">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <Button btn="Sign In" />
        </SignIn>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  input {
    padding: 1rem 2rem;
  }
`;
const Form = styled.div`
  margin: 2.5rem;
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
