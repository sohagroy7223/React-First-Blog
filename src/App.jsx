import { Suspense, useState } from "react";
import "./App.css";
import Blogs from "./assets/components/Blogs/blogs";
import Navbar from "./assets/components/NavBar/Navbar";

function App() {
  const [bookMark, setBookMark] = useState([]);

  const handleBookMarked = (blog) => {
    // console.log(blog);
    setBookMark([...bookMark, blog]);
  };

  console.log(bookMark);

  return (
    <>
      <Suspense fallback={<h3>loading page...</h3>}>
        <Navbar></Navbar>

        <div className="main-container flex justify-between text-center text-black font-medium gap-2 bg-gray-200 border-2 w-11/12 mx-auto">
          <div className="left-side w-70% mx-auto ">
            <Blogs handleBookMarked={handleBookMarked}></Blogs>
          </div>
          <div className="right-side w-96 bg-gray-400  ">
            <h2 className="text-2xl font-medium p-2">reading time: 0</h2>
            <h2 className="text-2xl font-medium p-2">bookmarked count:0</h2>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default App;
