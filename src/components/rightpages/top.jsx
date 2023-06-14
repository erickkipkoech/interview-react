import React from "react";
export default function Top() {
  return (
    <div className="h-auto ">
      <form className="flex flex-col w-full  text-sm" action="">
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/6"
              htmlFor="clientId"
            >
              Client ID
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="clientId"
              id="clientId"
            />
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="clientType"
            >
              Client Type
            </label>
            <select
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="clientType"
              id="clientType"
            >
              <option value="Enterprises">Enterprises</option>
            </select>
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 w-1/6 pr-2"
              htmlFor="segmentType"
            >
              Segment Type
            </label>
            <select
              className="shadow border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="segmentType"
              id="segmentType"
            >
              <option value="Enterprises">Corporate</option>
            </select>
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-1 w-1/4"
              htmlFor="subSegmentType"
            >
              sub-Segment Type
            </label>
            <select
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="subSegmentType"
              id="subSegmentType"
            >
              <option value="Enterprises">Public Limited Company</option>
            </select>
          </td>
        </tr>

        <tr className="flex w-full pb-2">
          <td className="w-1/2 h-1/3 flex flex-row pr-3">
            {" "}
            <label className="font-bold text-sky-700 pr-1 w-1/5" htmlFor="">
              Application ID
            </label>
            <input
              className="shadow appearance-none border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="apllicationId"
              id="applicationId"
            />
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="classClassification"
            >
              Class Classification
            </label>
            <input
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="classClassification"
              id="classClassification"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label className="font-bold text-sky-700 pr-1 w-1/6" htmlFor="">
              Base ID
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="baseId"
              id="baseId"
            />
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="classClassification"
            >
              Client Name
            </label>
            <input
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="clientName"
              id="clientName"
            />
          </td>
        </tr>
      </form>
    </div>
  );
}
