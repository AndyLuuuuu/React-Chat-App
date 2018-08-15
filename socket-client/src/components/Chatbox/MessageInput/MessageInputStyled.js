import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 3rem;
  position: fixed;
  z-index: -1;
  bottom: 0;
  display: flex;
`;

export const InputBox = styled.input`
  padding: 0.5rem 0;
  flex-grow: 2;
  font-size: 1.2rem;
  background-color: ${props => props.theme.colors.blue4};
  border: none;
`;

export const SubmitButton = styled.button`
  flex-grow: 1;
  padding: 0.5rem 0;
  border: none;
  background-color: ${props => props.theme.colors.blue1};
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
`;
