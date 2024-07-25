export const initialState = {
  users: [
  ],
  loggedInUser: null,
  liked: [],
  postLikes: 0,
  commentsAdded: 0,
  projectsViewed: 0,

  login: false,
  text: "",
  search: [
    {
      id: 1,
      title: "Animals",
      category: "cyberpunk",
      image: "./assets/a.jpeg",
      channel: "imaginary",
      profile: "./assets/c.jpeg",
    },
    {
      id: 2,
      title: "Home sweet home",
      category: "cyberpunk",
      image: "./assets/c.jpeg",
      channel: "Science Fiction",
      profile: "./assets/d.jpeg",
    },
    {
      id: 3,
      title: "world and dimension",
      category: "cyberpunk",
      image: "./assets/e.jpeg",
      channel: "Unreal Engine",
      profile: "./assets/c.jpeg",
    },
    {
      id: 4,
      title: "world of thanks",
      category: "cyberpunk",
      image: "./assets/d.jpeg",
      channel: "Tutotials",
      profile: "./assets/f.jpeg",
    },
    {
      id: 5,
      title: "new and dimension",
      category: "cyberpunk",
      image: "./assets/g.jpeg",
      channel: "Children's Art",
      profile: "./assets/i.jpeg",
    },
    {
      id: 6,
      title: "World never gets old",
      category: "cyberpunk",
      image: "./assets/h.jpeg",
      channel: "Unreal Engine",
      profile: "./assets/a.jpeg",
    },
    {
      id: 7,
      title: "world and dimension",
      category: "cyberpunk",
      image: "./assets/s.jpeg",
      channel: "Universe",
      profile: "./assets/e.jpeg",
    },
    {
      id: 8,
      title: "world and dimension",
      category: "cyberpunk",
      image: "./assets/b.jpeg",
      channel: "Virtual Reality",
      profile: "./assets/c.jpeg",
    },
  ],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "LIKED":
      return {
        ...state,
        liked: [...state.liked, action.item],
      };

    case "REMOVE":
      const index = state.liked.findIndex(
        (likedItems) => likedItems.id === action.id
      );

      let newLikes = [...state.liked];

      if (index >= 0) {
        newLikes.splice(index, 1);
      } else {
        console.warn(
          `Can't resolve product (id: ${action.id}) as its not in basket`
        );
      }

      return {
        ...state,
        liked: newLikes,
      };
    ///
    case "SEARCH":
      let searchText = [...state.text];
      return {
        ...state,
        value: searchText,
      };
    case "UPDATE":
      return {
        ...state,
        text: [action.item],
      };

    ///

    case "LOGIN":
      return {
        ...state,
        users: [...state.users, action.item],
        login: !state.login,
        
      };

      case "SIGNOUT": return{
        ...state,
        login: !state.login
      }

    case "SIGNUP":
      return {
        ...state,
        user: action.item,
        login: !state.login
      };

    case "LIKE":
      return {
        ...state,
        likes: (state.postLikes += 1),
      };

    case "COMMENTS":
      return {
        ...state,
        comments: (state.commentsAdded += 1),
      };

    default:
      return state;
  }
}
export default reducer;

//4.19npm~~
