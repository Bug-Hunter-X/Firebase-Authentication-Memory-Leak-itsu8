const unsub = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  const uid = user.uid;
  console.log(uid);
} else {
  // User is signed out
  // ...
}}) 
unsub(); // this line is important to prevent memory leak

//another case
async function fetchUser() {
  const user = await getAuth().currentUser;

  if (user) {
    // User is signed in
  } else {
    // No user is signed in
  }
}