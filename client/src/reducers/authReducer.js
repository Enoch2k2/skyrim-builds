let setupState = {
  currentUser: null
}

const authReducer = (state = setupState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        currentUser: action.payload.user
      }
    case "LOGOUT_USER":
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: null
      }
    default:
      return state;
  }
}

export default authReducer;