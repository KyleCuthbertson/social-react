import app from "../utils/firebaseConfig";
import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext({});

const auth = app.auth();

// Custom hooks
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {

  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Sign up user to firebase
  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  
  // Login user to firebase
  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  // Log out of firebase
  const logOut = () => {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}