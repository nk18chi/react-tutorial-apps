const initState = {
  posts: [
    {
      id: "1",
      title: "AAAAAAAA",
      body: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    {
      id: "2",
      title: "BBBBBBBBBB",
      body: "bbbbbbbbbbbbbbbbbbbbbbbbbbbb"
    },
    {
      id: "3",
      title: "CCCCCCCCCC",
      body: "cccccccccccccccccccccccccccccccccccccccc"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
