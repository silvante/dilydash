import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [isloading, setisloading] = useState(false);
  return (
    <div>
      <header className="flex w-full items-center justify-between">
        <h2 className="text-xl font-bold">Create new category</h2>
        <Link
          to={"/"}
          className="flex items-center text-white bg-black py-1 px-3 rounded"
        >
          <i className="bx bx-caret-left text-xl mr-1"></i> cancle creating
        </Link>
      </header>
      <form className="w-full space-y-3 my-5 inline-block">
        <div className="w-full bg-white p-5">
          <h3 className="text-lg font-bold mb-2">Fill all the fields</h3>
          <div className=" space-y-1">
            <p className="text-sm">title of the category*</p>
            <input
              type="text"
              placeholder="example: Laptop"
              className=" bg-base p-3 rounded outline-none w-base !mb-2"
              required
              name="name"
            />
            <p className="text-sm">icon of the category*</p>
            <div className=" space-y-2">
              <label
                htmlFor="category_icon"
                className="bg-black text-white rounded py-2 px-4 inline-block cursor-pointer"
              >
                Upload icon for category
              </label>
              <input
                type="file"
                accept="image.png image.svg image.jpg"
                id="category_icon"
                className="hidden"
                required
              />
              <div className="bg-base w-48 h-48 rounded flex justify-center items-center">
                <i className="bx bx-camera text-4xl text-gray-500"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-5">
          <button
            type="reset"
            className="py-2 px-5 rounded bg-black text-white mr-3"
          >
            Reset all...
          </button>
          <button
            className={`py-2 px-5 rounded bg-greeny text-white ${
              isloading ? "opacity-50" : "opacity-100"
            }`}
            // onClick={navigate("/")}
            type="submit"
          >
            {isloading ? "publishing..." : "Submit and public"}
          </button>
        </div>
        <p className="text-sm ">
          if you pass the publish the category will added to properties of
          product
        </p>
      </form>
    </div>
  );
};

export default AddCategory;
