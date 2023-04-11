export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQC5Ncqb-SM8j06rmT3XcC5pN21Tst_jk2wmX8zKkSysZgf_xSnobiRMtXvY9UGANc7ZjFj0fea0kICi9hR9xevAJwJN9T-n_l1CXs8lqaqx9YzvmgQ1FyZK0ifzEAHK7iewYJHmvdnoGeWpfTiDygq5mdlejosWj8Q5qObOQGrxNvGXC1wJxhXxGlNa6pMRwi3u",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
