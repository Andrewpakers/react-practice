import { useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';

/**
 * 
    <div hidden id="user-name"></div>
    <button hidden id="sign-out">
        Sign-out
    </button>
    <button id="sign-in" >
          Sign-in
    </button>
 * 
 */
// auth functions
async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(getAuth(), provider);
    } catch (error) {
        console.log(error)
    }

}
function signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
}
// Returns the signed-in user's display name.
function getUserName() {
    return getAuth().currentUser.displayName;
  }
  
  // Returns true if a user is signed-in.
  function isUserSignedIn() {
    return !!getAuth().currentUser;
}

function SignIn({ isSignedIn }) {
    if (isSignedIn) {
        return (
            <div className="profile">
                <span className="username">{getUserName()}</span>
                <button type="button" onClick={signOutUser}>Sign Out</button>
            </div>
        );
    }
    return (
        <div className="profile">
            <button type="button" onClick={signIn}>Sign in</button>
        </div>
    );
}

export default function Profile() {
    const [isSignedIn, setIsSignedIn] = useState(isUserSignedIn());
    onAuthStateChanged(getAuth(), user => {
        if (user) {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
    });
    return (
        <SignIn isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
    );
}