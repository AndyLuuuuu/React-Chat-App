import React, { Component } from "react";
import {
  Container,
  Content,
  OptionTitle,
  Iconbox,
  Icon
} from "./SelectOptionStyled";
import addIcon from "../../assets/icons/plus-symbol.svg";
import joinIcon from "../../assets/icons/connection.svg";
import Modal from "../Reusable Components/Modal/Modal";
import { connect } from "react-redux";
import { createRoom, joinRoom } from "../../Redux/actions/setUserInfo";
import { clearMessages } from "../../Redux/actions/clearMessages";
import uuid from "uuid";

class SelectOption extends Component {
  state = {
    createRoom: false,
    joinRoom: false,
    roomName: ""
  };

  createRoom = () => {
    if (this.props.userData.username) {
      this.props.dispatch(clearMessages());
      this.props.socket.emit("RETRIEVE_ROOMS");
      const updateUserData = async () => {
        this.props.dispatch(createRoom(this.state.roomName));
      };
      updateUserData().then(() => {
        this.props.socket.emit("CREATE_ROOM", {
          id: uuid(),
          roomName: this.props.userData.room
        });
        this.props.socket.emit("JOINED_ROOM", {
          username: this.props.userData.username,
          roomName: this.props.userData.room
        });
        this.props.history.push("/chat");
      });
    } else {
      this.props.history.push("/");
    }
  };

  createRoomEnter = event => {
    if (event.charCode === 13 || event.keyCode === 13) {
      this.createRoom();
    }
  };

  createRoomOptionHandler = () => {
    this.setState(...this.state, { createRoom: !this.state.createRoom });
  };

  createRoomInputHandler = event => {
    this.setState(...this.state, { roomName: event.target.value });
  };

  joinRoomOptionHandler = () => {
    const updateRoomsData = async () => {
      this.props.socket.emit("RETRIEVE_ROOMS");
    };
    updateRoomsData().then(() => {
      this.setState(...this.state, { joinRoom: !this.state.joinRoom });
    });
  };

  joinRoom = room => {
    this.props.dispatch(clearMessages());
    this.props.socket.emit("RETRIEVE_ROOMS");
    const updateUserData = async () => {
      this.props.dispatch(joinRoom(room));
    };
    updateUserData().then(() => {
      this.props.socket.emit("JOIN_A_ROOM", {
        username: this.props.userData.username,
        roomName: room
      });
      this.props.history.push("/chat");
    });
  };

  closeModalHandler = () => {
    this.setState(...this.state, { joinRoom: false, createRoom: false });
  };

  render() {
    return (
      <Container>
        <Content>
          <OptionTitle>Create a room</OptionTitle>
          <Modal
            createRoomState={this.state.createRoom}
            inputChange={this.createRoomInputHandler}
            createRoomClicked={this.createRoom}
            joinRoomState={this.state.joinRoom}
            rooms={this.props.rooms}
            joinRoomClicked={this.joinRoom}
            closeModal={this.closeModalHandler}
            createRoomEnter={this.createRoomEnter}
          />
          <Iconbox onClick={this.createRoomOptionHandler}>
            <Icon src={addIcon} alt="add symbol" />
          </Iconbox>
          <OptionTitle>Join a room</OptionTitle>
          <Iconbox onClick={this.joinRoomOptionHandler}>
            <Icon src={joinIcon} alt="join symbol" />
          </Iconbox>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ userData, rooms }) => {
  return {
    userData,
    rooms: [...rooms]
  };
};

export default connect(mapStateToProps)(SelectOption);
