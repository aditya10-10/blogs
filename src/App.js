import "./App.css";
import Header from "./components/Header";
// import Content from "./components/Content";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Pagination from "./components/Pagination";

function App() {
  const { fetchData } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
