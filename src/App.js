import React, { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import "simplebar/dist/simplebar.min.css";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import Home from "components/Home";
import Tasks from "components/Tasks";
import Drawer from "@material-ui/core/Drawer";

const GetPage = (pageIndex) => {
  switch (pageIndex) {
    case 0:
      return <Home></Home>;
    case 1:
      return <Tasks></Tasks>;
  }
};

const App = () => {
  const [page, setPage] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-blue-700 flex flex-col">
      <Navbar toggleMenu={() => setIsMenuOpened(true)}></Navbar>
      <div className="flex flex-grow">
        <div className="w-auto">
          <Drawer anchor="left" open={isMenuOpened} onClose={() => setIsMenuOpened(false)}>
            <div className="h-full bg-blue-700 py-4">
              <Menu setPage={setPage} page={page} closeMenu={() => setIsMenuOpened(false)}></Menu>
            </div>
          </Drawer>
          <div className="hidden md:block">
            <Menu setPage={setPage} page={page}></Menu>
          </div>
        </div>
        <div className="flex-grow pl-4 md:pl-0 pr-4 pb-4">
          <div className="w-full h-full bg-blue-800 rounded-2xl">{GetPage(page)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
