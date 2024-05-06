import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Addproduct = () => {
  const [isloading, setisloading] = useState(false);
  const [desc, setDesc] = useState("");
  const descPort = (e) => {
    setDesc(e.target.value);
  };

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: "",
    category: "",
    price: 0,
    adress: "",
    descriptions: "",
    shortly: "",
    countProduct: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5588/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setisloading(true);
      const data = await response.json();
      setisloading(false);
      console.log(data);
      const paramString = encodeURIComponent(JSON.stringify(response));
      navigate(`/?data=${paramString}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const categories = ["texnika", "telefon", "notebook"];
  return (
    <div>
      <header className="flex w-full items-center justify-between">
        <h2 className="text-xl font-bold">Create new product</h2>
        <Link
          to={"/"}
          className="flex items-center text-white bg-black py-1 px-3 rounded"
        >
          <i className="bx bx-caret-left text-xl mr-1"></i> cancle creating
        </Link>
      </header>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-3 my-5 inline-block"
      >
        <div className="w-full bg-white p-5">
          <h3 className="text-lg font-bold mb-2">Fill all the fields</h3>
          <div className=" space-y-1">
            <p className="text-sm">name of the product*</p>
            <input
              type="text"
              placeholder="example: aser aspire"
              className=" bg-base p-3 rounded outline-none w-base"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <p className="text-sm">category*</p>
            <select
              className=" bg-base p-3 rounded outline-none w-norm"
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="w-full bg-white p-5">
          <h3 className="text-lg font-bold mb-2">Photo</h3>
          <div className=" space-y-1">
            <p className="text-sm">
              the photos which you enter will be the baner of the product*
            </p>
            <div className=" w-base h-72 grid grid-cols-3 grid-rows-2 gap-2">
              <input
                type="file"
                placeholder="example: aser aspire"
                className="bg-base "
              />
              <input
                type="file"
                placeholder="example: aser aspire"
                className="bg-base "
              />
              <input
                type="file"
                placeholder="example: aser aspire"
                className="bg-base "
              />
              <input
                type="file"
                placeholder="example: aser aspire"
                className="bg-base "
              />
              <input
                type="file"
                placeholder="example: aser aspire"
                className="bg-base "
              />
              <input
                type="file"
                placeholder="example: aser aspire"
                className="bg-base "
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-5">
          <div className=" space-y-1">
            <p className="text-sm">description*</p>
            <textarea
              className="resize-none bg-base w-base h-60 outline-none p-3 rounded"
              placeholder="My product is..."
              minLength={40}
              maxLength={3000}
              required
              name="descriptions"
              value={formData.descriptions}
              onChange={handleChange}
            ></textarea>
            <div className="flex justify-between w-base">
              <p className="text-sm">
                your description should be more then 40 symbols*
              </p>
              <p className="text-sm">{desc.length}/3000</p>
            </div>
            <br />
            <p className="text-sm">shortly about product*</p>
            <input
              type="text"
              placeholder="shortly..."
              className=" bg-base p-3 rounded outline-none w-base"
              required
              name="shortly"
              value={formData.shortly}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full bg-white p-5">
          <div className=" space-y-1">
            <p className="text-sm">adress*</p>
            <input
              type="text"
              placeholder="andijan"
              className=" bg-base p-3 rounded outline-none w-norm"
              required
              name="adress"
              value={formData.adress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full bg-white p-5">
          <div className=" space-y-1">
            <p className="text-sm">prise of the product*</p>
            <div className="space-x-2">
              <input
                type="number"
                placeholder="120"
                className=" bg-base p-3 rounded outline-none w-norm"
                required
                name="price"
                value={formData.price}
                onChange={handleChange}
              />{" "}
              <p className="inline-block">$ dollar</p>
            </div>
            <p className="text-sm">number of the product*</p>
            <div className="space-x-2">
              <input
                type="number"
                placeholder="1"
                className=" bg-base p-3 rounded outline-none w-norm"
                required
                name="countProduct"
                value={formData.countProduct}
                onChange={handleChange}
              />{" "}
              <p className="inline-block">default 1</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-5 space-x-4">
          <button className="py-2 px-5 rounded bg-black text-white">
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
      </form>
    </div>
  );
};

export default Addproduct;
