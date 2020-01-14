import React from "react";
import { Grid, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDetailedSidebar = ({
  profile,
  isCurrentUser,
  followUser,
  unfollowUser,
  isFollowed
}) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrentUser ? (
          <Button
            as={Link}
            to='/settings'
            color='teal'
            fluid
            basic
            content='Edit Profile'
          />
        ) : isFollowed ? (
          <Button
            onClick={() => unfollowUser(profile)}
            color='teal'
            fluid
            basic
            content='Unfollow user'
          />
        ) : (
          <Button
            onClick={() => followUser(profile)}
            color='teal'
            fluid
            basic
            content='Follow user'
          />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedSidebar;
