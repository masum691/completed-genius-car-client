import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react'
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init'

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    
    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(res => {
            setUser(res.user)
        })
    }

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
        .then( () => {
            
        })
    }

    return {
        user,
        signInGoogle,
        logOut
    }
}

export default useFirebase;