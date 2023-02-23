import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";
import ProductPage from "./components/product";
import RootLayout from "./components/Root";
import DetaildInfo from "./components/DetaildInfo";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/Product",
        element: <ProductPage />,
      },

      {
        path: "/DetaildInfo/:id",
        element: <DetaildInfo />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
