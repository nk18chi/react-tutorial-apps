import React from "react";
import { Store } from "./Store";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function FavPage(): JSX.Element {
  const [state, dispatch] = React.useContext(Store);
  const props: IEpisodeProps = {
    episodes: state.favorities,
    store: { state, dispatch },
    toggleFavAction,
    favorities: state.favorities
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className='episode-layout'>
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}
