import React, { Component } from "react";
import {
  Container,
  ChatboxTitle,
  StyledHr,
  ChatContent,
  ChatMessages,
  GearIcon
} from "./ChatboxStyled";
import MessageInput from "./MessageInput/MessageInput";
import { connect } from "react-redux";
import uuid from "uuid";
import gearIcon from "../../assets/icons/gearicon.svg";
import { menuToggle } from "../../Redux/actions/showMenu";

class Chatbox extends Component {
  state = {
    message: ""
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const messageBody = document.getElementById("messageBody");
    messageBody.scrollTop = messageBody.scrollHeight;
  };

  onMessageInputChange = event => {
    this.setState(...this.state, { message: event.target.value });
  };

  onSendEnterHandler = event => {
    if (event.charCode === 13 || event.keyCode === 13) {
      const sendMessage = async () => {
        this.props.socket.emit("SEND_MESSAGE", {
          id: uuid(),
          roomName: this.props.data.room,
          user: this.props.data.username,
          message: this.state.message
        });
      };
      sendMessage().then(() => {
        this.setState({ message: "" });
      });
    }
  };

  onSendClickHandler = () => {
    const sendMessage = async () => {
      this.props.socket.emit("SEND_MESSAGE", {
        id: uuid(),
        roomName: this.props.data.room,
        user: this.props.data.username,
        message: this.state.message
      });
    };
    sendMessage().then(() => {
      this.setState({ message: "" });
    });
  };

  onShowMenuHandler = () => {
    this.props.dispatch(menuToggle());
  };

  render() {
    return (
      <Container>
        <GearIcon
          src={gearIcon}
          alt="menu gear icon"
          onClick={this.onShowMenuHandler}
        />
        <ChatboxTitle>
          {this.props.data.room ? this.props.data.room : "Please join a room."}
        </ChatboxTitle>
        <StyledHr />
        <ChatContent id="messageBody">
          {this.props.data.messages.map(message => {
            return (
              <ChatMessages key={message.id}>{message.message}</ChatMessages>
            );
          })}
        </ChatContent>
        <MessageInput
          clickedSend={this.onSendClickHandler}
          keypressSend={this.onSendEnterHandler}
          onInputChange={this.onMessageInputChange}
          messageState={this.state.message}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: {
      messages: state.messages,
      username: state.userData.username,
      room: state.userData.room,
      menu: state.menu
    }
  };
};

export default connect(mapStateToProps)(Chatbox);
