import { createContext, useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";

// step 1: create
export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // step 2: data filling functions

  async function fetchData(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      const res = await fetch(url);
      const output = await res.json();
      console.log(output);
      setPage(output.page);
      setPosts(output.posts);
      setTotalPages(output.totalPages);
      setLoading(false);
    } catch (err) {
      console.log("eeror in error: " + err);
      setPage();
      setPosts();
      setTotalPages();
    }
  }


  function handlePageChange(page) {
    setPage(page);
    fetchData(page);
  }

  const value = {
    posts,
    setPosts,
    page,
    setPage,
    loading,
    setLoading,
    totalPages,
    setTotalPages,
    fetchData,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
