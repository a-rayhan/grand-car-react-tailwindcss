import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const provider = new GoogleAuthProvider(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser);
            setLoading(false);
        })

        return (() => {
            unSubscribe()
        })
    }, [])

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const AuthInfo = { googleLogIn, userRegister, userLogin, user, logOut, loading, updateUserProfile };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;