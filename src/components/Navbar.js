import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FaHome />
        ホーム
      </Link>

      {!isAuth ? (
        <Link to="/login">
          <CiLogin />
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <MdOutlineArticle />
            記事投稿
          </Link>

          <Link to="/logout">
            <CiLogout />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
