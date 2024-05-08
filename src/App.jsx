import React from "react";
import Layout from "./Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Pagination from "./components/Pagination1/Pagination";
import Page2 from "./components/Page2/Page2";
import Body from "./components/Body/Body";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/pagination",
          element: <Pagination />,
        },
        {
          path: "/page2",
          element: <Page2 />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
