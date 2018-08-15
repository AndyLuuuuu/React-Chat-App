import styled from "styled-components";

export const Container = styled.div`
  font-family: ${props => props.theme.font.lato};
`;

export const ChatboxTitle = styled.h1`
  text-align: center;
  padding: 1rem 0;
  background-color: ${props => props.theme.colors.blue4};
  font-size: 1.2rem;
`;

export const StyledHr = styled.hr`
  margin: 0 auto;
`;

export const ChatContent = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 80vh;
`;

export const ChatMessages = styled.p`
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #a6a6a6;
`;

export const GearIcon = styled.img`
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 0.7rem;
  top: 0.7rem;
  z-index: 2;
  cursor: pointer;
`;
