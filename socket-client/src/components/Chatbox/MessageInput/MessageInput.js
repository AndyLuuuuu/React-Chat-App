import React from "react";
import { Container, InputBox, SubmitButton } from "./MessageInputStyled";
import { connect } from "react-redux";

const MessageInput = props => {
  return (
    <Container>
      <InputBox
        disabled={!props.username}
        onKeyPress={event => props.keypressSend(event)}
        onChange={event => props.onInputChange(event)}
        value={props.messageState}
        placeholder="Enter message"
      />
      <SubmitButton onClick={props.clickedSend}>Send</SubmitButton>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messages,
    username: state.userData.username
  };
};

export default connect(mapStateToProps)(MessageInput);
