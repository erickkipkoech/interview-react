import { Outlet } from "react-router-dom";
import Bottom from "./rightpages/bottom";
import Linkk from "./rightpages/links";
import FirstMiddle from "./rightpages/midpages/firstMiddle";
import Top from "./rightpages/top";
import React from "react";

export default function Right() {
  return (
    <div className="flex min-h-screen flex-col bg-sky-200 w-3/4 p-4">
      <Top />
      <Linkk />
      <Outlet />
      <Bottom />
    </div>
  );
}
