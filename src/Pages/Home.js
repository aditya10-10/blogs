import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </>
  );
};

export default Home;
