import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "./layouts/Main";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        <Route path="/" index element={<Dashboard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
