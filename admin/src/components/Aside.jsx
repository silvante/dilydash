import React from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <div className=" w-64 h-screen bg-gray-950 p-2 text-white">
      <a
        href="https://dily.uz/"
        target="_blanck"
        className="text-3xl font hover:underline"
      >
        Dily.uz
      </a>
      <div className="mt-3 space-y-2">
        <p>
          Sections <i className="bx bx-chevron-right"></i>
        </p>
        <div className="dashNav">
          <NavLink
            to={"/"}
            className="flex items-center py-1 px-2 hover:bg-white/5"
          >
            <i className="bx bxs-dashboard text-2xl mr-1"></i> Dashboard
          </NavLink>
          <NavLink
            to={"/administration"}
            className="flex items-center py-1 px-2 hover:bg-white/5"
          >
            <i className="bx bxs-user-detail text-2xl mr-1"></i> Administration
          </NavLink>
          <NavLink
            to={"/security"}
            className="flex items-center py-1 px-2 hover:bg-white/5"
          >
            <i className="bx bx-shield-alt-2 text-2xl mr-1"></i> Security
          </NavLink>
          <NavLink
            to={"/reports"}
            className="flex items-center py-1 px-2 hover:bg-white/5"
          >
            <i className="bx bxs-report text-2xl mr-1"></i> reports
          </NavLink>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <p>
          for admins <i className="bx bx-chevron-right"></i>
        </p>
        <div className="dashNav">
          <NavLink
            to={"/chat"}
            className="flex items-center py-1 px-2 hover:bg-white/5"
          >
            <i className="bx bxs-chat text-2xl mr-1"></i> admin's chat
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Aside;
