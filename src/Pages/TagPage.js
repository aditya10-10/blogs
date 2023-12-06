import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      <h2>
        BLog Tagged <span>#{tag} {" "}</span>
      </h2>
      <Blogs />
      <Pagination />
    </>
  );
};

export default TagPage;
