import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header className="flex w-full items-center justify-between">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <div className="space-x-3 flex">
          <Link
            to={"/add"}
            className="flex items-center text-white bg-black py-1 px-3 rounded"
          >
            <i className="bx bx-layer-plus text-xl mr-1"></i>add an new product
          </Link>
          <Link
            to={"/add-category"}
            className="flex items-center text-white bg-black py-1 px-3 rounded"
          >
            <i className="bx bx-add-to-queue text-xl mr-1 hover:bx-tada" ></i>new category
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
