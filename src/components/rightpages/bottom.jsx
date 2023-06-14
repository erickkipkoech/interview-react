import React from "react";
export default function Bottom() {
  return (
    <div className="h-auto border border-sky-700 border-2 mt-2 rounded-lg">
      <div className="text-gray-700 font-semibold bg-slate-200 rounded-t-lg">
        <h3>Behind the Scene</h3>
      </div>
      <form className="flex flex-col w-full p-3 text-sm" action="">
        <tr className="flex w-full pb-2">
          <td className="w-1/3 flex flex-row pr-4">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              name="status"
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
              <option value="">Dormant</option>
            </select>
          </td>
          <td className="w-1/3 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="openDate"
            >
              Open Date
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="openDate"
              name="openDate"
            />
          </td>
          <td className="w-1/3 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="closedDate"
            >
              Closed Date
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="closedDate"
              name="closedDate"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/3 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="createdBy"
            >
              Created By
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="createdBy"
              name="createdBy"
            />
          </td>
          <td className="w-1/3 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="modifiedBy"
            >
              Modified By
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="modifiedBy"
              name="modifiedBy"
            />
          </td>
          <td className="w-1/3 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="supervisedBy"
            >
              Supervised By
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="supervisedBy"
              name="supervisedBy"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/3 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="createdOn"
            >
              Created On
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="createdOn"
              name="createdOn"
            />
          </td>
          <td className="w-1/3 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="modifiedOn"
            >
              Modified On
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="modifiedOn"
              name="modifiedOn"
            />
          </td>
          <td className="w-1/3 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="supervisedOn"
            >
              Supervised On
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="supervisedOn"
              name="supervisedOn"
            />
          </td>
        </tr>
      </form>
    </div>
  );
}
