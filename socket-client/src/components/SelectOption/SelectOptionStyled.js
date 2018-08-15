import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const OptionTitle = styled.h1`
  margin: 0.5rem 0;
  &:nth-of-type(2) {
    margin-top: 1rem;
  }
`;

export const Iconbox = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: ${props => props.theme.colors.lightgreen};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;
