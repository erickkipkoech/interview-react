import React from "react";
export default function Address() {
  return (
    <div className="h-auto border border-sky-700 border-2 rounded-b-lg">
      <div className="text-gray-700 font-semibold bg-slate-200">
        <h3>Mailing Address</h3>
      </div>
      <form className="flex flex-col w-full p-3 text-sm" action="">
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="residentialAddr"
          >
            Residential Address
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="residentialAddr"
            name="residentialAddr"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="businessAddr"
          >
            Business Address
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="businessAddr"
            name="businessAddr"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="officAddr"
          >
            Office Address
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="officAddr"
            name="officAddr"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="mailingAddr"
          >
            Mailing Address
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mailingAddr"
            name="mailingAddr"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="homeCountryAddr"
          >
            Home Country Address
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="homeCountryAddr"
            name="homeCountryAddr"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label className="font-bold text-sky-700 pr-2 w-auto" htmlFor="Addr2">
            Address 2
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Addr2"
            name="Addr2"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/6"
              htmlFor="region"
            >
              Region
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="region"
              id="region"
            />
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="street"
            >
              Street
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="street"
              id="street"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/6"
              htmlFor="country"
            >
              Country
            </label>
            <select
              className="shadow border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="country"
              id="country"
            >
              <option value="">Tanzania</option>
            </select>
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="zipcode"
            >
              Zip Code
            </label>
            <input
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="zipcode"
              id="zipcode"
              type="text"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/6"
              htmlFor="region"
            >
              Region
            </label>
            <select
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="region"
              id="region"
            >
              <option value="Arusha">Arusha</option>
            </select>
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="phone"
            >
              Phone(Home)
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              id="phone"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label className="font-bold text-sky-700 pr-2 w-1/6" htmlFor="ward">
              Ward
            </label>
            <select
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="ward"
              id="ward"
            >
              <option value="BOMAMBUZI">BOMAMBUZI</option>
            </select>
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="district"
            >
              District
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="district"
              id="district"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/6"
              htmlFor="phone"
            >
              Phone (Work)
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              id="phone"
            />
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="mobile"
            >
              Mobile
            </label>
            <input
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="mobile"
              id="mobile"
              input="number"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/6"
              htmlFor="faxNo"
            >
              Fax No
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="faxNo"
              id="faxNo"
            />
          </td>
          <td className="w-1/2 flex flex-row">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/4"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow border rounded w-3/4 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
            />
          </td>
        </tr>
        <tr className="flex w-full pb-2">
          <td className="w-1/2 flex flex-row pr-4">
            {" "}
            <label
              className="font-bold text-sky-700 pr-2 w-1/6"
              htmlFor="landmark"
            >
              Land Mark
            </label>
            <input
              className="shadow appearance-none border rounded w-5/6 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="faxNo"
              id="faxNo"
            />
          </td>
        </tr>
      </form>
    </div>
  );
}
