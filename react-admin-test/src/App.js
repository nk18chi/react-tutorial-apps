import React from "react";
import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList, UserEdit } from "./users";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import firestoreProvider from "./firestoreProvider";

// const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => (
  // <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={firestoreProvider}>
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name='users' list={UserList} edit={UserEdit} icon={UserIcon} />
  </Admin>
);

export default App;
