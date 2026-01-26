import React from "react";
import Marquee from "./marqee";

export default function Services() {
  return (
    <div>
      <div className="flex flex-col py-10">
        <p className="text-2xl mx-auto py-10">
          Happy clients. Successful campaigns. And the most profitable media
          buys around.
        </p>
        <div className="grid grid-cols-4 text-center gap-4 py-8">
          {[
            {
              heading: "500+",
              subheading: "Active Campaigns",
              description:
                "Media buying campaigns optimized and running across all platforms.",
              color: "#9C27B0",
            },
            {
              heading: "35%",
              subheading: "Average ROI Increase",
              description:
                "Boost in return on ad spend through intelligent optimization.",
              color: "#39927B0",
            },
            {
              heading: "2.5M+",
              subheading: "Ad Impressions",
              description:
                "Delivered monthly with precision targeting and performance tracking.",
              color: "#9C27B0",
            },
            {
              heading: "$50M+",
              subheading: "Ad Spend Managed",
              description:
                "In media budgets optimized for maximum client results.",
              color: "#9C27B0",
            },
          ].map((item) => (
            <div
              key={item.heading}
              className="flex flex-col items-center mx-auto w-fit text-white"
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
