import * as firebase from 'firebase';

export const GET_LOG = 'GET_LOG';
export const RESET_LOG_STATE = 'RESET_LOG_STATE';

export function getLogs() {
  return function(dispatch, getState) {
    return firebase.database().ref('/log/' + getState().auth.user.uid)
        .on('value', (snapshot) => {
          let logsObject = snapshot.val();
          let logsArray = [];

          if (logsObject === null) {
            dispatch({
              type: GET_LOG,
              logs: []
            });
          }

          for (let logId in logsObject) {
            logsArray.push({...logsObject[logId], id: logId});
          }

          dispatch({
            type: GET_LOG,
            logs: logsArray
          });
        });

    /* return firebase.database().ref('/log/' + getState().auth.user.uid).once('value')
        .then((snapshot) => {
          return snapshot.val();
        })
        .then((logsObject) => {
          let logs = [];

          for (let logId in logsObject) {
            logs.push(logsObject[logId]);
          }

          return logs;
        })
        .then((logsArray) => {
          dispatch({
            type: GET_LOG,
            logs: logsArray
          });
        }); */
  };
}

export function saveLog(log) {
  return function(dispatch, getState) {
    let ref = firebase.database().ref('/log/' + getState().auth.user.uid);
    if (log.id) {
      ref = ref.child(log.id);
    } else {
      ref = ref.push();
    }

    return ref.set(log)
        .catch((error) => {
          console.log('saveLog error', error);
        });
  };
}

export function resetLogState() {
  return {
    type: RESET_LOG_STATE
  };
}
