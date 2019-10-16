let headersOptions = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const parseJson = resp => resp.json();

export const isLoggedIn = () => !!localStorage.getItem('token');

const loginUser = user => {
  return {
    type: "LOGIN_USER",
    payload: user
  }
}

export const signup = (user, history) => {
  return dispatch => {
    return fetch('/api/users', {
      method: 'POST',
      headers: headersOptions,
      body: JSON.stringify({ user })
    })
    .then(parseJson)
    .then(json => {
      dispatch( loginUser(json) )
      history.push('/');
    })
  }
}

export const login = (user, history) => {
  return dispatch => {
    return fetch('/auth/login', {
      method: 'POST',
      headers: headersOptions,
      body: JSON.stringify( user )
    })
    .then(parseJson)
    .then(json => {
      dispatch( loginUser(json) )
      history.push('/');
    })
  }
}

export const fetchCurrentUser = () => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch('http://localhost:3001/api/current-user', {
      headers: {
        ...headersOptions,
        'Authorization': `Bearer ${ localStorage.getItem('token') }`
      }
    })
    .then(parseJson)
    .then( json => {
      dispatch( loginUser(json) )
    })
  }
}

export const logout = history => {
  return dispatch => {
    history.push("/")
    return dispatch({
      type: "LOGOUT_USER"
    });
  }
}