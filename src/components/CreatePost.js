import React, { useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState(); // 入力されたタイトルを格納するuseState
  const [postText, setPostText] = useState(); // 入力された投稿内容を格納するuseState
  const navigate = useNavigate();

  const createPost = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        title: title,
        postText: postText,
        author: {
          username: auth.currentUser.displayName, // ログインしているユーザーの名前(firebaseが用意しているプロパティ)
          id: auth.currentUser.uid, // ログインしているユーザーのid
        },
      });
      navigate("/");
    } catch (e) {
      console.log("データベースへの保存中にエラーが発生しました。", e);
    }
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事投稿</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
