import { useState,useEffect,useRef } from 'react';
import Link from 'next/link';
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { signOut,getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "../firebase/firebase";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignOut,setShowSignOut] = useState(false)
  const [user, setUser] = useState(null);
  const buttonRef = useRef(null);

  const app = initFirebase();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  });

  const handleSignIn = async () => {
    // handle user sign-in here, using Firebase authentication methods
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        alert("successful signin!")
        console.log("success", result);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.log(error);
      });
  };
  const handleSignOut = async () => {
    // handle user sign-out here, using Firebase authentication methods
    try {
      await signOut(auth);
      setUser(null);
      // Update the user state and redirect to the home page or login page
      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfile = () => {
    // Add code to handle opening the user's profile
    // This could involve displaying a modal or navigating to a new page
      setShowSignOut(!showSignOut); // toggle the state of showSignOut

    console.log("Opening user profile");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // check if the click occurred outside the button
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowSignOut(false);
      }
    };
    // add the event listener to the document object
    document.addEventListener("click", handleClickOutside);

    // cleanup function to remove the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [buttonRef]);


    console.log(app);
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <p className="text-white">My Website</p>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </p>
                </Link>
                <Link href="/about">
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </p>
                </Link>
                <Link href="/blog">
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Blog
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* Sign In button */}
          <div className="flex items-center justify-between py-4 px-8">
            {user ? (
              <div className="relative" ref={buttonRef}>
                <button
                  className="bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
                  onClick={handleProfile}
                >
                  Profile
                </button>
                {showSignOut && (
                  <div className="absolute right-0 top-full mt-1 py-2 w-24 bg-white rounded-md shadow-lg z-10">
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen && (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              {/* Icon when menu is open */}
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </p>
          </Link>
          <Link href="/blog">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
