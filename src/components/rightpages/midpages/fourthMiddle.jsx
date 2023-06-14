import React from "react";
export default function Director() {
  return (
    <div className="h-auto border border-sky-700 border-2 text-gray-600 text-sm rounded-b-lg">
      <div className="text-gray-700 font-semibold bg-slate-200">
        <h3>Personal Details</h3>
      </div>
      <table className="md:table-auto w-full">
        <thead>
          <tr className="flex flex -row space-x-10">
            <th>Client Name</th>
            <th>Relation</th>
            <th>Share(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="space-x-2 p-2">
            <td className="p-2">No Records found!</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
