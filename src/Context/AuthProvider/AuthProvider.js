import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.Config';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user , setUser ] = useState(null);

        // const user = {displayName: 'Eh Emon'};


        useEffect(()=>{
          const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
                console.log(' inside auth  state change', currentuser);
                setUser(currentuser);

            })

            return () => {
                unsubscribe()
            }
        },[]);



        const providerlogin = (provider) => {
            return signInWithPopup(auth,provider)
        }

        const logOut = () => {
            return signOut(auth);
        }

        const creteUser = (email,password) => {
            return createUserWithEmailAndPassword(auth, email , password)
        }

        const signInUser = (email, password ) => {
            return signInWithEmailAndPassword(auth, email , password);
        }

        const AuthInfo = {user , providerlogin ,logOut, creteUser , signInUser}


    return (
        <AuthContext.Provider value={AuthInfo}>


        {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;