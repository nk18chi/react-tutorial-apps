import React, { Fragment } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const [state] = React.useContext(Store);

  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/faves'>Homefavorite(s): {state.favorities.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}
