import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/StyledComponents/Theme";
import { connect } from "react-redux";
import io from "socket.io-client";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SetUsername from "./components/SetUsername/SetUsername";
import SelectOption from "./components/SelectOption/SelectOption";
import Chatbox from "./components/Chatbox/Chatbox";
import SideMenu from "./components/Side Menu/SideMenu";

// Actions
import { receiveMessage } from "./Redux/actions/receiveMessage";
import { retrieveRooms } from "./Redux/actions/retrieveRooms";

class App extends Component {
  constructor() {
    super();

    // For production purpose
    this.socket = io("/");

    // For dev purpose
    // this.socket = io("localhost:4001");

    // For testing on local network
    // this.socket = io("192.168.0.14:4001");

    this.socket.emit("RETRIEVE_ROOMS");

    this.socket.on("RECEIVE_MESSAGE", data => {
      this.props.dispatch(receiveMessage(data));
    });

    this.socket.on("SUCCESSFUL_JOIN", data => {
      this.props.dispatch(receiveMessage(data));
    });

    this.socket.on("RETRIEVE_ROOMS", data => {
      this.props.dispatch(retrieveRooms(data));
    });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <SideMenu socket={this.socket} />
            <Switch>
              <Route path="/" exact component={SetUsername} />

              <Route
                path="/option"
                render={props => (
                  <SelectOption {...props} socket={this.socket} />
                )}
              />
              <Route
                path="/chat"
                render={() => <Chatbox socket={this.socket} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default connect()(App);
