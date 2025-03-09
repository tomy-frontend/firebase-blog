// Cloud Firestoreのドキュメントを参照しつつ設定
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuhIUGz5NctBTbJ3_X59IGj58QX4HMXvQ",
  authDomain: "fir-blog-6b489.firebaseapp.com",
  projectId: "fir-blog-6b489",
  storageBucket: "fir-blog-6b489.firebasestorage.app",
  messagingSenderId: "759707204349",
  appId: "1:759707204349:web:605c3aad2cb4a63d65dc94",
  measurementId: "G-4PYCRV95XY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// exportしてどこでも使用可能にする
export { provider, auth, db };
