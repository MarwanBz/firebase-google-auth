import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import About from "./about";
import PrivatePage from "./private";
import { Router, useRouter } from "next/router";
import Link from "next/link";
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  signOut,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { initFirebase } from "../src/firebase/firebase";
import { useEffect, useState } from "react";
import RootLayout from "../src/components/RootLayout";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      return unsubscribe;
    });
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setUser(user);
    //   if (!user) {
    //     router.push("/login");
    //   }
    // });

    // return () => {
    //   unsubscribe();
    // };
  }, [router]);

  // if (!user) {
  //   console.log("login first");
  //   return <div>Loading...</div>;
  // }else {

  // }
  // const app = initFirebase()
  // console.log(app);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
        />
      </Head>
      <main>
        <RootLayout>
          <PrivatePage />
        </RootLayout>
      </main>
    </div>
  );
}
