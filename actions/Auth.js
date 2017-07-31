import * as firebase from 'firebase';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

export function onSignIn(user) {
  return {
    type: SIGN_IN_SUCCESS,
    user: user
  };
}

export function onSignOut() {
  return {
    type: SIGN_OUT_SUCCESS
  };
}

function signInAnonymouslyRequest() {
  return {
    type: 'SIGN_IN_ANONYMOUSLY_REQUEST'
  };
}

export function signInAnonymously() {
  return function(dispatch) {
    dispatch(signInAnonymouslyRequest());

    return firebase.auth().signInAnonymously()
        .then(
          (user) => {
            dispatch(onSignIn(user));
          },
          (error) => {
            console.log('signInAnonymously error', error);
          }
        );
  };
}

function signOutRequest() {
  return {
    type: 'SIGN_OUT_REQUEST'
  };
}

export function signOut() {
  return function(dispatch) {
    dispatch(signOutRequest());

    return firebase.auth().signOut()
        .then(
          () => {
            dispatch(onSignOut());
          },
          (error) => {
            console.log('signOut error', error);
          }
        );
  }
}
