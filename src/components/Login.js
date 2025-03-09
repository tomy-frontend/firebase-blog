import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginInWithGoogle = () => {
    // Googleでログイン firebaseのドキュメント参照
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true); // ローカルストレージにログイン状態を保存する
      setIsAuth(true); // ログイン状態の更新をtrueにする
      navigate("/"); // useNavigateを使用してログイン後はホーム画面に遷移する
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleで始める</button>
    </div>
  );
};

export default Login;
