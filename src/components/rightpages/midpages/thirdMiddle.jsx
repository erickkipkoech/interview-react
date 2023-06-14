import React from "react";
export default function Offers() {
  return (
    <div className="h-auto border border-sky-700 border-2 rounded-b-lg">
      <div className="text-gray-700 font-semibold bg-slate-200">
        <h3>Special Offers</h3>
      </div>
      <form className="flex flex-col w-full p-3 text-sm" action="">
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="greetings"
          >
            Can Send Greetings
          </label>
          <input
            type="checkbox"
            className="rounded-md w-8 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="greetings"
            name="greetings"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="associateOffer"
          >
            Can Send a Special Associate Offer
          </label>
          <input
            type="checkbox"
            className=" rounded-md w-8 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="associateOffer"
            name="associateOffer"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="ourOffer"
          >
            Can Send Our Special Offer
          </label>
          <input
            type="checkbox"
            className="rounded-md w-8 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ourOffer"
            name="ourOffer"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="statementOnline"
          >
            Statement Online
          </label>
          <input
            type="checkbox"
            className="rounded-md w-8 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="statementOnline"
            name="statementOnline"
          />
        </tr>
        <tr className="flex w-full pb-2">
          <label
            className="font-bold text-sky-700 pr-2 w-auto"
            htmlFor="mobileAlert"
          >
            Mobile Alert
          </label>
          <input
            type="checkbox"
            className="rounded-md w-8 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobileAlert"
            name="mobileAlert"
          />
        </tr>
      </form>
    </div>
  );
}
