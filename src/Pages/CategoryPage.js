import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useNavigate, useLocation } from "react-router-dom";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      <h2>
        BLog on <span>#{category}</span>
      </h2>
      <Blogs />
      <Pagination />
    </>
  );
};

export default CategoryPage;
