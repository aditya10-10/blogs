import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/AppContext";
import BLogsDetails from "../components/BLogsDetails";

const BlogPage = () => {
  const { setLoading, loading } = useContext(AppContext);

  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetahRelated() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const output = await res.json();
      console.log(output);
      setBlog(output.blog);
      setRelatedBlogs(output.relatedBlogs);
    } catch (err) {
      console.log("error in error: " + err);
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetahRelated();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>

      {loading ? (
        <Spinner />
      ) : blog ? (
        <div>
          <BLogsDetails post={blog} />
          <h2>Related Blogs</h2>
          {relatedblogs.map((blog) => (
            <BLogsDetails post={blog} />
          ))}
        </div>
      ) : (
        <div>No blog found</div>
      )}
    </div>
  );
};

export default BlogPage;
