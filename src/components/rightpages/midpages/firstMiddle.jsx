import React from "react";
export default function FirstMiddle() {
  return (
    <div className="h-auto border border-sky-700 border-2 rounded-b-lg">
      <div className="text-gray-700 font-semibold bg-slate-200">
        <h3>Corporate Details</h3>
      </div>
      <form className="flex flex-col w-full p-3 text-sm" action="">
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            name="companyName"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 h-1/2 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="lineOfBusiness"
            >
              Line of Business
            </label>
            <select
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lineOfBusiness"
              name="lineOfBusiness"
            >
              <option value="Proprietary">Proprietary</option>
            </select>
          </td>
          <td className="w-1/2 flex flex-row">
            <label
              className="font-bold text-sky-700 pr-1 w-1/5"
              htmlFor="lineOfBusiness"
            >
              Line of Business More Info
            </label>
            <textarea
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lineOfBusinessInfo"
              name="lineOfBusinessInfo"
            ></textarea>
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="natureOfBusiness"
          >
            Nature of Business
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="natureOfBusiness"
            name="natureOfBusiness"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 h-1/2 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="IdentificationType"
            >
              Identification Type
            </label>
            <select
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="IdentificationType"
              name="IdentificationType"
            >
              <option value="">--Select--</option>
            </select>
          </td>
          <td className="w-1/2 flex flex-row"></td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 h-1/2 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="regNo"
            >
              Registration No
            </label>
            <input
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="regNo"
              name="regNo"
              type="text"
            />
          </td>
          <td className="w-1/2 flex flex-row">
            <label
              className="font-bold text-sky-700 pr-1 w-1/5"
              htmlFor="regDate"
            >
              Date of Registration
            </label>
            <input
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="regDate"
              name="regDate"
              type="date"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 h-1/2 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="regAt"
            >
              Registered At
            </label>
            <input
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="regAt"
              name="regAt"
              type="text"
            />
          </td>
          <td className="w-1/2 flex flex-row">
            <label
              className="font-bold text-sky-700 pr-1 w-1/5"
              htmlFor="regOffice"
            >
              Registered Office
            </label>
            <input
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="regOffice"
              name="regOffice"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 h-1/2 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-auto"
              htmlFor="startYear"
            >
              Business Started Year
            </label>
            <input
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startYear"
              name="startYear"
              type="number"
            />
          </td>
          <td className="w-1/2 flex flex-row">
            <label
              className="font-bold text-sky-700 pr-1 w-1/5"
              htmlFor="members"
            >
              Number of Employees/ Members
            </label>
            <input
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="members"
              name="members"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="comments"
          >
            Comments
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comments"
            name="comments"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="website"
          >
            Company Website
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="website"
            name="website"
          />
        </tr>
        <tr className="flex w-full pb-2">
          {" "}
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="openedBy"
          >
            Opened By
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="openedBy"
            id="openedBy"
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
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 h-1/2 flex flex-row pr-4">
            <label
              className="font-bold text-sky-700 pr-2 w-1/5"
              htmlFor="relManager"
            >
              Relationship Manager
            </label>
            <input
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="relManager"
              name="relManager"
              type="text"
            />
          </td>
          <td className="w-1/2 flex flex-row">
            <label
              className="font-bold text-sky-700 pr-1 w-1/5"
              htmlFor="openedOn"
            >
              Opened On
            </label>
            <input
              className="shadow border rounded w-4/5 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="openedOn"
              name="openedOn"
              type="date"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-24"
            htmlFor="relManager"
          >
            Relationship Manager
          </label>
          <input
            className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="relManager"
            name="relManager"
            type="text"
          />
        </tr>
        <tr className="flex w-1/2 pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-24"
            htmlFor="tinNo"
          >
            Tin No
          </label>
          <input
            className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tinNo"
            name="tinNo"
            type="number"
          />
        </tr>
      </form>
    </div>
  );
}
