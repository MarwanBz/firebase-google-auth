import "react-loading-skeleton/dist/skeleton.css";

import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { initFirebase } from "../../src/firebase/firebase";
import { useRouter } from "next/router";

// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';




const PrivatePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const app = initFirebase();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  });
 

  // const user = onAuthStateChanged(auth);

  // If there is no logged-in user, redirect to the login page
  if (user) {
    // router.push("/");
    user == user;
    <div>loading</div>;
  }
  else{
    !user
    console.log("yourN't loogged in yet");
    return <div>access denied</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Skeleton count={10} />
      <div className="bg-white p-10 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-5">Welcome to the Private Page</h1>
        <p className="text-lg mb-5">
          Only logged-in users can access this page.
        </p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
          // onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default PrivatePage;
