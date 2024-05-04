import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

const Main = () => {
  return (
    <div className="flex">
      <Aside />
      <section className="w-full flex-1 h-screen p-2 overflow-y-scroll edited-scroll">
        <Outlet />
      </section>
    </div>
  );
};

export default Main;
