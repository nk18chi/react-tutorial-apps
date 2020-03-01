import React from "react";
import { List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput } from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <EmailField source='email' />
      <TextField source='phone' />
      <MyUrlField source='website' />
      <TextField source='company.name' />
    </Datagrid>
  </List>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <EmailField source='email' />
      <TextInput source='username' />
    </SimpleForm>
  </Edit>
);
