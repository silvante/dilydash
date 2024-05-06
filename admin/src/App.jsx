import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "./layouts/Main";
import Dashboard from "./pages/Dashboard";
import Addproduct from "./pages/Addproduct";
import AddCategory from "./pages/AddCategory";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        <Route path="/" index element={<Dashboard />} />
        <Route path="/add" element={<Addproduct />} />
        <Route path="/add-category" element={<AddCategory />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
