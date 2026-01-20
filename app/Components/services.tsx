import React from "react";
import Marquee from "./marqee";

export default function Services() {
  return (
    <div>
      <div className="flex flex-col py-20">
        <p className="text-2xl mx-auto pb-8">
          Happy customers. Happier clients. And the least-stressed teams around.
        </p>
        <div className="grid grid-cols-4 text-center gap-4 py-8">
          {[
            {
              heading: "16K+",
              subheading: "BUSINESS",
              description:
                "Keeping projects on-track, more profitable and less-nightmarish.",
              color: "#9C27B0",
            },
            {
              heading: "22%",
              subheading: "Billing utilization boost",
              description: "That’s more billable hours, fewer mystery gaps.",
              color: "#39927B0",
            },
            {
              heading: "17k+",
              subheading: "New projects",
              description:
                "Created each week (then smashed out of ballparks, probably).",
              color: "#9C27B0",
            },
            {
              heading: "40M+",
              subheading: "Billable hours",
              description: "Logged in 2024. That’s 4,566 years of ka-chings.",
              color: "#9C27B0",
            },
          ].map((item) => (
            <div
              key={item.heading}
              className="flex flex-col items-center mx-auto w-fit text-black"
            >
              <h2 className={`text-5xl font-bold text-[${item.color}] mb-2`}>
                {item.heading}
              </h2>
              <p className="text-lg font-medium">{item.subheading}</p>
              <span className="text-base font-medium">{item.description}</span>
            </div>
          ))}
        </div>
        <Marquee />
      </div>
    </div>
  );
}
