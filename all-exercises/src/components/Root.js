import { Outlet } from "react-router-dom";
import MainNevigation from "./MainNevigation";

//outlet : An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

const RootLayout = () => {
  return (
    <>
      <MainNevigation />
      <Outlet />
    </>
  );
};
export default RootLayout;
