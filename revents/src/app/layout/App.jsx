import React, { Component, Fragment } from "react";
import EventDashboard from "../../freatures/event/EventDashboard";
import NavBar from "../../freatures/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
