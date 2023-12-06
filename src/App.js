import "./App.css";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage"
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

function App() {
    // fetchData from AppContext
  const { fetchData } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), tag);
    }

    if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), null, category);
    } else {
      fetchData(Number(page));
    }

    fetchData();
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:blogId" element={<BlogPage />} />
      <Route path="tags/:tag" element={<TagPage />} />
      <Route path="categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
