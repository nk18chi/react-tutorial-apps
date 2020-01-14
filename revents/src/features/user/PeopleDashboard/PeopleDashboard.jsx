import React, { Component } from "react";
import { Grid, Segment, Header, Card } from "semantic-ui-react";
import PersonCard from "./PersonCard";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { peopleDetailedQuery } from "./peopleQuery";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const mapState = state => {
  return {
    loading: state.async.loading,
    auth: state.firebase.auth,
    following: state.firestore.ordered.following,
    followers: state.firestore.ordered.followers,
    requesting: state.firestore.status.requesting
  };
};

class PeopleDashboard extends Component {
  render() {
    const { requesting, following, followers } = this.props;
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) return <LoadingComponent />;

    return (
      <Grid>
        <Grid.Column width={16}>
          <Segment>
            <Header dividing content='People following me' />
            <Card.Group itemsPerRow={8} stackable>
              {following &&
                following.length > 0 &&
                following.map(user => <PersonCard key={user.id} user={user} />)}
            </Card.Group>
          </Segment>
          <Segment>
            <Header dividing content="People I'm following" />
            <Card.Group itemsPerRow={8} stackable>
              {followers &&
                followers.length > 0 &&
                followers.map(user => <PersonCard key={user.id} user={user} />)}
            </Card.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default compose(
  connect(mapState, null),
  firestoreConnect(auth => peopleDetailedQuery(auth))
)(PeopleDashboard);
