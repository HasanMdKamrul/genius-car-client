import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //   ** create user with email and pass

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const updateUserInfo = (profileInfo) => {
    return updateProfile(auth.currentUser, profileInfo);
  };

  const socialAuthentication = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    loading,
    user,
    login,
    createUser,
    verifyEmail,
    updateUserInfo,
    socialAuthentication,
  };

  return authInfo;
};

export default useFirebase;
