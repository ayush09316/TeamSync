import { PricingPlan } from "@/types";
import React from "react";

const PricingCard: React.FC<PricingPlan> = ({
  name,
  price,
  desc,
  features,
  buttonText,
  isPopular,
}) => {
  return (
    <div
      className={`p-6 min-w-[300px]  rounded-lg ${
        isPopular ? "border border-green-400 bg-dark-300" : " bg-dark-400"
      }`}
    >
      {isPopular && (
        <div className="mb-4 text-sm font-bold text-green-400">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-10">{name}</h3>
      <p className="text-slate-400">
        <span className={`mt-2 text-2xl font-semibold text-white`}>
          {price}
        </span>{" "}
        /month
      </p>
      <button
        className={`mt-6 w-full font-semibold py-3 px-4 ${isPopular ? "bg-green-400 hover:bg-green-500 text-black" : "bg-dark-200 hover:bg-dark-100 text-white"}  rounded-full `}
      >
        {buttonText}
      </button>

      <p className={`mt-4  text-[13px] text-slate-300`}>{desc}</p>
      <hr className="my-6 border-gray-600" />
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
