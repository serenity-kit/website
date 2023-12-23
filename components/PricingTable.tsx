import { useState } from "react";
import { DisplayHeading } from "./DisplayHeading";
import PricingFeature from "./PricingFeature";

export const PricingTable = () => {
  const [billedYearly, setBilledYearly] = useState<boolean>(false);

  return (
    <>
      <div>
        <div className="sm:flex sm:flex-col sm:align-center mt-8">
          <div className="text-center">
            <DisplayHeading tag="h1">Pricing Plans</DisplayHeading>
            <p className="mt-5 text-xl text-gray-600">
              We need to charge, because we can't sell your data.
            </p>
          </div>

          <div className="relative self-center mt-6 bg-gray-200 rounded-lg p-0.5 flex sm:mt-8 shadow-inner">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setBilledYearly(false);
              }}
              className={`relative w-1/2 rounded-md py-2 text font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-dark focus:z-10 sm:w-auto sm:px-8 ${
                billedYearly
                  ? "border border-transparent"
                  : "bg-white border-gray-200 shadow"
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setBilledYearly(true);
              }}
              className={`ml-0.5 relative w-1/2 rounded-md py-2 font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-dark focus:z-10 sm:w-auto sm:px-8 ${
                billedYearly
                  ? "bg-white border-gray-200 shadow"
                  : "border border-transparent"
              }`}
            >
              Yearly billing
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Personal Free
              </h2>
              <p className="mt-4 text text-gray-700 h-11">
                Ideal to get started
              </p>
              <p className="mt-8 h-14">
                <span className="text-4xl font-semibold text-gray-900">$0</span>
              </p>
              <a
                href="#"
                style={{ visibility: "hidden" }}
                className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text font-semibold text-white text-center hover:bg-gray-900 no-underline hover:no-underline"
              >
                Download
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                <PricingFeature>Create up to 3 notes</PricingFeature>
                <PricingFeature>Collaborate with up to 3 people</PricingFeature>
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Team
              </h2>
              <p className="mt-4 text text-gray-700 h-11">
                Enable everyone in your organization to collaborate
              </p>
              <p className="mt-8 h-14">
                <span className="text-4xl font-semibold text-gray-900">
                  ${billedYearly ? "96" : "10"}
                </span>
                <span className="text font-medium text-gray-700">
                  {" "}
                  / user / {billedYearly ? "year" : "month"}
                </span>
              </p>
              {/* <button
                  onClick={(event) => {
                    event.preventDefault();
                    billedYearly ? openCheckout(633268) : openCheckout(633267);
                  }}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text font-semibold text-white text-center hover:bg-gray-900 no-underline hover:no-underline"
                >
                  Contact us
                </button> */}
              <a
                href="mailto:hi@serenity.re"
                className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text font-semibold text-white text-center hover:bg-gray-900 no-underline hover:no-underline"
              >
                Contact us
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                <PricingFeature>Unlimited notes</PricingFeature>
                <PricingFeature>
                  Collaborate with up to 100 people
                </PricingFeature>
                <PricingFeature>Email support</PricingFeature>
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Enterprise
              </h2>
              <p className="mt-4 text text-gray-700 h-11">
                Solutions and controls custom to your requirements
              </p>
              <p className="mt-8 h-14"></p>
              <a
                href="mailto:hi@serenity.re"
                className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text font-semibold text-white text-center hover:bg-gray-900 no-underline hover:no-underline"
              >
                Contact us
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                <PricingFeature>No limits</PricingFeature>
                <PricingFeature>Cloud or on-premise hosting</PricingFeature>
                <PricingFeature>Email support</PricingFeature>
                <PricingFeature>Phone support</PricingFeature>
                <PricingFeature>Custom contract</PricingFeature>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
