import { createContext, useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

// step 1: create
export const AppContext = createContext();
//  yeha maine export kiya file ko or index.js me use kiya taki muje barbar props na bhejana pade wahi lo jiss jagah muje jo jo chahiye wahi le uskko to improve run time

export function AppContextProvider({ children }) {
  // for Loading state
  const [loading, setLoading] = useState(false);
  // to get and set Post using state 
  const [posts, setPosts] = useState([]);
  // for getting pages from api
  const [page, setPage] = useState(1);
  // for getting total no of pages exists in api and show then in footer section
  const [totalPages, setTotalPages] = useState(null);
  // use to navigate between file paths using routes
  const navigation = useNavigate();

  // step 2: data filling functions get all required data from app.js by passing parameter
  async function fetchData(page = 1, tag = null, category) {
// set state activate the loading 
    setLoading(true);
    // get url and query from App.js
    let url = `${baseUrl}?page=${page}`;
    // if im getting arguments as tag then this while excuted
    if (tag) url += `&tag=${tag}`;
        // if im getting arguments as category then this while excuted

    if (category) url += `&category=${category}`;
// fetching data from api as per my url
    try {
      const res = await fetch(url);
      const output = await res.json();
      console.log(output);
      // setting page count
      setPage(output.page);
      // setting post
      setPosts(output.posts);
      // setting total pages
      setTotalPages(output.totalPages);
      setLoading(false);
    } catch (err) {
      console.log("error in error: " + err);
      // if there is some error then reset to original state
      setPage();
      setPosts();
      setTotalPages();
    }
  }

  function handlePageChange(page) {
    // passing url to page where i want to go
    navigation({ search: `?page=${page}` });
    // setPage to page no changing page no
    setPage(page);
  }

  // creating object from all value that had been used in my above code and sending all of them to all folder
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
// return all child objects to parent App.js
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
