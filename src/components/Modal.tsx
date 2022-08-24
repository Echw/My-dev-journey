import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  if (!props.open) return null;

  return createPortal(
    <>
      <Overlay>
        <ModalWrapper>
          {props.children} <button onClick={props.onClose}>Close</button>
        </ModalWrapper>
      </Overlay>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #286fc7;
  border-radius: 3rem;
  padding: 4rem;
  z-index: 1000;
  color: white;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    background-color: transparent;
    font-weight: 600;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0.4rem;
    border: 0.1rem solid white;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(0.2rem);
  z-index: 100000;
`;

export default Modal;
