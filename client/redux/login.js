// -------------------
// types
// -------------------
export const SIGN_UP_INFO = 'sign_up_info';
export const ADD_SIGN_UP_INFO = 'add_sign_up_info';
export const ADD_USER = 'add_user';

// -------------------
// actions
// -------------------
export const signUpInfoAction = (username, email, password) => ({
  type: SIGN_UP_INFO,
  username,
  email,
  password,
});

export const addSignUpInfoAction = (firstname, lastname, position) => ({
  type: ADD_SIGN_UP_INFO,
  firstname,
  lastname,
  position,
});

export const userInfoAction = user => ({
  type: ADD_USER,
  username: user.username,
  email: user.email,
  firstname: user.firstname,
  lastname: user.lastname,
  position: user.position,
});

// -------------------
// reducer
// -------------------
const initialState = {
  username: '',
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  type: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_INFO:
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
        password: action.password,
      });
    case ADD_SIGN_UP_INFO:
      return Object.assign({}, state, {
        firstname: action.firstname,
        lastname: action.lastname,
        type: action.position,
      });
    default:
      return state;
  }
};
