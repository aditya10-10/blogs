import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BLogsDetails from "./BLogsDetails";

const Blogs = () => {
  // consujming data for context
  const { posts, loading } = useContext(AppContext);
  console.log(posts);
  //   console.log(posts);
  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="">
          <p className="">No Post Found</p>
        </div>
      ) : (
        posts.map((post) => <BLogsDetails post={post} />)
      )}
    </div>
  );
};

export default Blogs;
