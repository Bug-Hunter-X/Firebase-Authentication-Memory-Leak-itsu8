import { getAuth, onAuthStateChanged } from "firebase/auth";

// Correct way to handle onAuthStateChanged
const unsub = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in
} else {
  // User is signed out
}
});

//Clean up the listener when it's no longer needed, such as when a component unmounts
const cleanup = () => {
unsub();
}

//another case
async function fetchUser() {
  try {
    const user = await getAuth().currentUser;
    if (user) {
    } else {
    }
  } catch(error) {
    console.error("Error fetching user:", error);
  }
}
//Ensure the function is properly cleaned up.
//For example, you can call cleanup in a component's cleanup or unmount function.