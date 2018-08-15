import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: ${props => props.theme.colors.blue4};
  top: 0;
  transition: all 250ms ease-in-out;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: ${props => (props.joinRoomState ? "initial" : "center")}
  transform: scale(
    1,
    ${props => (props.createRoomState || props.joinRoomState ? "1" : "0")}
  );
  transform-origin: top;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ModalTitle = styled.h1``;

export const ModalInput = styled.input`
  height: 3rem;
  width: 20rem;
  margin: 1rem 0;
  border-radius: 25px;
  border: none;
  text-align: center;
  font-size: 1.2rem;
`;

export const ModalButton = styled.button`
  height: 3rem;
  width: 20rem;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  background-color: ${props => props.theme.colors.lightgreen};
`;

export const ModalListTitle = styled.h1`
  margin: 1rem 0;
`;

export const ModalList = styled.div`
  overflow-y: auto;
`;

export const ModalListItems = styled.li`
  list-style: none;
  width: 50vw;
  height: 3rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  margin: 0.5rem 0;
  background-color: ${props => props.theme.colors.blue3};
`;

export const ModalClose = styled.img`
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 1rem;
  top: 1rem;
  cursor: pointer;
`;
