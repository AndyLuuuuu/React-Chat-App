import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalInput,
  ModalButton,
  ModalListTitle,
  ModalList,
  ModalListItems,
  ModalClose
} from "./ModalStyled";
import CloseIcon from "../../../assets/icons/letter-x.svg";

const Modal = props => {
  return (
    <ModalContainer
      createRoomState={props.createRoomState}
      joinRoomState={props.joinRoomState}
    >
      <ModalContent
        style={{ display: props.createRoomState ? "flex" : "none" }}
      >
        <ModalClose
          src={CloseIcon}
          alt="Close Icon"
          onClick={props.closeModal}
        />
        <ModalTitle>Create Room</ModalTitle>
        <ModalInput
          placeholder="Enter Room Name"
          onChange={props.inputChange}
          onKeyPress={event => props.createRoomEnter(event)}
        />
        <ModalButton onClick={props.createRoomClicked}>Create Room</ModalButton>
      </ModalContent>
      <ModalContent style={{ display: props.joinRoomState ? "flex" : "none" }}>
        <ModalClose
          src={CloseIcon}
          alt="Close Icon"
          onClick={props.closeModal}
        />
        <ModalListTitle>Join Room</ModalListTitle>
        <ModalList>
          {props.rooms.map(room => {
            return (
              <ModalListItems
                key={room.id}
                onClick={() => {
                  props.joinRoomClicked(room.room);
                }}
              >
                {room.room}
              </ModalListItems>
            );
          })}
        </ModalList>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
