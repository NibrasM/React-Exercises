import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Child from "./components/Child";
import Parent from "./components/Parent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "*",
      element: <>Not Found</>,
    },
    {
      path: "/parent",
      children: [
        {
          path: "",
          element: <Parent></Parent>,
        },
        {
          path: "child",
          element: <Child></Child>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
