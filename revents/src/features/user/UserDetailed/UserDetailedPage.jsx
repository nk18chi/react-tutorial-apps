import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import UserDetailedHeader from "./UserDetailedHeader";
import UserDetailedDescription from "./UserDetailedDescription";
import UserDetailedPhotos from "./UserDetailedPhotos";
import { compose } from "redux";
import { firestoreConnect, isEmpty } from "react-redux-firebase";
import UserDetailedSidebar from "./UserDetailedSidebar";
import UserDetailedEvents from "./UserDetailedEvents";
import { userDetailedQuery } from "../userQueries";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { getUserEvents, followUser, unfollowUser } from "../userActions";

const mapState = (state, ownProps) => {
  let userUid = null;
  let profile = {};
  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile;
  } else {
    profile =
      !isEmpty(state.firestore.ordered.profile) &&
      state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }
  return {
    profile,
    userUid,
    following: state.firestore.ordered.following,
    events: state.events.userEvents,
    eventsLoading: state.async.loading,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting
  };
};

const actions = {
  getUserEvents,
  followUser,
  unfollowUser
};

class UserDetailedPage extends Component {
  async componentDidMount() {
    await this.props.getUserEvents(this.props.userUid);
  }

  changeTab = (e, data) => {
    this.props.getUserEvents(this.props.userUid, data.activeIndex);
  };

  render() {
    const {
      profile,
      photos,
      auth,
      match,
      requesting,
      events,
      eventsLoading,
      followUser,
      unfollowUser,
      following
    } = this.props;
    const isCurrentUser = auth.uid === match.params.id;
    const isFollowed = !isEmpty(following);
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) return <LoadingComponent />;

    return (
      <Grid>
        <UserDetailedHeader profile={profile} />
        <UserDetailedDescription profile={profile} />
        <UserDetailedSidebar
          followUser={followUser}
          unfollowUser={unfollowUser}
          profile={profile}
          isCurrentUser={isCurrentUser}
          isFollowed={isFollowed}
        />
        {photos && photos.length > 0 && (
          <UserDetailedPhotos profile={profile} photos={photos} />
        )}
        <UserDetailedEvents
          events={events}
          eventsLoading={eventsLoading}
          changeTab={this.changeTab}
        />
      </Grid>
    );
  }
}

export default compose(
  connect(mapState, actions),
  firestoreConnect((auth, userUid, match) =>
    userDetailedQuery(auth, userUid, match)
  )
)(UserDetailedPage);
