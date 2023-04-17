export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  actualPlaylist: null,
  actualPlaylistImage: null,
  likedMusics: null,
  likedMusicsActive: false,
};

const reducer = (state, action) => {
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

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_ACTUAL_PLAYLIST":
      return {
        ...state,
        actualPlaylist: action.actualPlaylist,
        actualPlaylistImage: action.actualPlaylistImage,
      };

    case "SET_LIKED_MUSICS":
      return {
        ...state,
        likedMusics: action.likedMusics,
      };

    case "SET_LIKED_MUSICS_ACTIVE":
      return {
        ...state,
        likedMusicsActive: action.likedMusicsActive,
      };

    default:
      return state;
  }
};

export default reducer;
