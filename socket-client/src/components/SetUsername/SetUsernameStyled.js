import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const SetUserTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-family: ${props => props.theme.font.lato};
`;

export const SetUserInput = styled.input`
  height: 3rem;
  border-radius: 25px;
  border: 1px solid black;
  margin: 1rem 0;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  &:focus {
    outline: none;
  }
  @media (min-width: 37rem) {
    width: 50%;
  }
`;

export const SelectOptionButton = styled.button`
  padding: 0.5rem 0;
  height: 3rem;
  border-radius: 25px;
  border: none;
  font-weight: 300;
  font-size: 1.5rem;
  width: 100%;
  background-color: ${props => props.theme.colors.lightgreen};
  &:nth-of-type(2) {
    margin-top: 0.5rem;
  }
  &:active,
  &:focus {
    outline: none;
  }
  @media (min-width: 37rem) {
    width: 50%;
  }
`;
