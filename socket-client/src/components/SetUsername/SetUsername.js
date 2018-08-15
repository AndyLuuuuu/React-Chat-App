import React, { Component } from "react";
import {
  Container,
  Content,
  SetUserTitle,
  SetUserInput,
  SelectOptionButton
} from "./SetUsernameStyled";
import { connect } from "react-redux";
import { setUsername } from "../../Redux/actions/setUserInfo";

class SetUser extends Component {
  state = {
    username: null
  };

  SetUsername = () => {
    const usernameSet = async () => {
      this.props.dispatch(setUsername(this.state.username));
    };
    usernameSet().then(() => {
      this.props.history.push("/option");
    });
  };

  SetUsernameEnter = event => {
    if (event.charCode === 13 || event.keyCode === 13) {
      this.SetUsername();
    }
  };

  onUsernameInputHandler = event => {
    this.setState(...this.state, { username: event.target.value });
  };

  onSetUsernameHandler = event => {
    this.SetUsername();
  };

  render() {
    return (
      <Container>
        <Content>
          <SetUserTitle>Set your username</SetUserTitle>
          <SetUserInput
            onChange={event => this.onUsernameInputHandler(event)}
            onKeyPress={event => this.SetUsernameEnter(event)}
          />
          <SelectOptionButton onClick={this.onSetUsernameHandler}>
            Next
          </SelectOptionButton>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ username }) => {
  return {
    userData: username
  };
};

export default connect(mapStateToProps)(SetUser);
