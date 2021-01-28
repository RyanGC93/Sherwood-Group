import { fetch } from './csrf.js';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const TOKEN_KEY = "TOKEN_KEY";
const SET_TOKEN = "session/SET_TOKEN";
const REMOVE_TOKEN = "session/REMOVE_TOKEN"


const removeToken = (token) => ({ type: REMOVE_TOKEN });
const setToken = (token) => ({ type: SET_TOKEN, payload: token });
const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER
});

export const login = ({ credential, password }) => async (dispatch) => {
  const res = await fetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({ credential, password })
  });
  if(!res.ok) return
  console.log(res)
  dispatch(setUser(res.data.user));
  let token = 'sdsdasd'  
  window.localStorage.setItem(TOKEN_KEY, token);
  await dispatch(setToken(token));

  return res;
};

export const restoreUser = () => async (dispatch) => {
  const res = await fetch('/api/session');
  dispatch(setUser(res.data.user));
  return res;
};

export const registerUser = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password
    })
  });

  dispatch(setUser(response.data.user));
  return response;
};

export const logoutUser = () => async (dispatch) => {
  const response = await fetch('/api/session', {
    method: 'DELETE'
  });
  window.localStorage.removeItem(TOKEN_KEY);
  dispatch(removeToken());
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
        case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return newState;
    }  
    default:
      return state;
  }
}
export const loadAuthToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};



export default reducer;
