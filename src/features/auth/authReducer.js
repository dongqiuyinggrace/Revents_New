import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';

const initalState = {
  authenticated: true,
  currentUser: {
    email: 'dong@test.gmail',
    photoURL: '/assets/user.png',
  },
};

const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: '/assets/user.png',
        },
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
