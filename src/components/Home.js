import React, { useEffect, useState } from "react";
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);

  // firebaseからデータを取得する(初回マウント時のみのため[])
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(collection(db, "posts"));

        setPostList(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      } catch (e) {
        console.log("データ取得中にエラーが発生しました。", e);
      }
    };

    getPosts();
  }, []);

  // 削除処理
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/"; // リダイレクト
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <article key={post.id} className="postContents">
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              <p>{post.postText}</p>
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Home;
