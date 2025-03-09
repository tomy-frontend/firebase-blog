import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Homeだよ!</h2>
      <Link to="/logout">ログアウト</Link>
    </>
  );
};

export default Home;
