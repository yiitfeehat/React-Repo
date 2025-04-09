import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

// AuthContextt'yi kullanmaya devam ediyoruz
export const AuthContextt = createContext();


const AuthContext = ({ children }) => {


  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState()
  useEffect(()=>{
    userTakip()
  }, [])

  const createUser = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);

    toastSuccess("register işlemi başarılı")

    navigate("/")

    await updateProfile(auth.currentUser, {
      displayName: displayName,
    })

  }
  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
    toastSuccess("Logined Succesfully!")
    navigate("/")
  };

  const signInGoogle = () => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {

        toastSuccess("Google ile giriş başarılı.")
        navigate("/")
      })
      .catch((error) => {
        toastError("Google ile giriş başarısız.")
      });
  }
  const cikis = () => {
    signOut(auth)
    toastSuccess("Toast ile çıkış başarılı")

  }

  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user
        setCurrentUser({ email: email, displayName: displayName, photoURL: photoURL })

      } else {
        setCurrentUser(false)

      }
    });
  }

  return (
    <AuthContextt.Provider value={{ createUser, signIn, signInGoogle, cikis, currentUser }}>
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
