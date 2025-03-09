import { signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    // Googleでログアウト firebaseのドキュメント参照
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false); // ログイン状態の更新をfalseにする
      navigate("/login"); // useNavigateを使用してログアウト後はログイン画面に遷移する
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
