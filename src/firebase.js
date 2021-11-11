import app, { db } from "./utils/firebaseConfig";

const auth = app.auth();

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("Successfully Logged in!");
  } catch (err) {
    console.error("User not found: " + err);
  }
};