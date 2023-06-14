import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import FirstMiddle from "./midpages/firstMiddle";
import Address from "./midpages/secondMiddle";
import Offers from "./midpages/thirdMiddle";
import Director from "./midpages/fourthMiddle";

export default function Linkk() {
  return (
    <div className="h-auto top-0 flex flex-col font-semibold  pt-2">
      <Router>
        <section className="flex flex-row">
          <Link
            className="border p-2 bg-blue-700 rounded-tl-md border-slate-500"
            to="/corporate"
          >
            Corporate
          </Link>
          <Link
            className="border p-2 bg-blue-700  border-slate-500"
            to="/address"
          >
            Address
          </Link>
          <Link
            className="border p-2 bg-blue-700  border-slate-500"
            to="/offers"
          >
            Special Offers
          </Link>
          <Link
            className="border p-2 bg-blue-700 rounded-tr-md border-slate-500 "
            to="/director_details"
          >
            Director's Details
          </Link>
        </section>
        <Routes>
          <Route path="/corporate" element={<FirstMiddle />} />
          <Route path="/address" element={<Address />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/director_details" element={<Director />} />
        </Routes>
      </Router>
    </div>
  );
}
