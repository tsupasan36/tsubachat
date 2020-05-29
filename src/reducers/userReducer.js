const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload.user }; //→setstateと同じ意味

    // new clear user
    case "CLEAR_USER":
      return { ...state, user: null };

    default:
      return state;
  }
};

export default userReducer;
