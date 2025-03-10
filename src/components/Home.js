import React, { useEffect, useState } from "react";
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);

  // firebaseからデータを取得する(初回マウント時のみのため[])
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));

      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getPosts();
  }, []);

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
              <button>削除</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Home;
