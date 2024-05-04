import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header className="flex w-full items-center justify-between">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <Link
          to={"/add"}
          className="flex items-center text-white bg-black py-1 px-3 rounded"
        >
          <i className="bx bx-layer-plus text-xl mr-1"></i>add an new product
        </Link>
      </header>
    </div>
  );
};

export default Dashboard;
