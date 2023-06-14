import Actions from "./leftpages/actions";
import ScrollButtons from "./leftpages/scrollbtns";
import React from "react";

export default function Left() {
    return (
      <div className="flex flex-col bg-null w-1/4 justify-between">
        <ScrollButtons/>
        <Actions/>
      </div>
    )
  }
  