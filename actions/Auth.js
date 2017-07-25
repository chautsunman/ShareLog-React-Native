import * as firebase from 'firebase';

function signInAnonymouslyRequest() {
  return {
    type: 'SIGN_IN_ANONYMOUSLY_REQUEST'
  };
}

function signInAnonymouslySuccess(user) {
  return {
    type: 'SIGN_IN_ANONYMOUSLY_SUCCESS',
    user: user
  };
}

export function signInAnonymously() {
  return function(dispatch) {
    dispatch(signInAnonymouslyRequest());

    return firebase.auth().signInAnonymously()
        .then(
          (user) => {
            dispatch(signInAnonymouslySuccess(user));
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

function signOutSuccess() {
  return {
    type: 'SIGN_OUT_SUCCESS',
  }
}

export function signOut() {
  return function(dispatch) {
    dispatch(signOutRequest());

    return firebase.auth().signOut()
        .then(
          () => {
            dispatch(signOutSuccess());
          },
          (error) => {
            console.log('signOut error', error);
          }
        );
  }
}

/* export const signInAnonymously = () => {
  return {
    type: 'SIGN_IN_ANONYMOUSLY',
    user: {uid: 'uid'}
  }
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}; */
