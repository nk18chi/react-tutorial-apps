import React, { Component, Fragment } from "react";
import EventDashboard from "../../freatures/event/EventDashboard";
import NavBar from "../../freatures/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../freatures/home/HomePage";
import EventForm from "../../freatures/event/Eventform/EventForm";
import EventDetailedPage from "../../freatures/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../freatures/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../freatures/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../freatures/user/Settings/SettingsDashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Route path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
