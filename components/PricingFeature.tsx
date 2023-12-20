import React from "react";

type Props = { children: React.ReactNode };

const PricingFeature: React.FC<Props> = (props) => (
  <li className="flex space-x-3">
    <svg
      className="flex-shrink-0 h-5 w-5 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-sm text-gray-500">{props.children}</span>
  </li>
);

export default PricingFeature;
