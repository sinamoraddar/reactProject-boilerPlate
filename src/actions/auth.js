import { firebase, googleAuthProvider } from '../firebase/firebase';

//LOG_IN
export const logIn = (uid) => ({
    type: 'LOG_IN',
    uid
})

export const startLogIn = () =>
    () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };

//LOG_OUT
export const logOut = () => ({
    type: 'LOG_OUT'
})

export const startLogOut = () =>
    () => {
        return firebase.auth().signOut();
    }