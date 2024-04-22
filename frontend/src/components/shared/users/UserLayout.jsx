import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../common/Header/Header";

export default function Layout() {
  return (
    <div className=" h-screen w-screen overflow-hidden flex flex-row">
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
