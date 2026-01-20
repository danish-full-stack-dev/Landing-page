"use client";
import BeforeAfterSlider from "@/app/components/beforeAfterSlider";
import Carousel from "@/app/components/carousel";
import { FAQForTrading } from "@/app/components/FAQs";
import IndustriesTeamsTabs from "@/app/components/industriesAndTeams";
import Services from "@/app/components/services";
import TeamworkCTA from "@/app/components/teamWorkCTA";
import { User, ChartNoAxesCombined, Users, Sparkles } from "lucide-react";
import React from "react";

export default function Page() {
  const slider = document.getElementById("slider");
  const before = document.getElementById("beforeLayer");

  if (slider && before) {
    slider.addEventListener("input", (e) => {
      before.style.width = `${(e.target as HTMLInputElement).value}%`;
    });
  }

  const [index, setIndex] = React.useState(1);
  return (
    <div className="bg-white/80">
      <div className="max-w-9/12 mx-auto">
        <div className=" flex flex-col">
          <div className="flex justify-end text-center flex-col items-center h-[40vh] my-auto">
            <h1 className="text-6xl font-bold my-6">
              AI-Powered Media Buying Platform{" "}
              <span className="text-[#9C27B0]">for Agencies</span>, built for
              results
            </h1>
            <p className="text-xl w-4/6 my-6">
              Our platform is the{" "}
              <span className="font-semibold">
                {" "}
                AI-powered media buying and campaign management solution
              </span>{" "}
              that helps agencies optimize ad spend, maximize ROI, and deliver
              exceptional results for clients.
            </p>
          </div>
          <div className="flex gap-3 mx-auto w-fit py-2">
            <button className="bg-[#9C27B0] underline underline-offset-2 hover:cursor-pointer text-white px-6 py-3 hover:bg-transparent rounded-full font-semibold border-2 hover:border-[#9C27B0] border-transparent hover:text-[#9C27B0] transition duration-300">
              Start Optimizing Campaigns
            </button>
            <button className="bg-white text-[#9C27B0] border-2 hover:bg-[#9C27B0] border-[#9C27B0] px-6 py-3 hover:cursor-pointer rounded-full font-semibold hover:text-white transition duration-300">
              Book a Strategy Call
            </button>
          </div>
          <div className="mx-auto w-fit">
            <p className="text-sm">
              14 DAY FREE TRIAL. NO CREDIT CARD REQUIRED
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 bg-black">
        <img
          src="/heroPic.jpeg"
          alt="hero page bg pic"
          className="h-[80dvh] object-fit w-full opacity-70 "
        />
      </div>
      <div className="max-w-9/12 mx-auto">
        <div>
          <Services />
        </div>

        <div className="mt-10 mb-20 h-[50vh] border-2 border-[#9C27B0] rounded-2xl flex justify-center items-end relative">
          <div className="absolute -top-20">
            <img src="/avatar.png" alt="bg" className="h-[30svh]" />
          </div>
          <div className="flex justify-end text-center flex-col items-center h-3/4 my-auto gap-6">
            <h2 className="text-5xl font-bold">
              Introducing AI Media Assistants
            </h2>
            <p className="text-xl w-2/3">
              Optimizing your campaigns 24/7, predicting trends, and maximizing
              performance.
            </p>

            <button className="text-[#9C27B0] border-2 border-[#9C27B0] hover:bg-[#9C27B0] px-6 py-3 rounded-full font-semibold hover:text-white hover:cursor-pointer transition duration-300">
              Meet your AI Media Assistants
            </button>
          </div>
        </div>

        <div className="my-10 flex justify-center text-center flex-col ">
          <h2 className="font-bold text-5xl w-3/4 mb-20 mx-auto">
            From wasted ad spend to record-breaking ROI.
            <span className="text-[#9C27B0]">
              {" "}
              AI-powered media buying platform{" "}
            </span>{" "}
            that maximizes every dollar.
          </h2>
          <div className="grid grid-cols-1 grid-rows-4 grid-flow-col gap-12">
            {[
              {
                video: "/mediabuying.mp4",
                icon: User,
                heading: "Media buying campaigns that actually convert.",
                description:
                  "Manage your media buying strategy with precision analytics and real-time performance tracking.",
                bullets: [
                  "Track campaign performance across all channels",
                  "Optimize ad spend in real-time",
                  "Monitor ROI with advanced analytics dashboards",
                ],
                buttonText: "Optimize campaigns",
              },
              {
                video: "/mediabuying.mp4",
                icon: ChartNoAxesCombined,
                heading: "Maximize ROI with intelligent budget allocation.",
                description:
                  "Allocate your media buying budget smarter with AI-powered insights and predictive analytics.",
                bullets: [
                  "AI-suggested budget distributions",
                  "Predictive performance forecasting",
                  "Cost-per-acquisition optimization",
                ],
                buttonText: "Increase ROI",
              },
              {
                video: "/mediabuying.mp4",
                icon: Users,
                heading: "Collaborate seamlessly across media teams.",
                description:
                  "Keep your entire media buying team aligned with centralized campaign management and reporting.",
                bullets: [
                  "Real-time campaign collaboration",
                  "Unified reporting across platforms",
                  "Streamlined approval workflows",
                ],
                buttonText: "Improve teamwork",
              },
              {
                video: "/mediabuying.mp4",
                icon: Sparkles,
                heading: "AI-powered media buying intelligence.",
                description:
                  "Let AI analyze trends and opportunities so you can focus on strategy and client relationships.",
                bullets: [
                  "Automated audience targeting",
                  "Intelligent bid optimization",
                  "Predictive market insights",
                ],
                buttonText: "Discover AI insights",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`flex flex-row gap-10 mb-16 h-[50vh] ${
                  idx % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-7/12 overflow-hidden rounded-xl">
                  <aside>
                    <video
                      width="800"
                      height="450"
                      controls
                      className="w-full h-[50vh] object-cover"
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                  </aside>
                </div>
                <div className="flex flex-col text-start gap-4 mb-4 w-5/12">
                  <div className="flex items-start flex-col gap-2">
                    <div className="p-3 rounded-full bg-[#9C27B0] flex justify-center items-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#9C27B0]">
                      {service.heading}
                    </h3>
                    <p className="text-lg mb-2 ">{service.description}</p>
                  </div>
                  {service.bullets && (
                    <div className="pl-5">
                      {service.bullets.map((bullet, index) => (
                        <p key={index} className="mb-2 gap-2 flex items-center">
                          <span className="h-2 w-2 rounded-full bg-[#9C27B0] " />
                          {bullet}
                        </p>
                      ))}
                    </div>
                  )}
                  <button className="mt-4 hover:bg-[#9C27B0] font-bold hover:text-white hover:cursor-pointer px-6 py-3 rounded-full bg-transparent border-2 border-[#9C27B0] text-black transition w-fit">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 mb-20">
          <div className="py-14 bg-linear-to-br from-[#c173cf] via-[#9C27B0] to-[#7e218f] rounded-2xl">
            <div className="w-4/6 flex justify-between items-center ml-auto mr-10">
              <h2 className="text-4xl text-white">
                <strong>Clients questioning your AI strategy? </strong>
                <br />
                <strong>Here's we navigating AI in media buying...</strong>
              </h2>
              <button className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 hover:cursor-pointer transition">
                Read the guide
              </button>
            </div>
          </div>

          <h2 className="text-[42px] font-extrabold mx-auto w-fit my-14">
            Getting started is so easy, even a client could do it.
          </h2>
          <div className="flex gap-5">
            <div
              className={`h-[55dvh] p-5 transition-all rounded-2xl duration-500 text-white bg-[#932ba3] ${
                index === 1 ? "w-7/12 relative" : "w-5/12"
              } relative`}
              onMouseEnter={() => setIndex(1)}
            >
              <div className="w-4/5 flex gap-4 flex-col p-5">
                <h3 className="text-4xl font-bold">
                  Connect to 200+ media platforms and tools.
                </h3>

                <p className="text-lg">
                  Whatever platforms and tools you already use, integrate them
                  with our media buying platform and watch your campaigns
                  perform seamlessly together.
                </p>
                <button className="bg-transparent text-lg w-fit text-white border-2 border-white hover:bg-white hover:text-[#9C27B0] px-6 py-3 rounded-full font-semibold transition duration-300 hover:cursor-pointer">
                  View integrations
                </button>
              </div>
              {index === 1 && (
                <img
                  src="/bg.png"
                  alt="bg"
                  className="h-74 w-74 bottom-0 right-0 absolute"
                />
              )}
            </div>
            <div
              className={`h-[55dvh] p-5 transition-all duration-500 border-4 rounded-2xl border-[#9C27B0] ${
                index === 2 ? "w-7/12 relative" : "w-5/12"
              } relative`}
              onMouseEnter={() => setIndex(2)}
            >
              <div className="w-4/5 flex gap-4 flex-col p-5">
                <h3 className="text-4xl font-bold text-[#9C27B0]">
                  Connect to 200+ media platforms and tools.
                </h3>

                <p className="text-lg">
                  Whatever platforms and tools you already use, integrate them
                  with our media buying platform and watch your campaigns
                  perform seamlessly together.
                </p>
                <button className="bg-transparent text-lg w-fit text-[#9C27B0] border-2 border-[#9C27B0] hover:bg-[#9C27B0] hover:border-[#9C27B0] px-6 py-3 rounded-full font-semibold hover:text-white hover:cursor-pointer transition duration-300">
                  View integrations
                </button>
              </div>
              {index === 2 && (
                <img
                  src="/bg.png"
                  alt="bg"
                  className="h-74 w-74 bottom-0 right-0 absolute"
                />
              )}
            </div>
          </div>

          <div
            className={`h-[50dvh] p-16 rounded-2xl text-white bg-linear-to-br from-[#c173cf] via-[#9C27B0] to-[#7e218f] my-10 flex  justify-between items-center`}
          >
            <div className="w-1/2 flex gap-4 flex-col">
              <h3 className="text-4xl font-bold">
                Secure media buying. Smart optimization. Total peace of mind.
              </h3>

              <p className="text-lg">
                From campaign management and performance tracking to AI-powered
                optimization, our platform is secure by design. SOC 2 Type 2
                certified, with your client data always protected.
              </p>
              <button className="bg-transparent text-white hover:cursor-pointer hover:text-[#9C27B0] text-lg w-fit border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-[#F3E5F5] transition duration-300">
                Start your free trial
              </button>
            </div>
            <div>
              <img src="/bg.png" alt="bg" className="h-74 w-74" />
            </div>
          </div>

          <div className="my-20">
            <div className="mx-auto text-center">
              <h2 className="text-[42px]  w-3/6 font-extrabold mx-auto text-[#9C27B0]">
                {" "}
                Getting started is so easy, even your clients could do it.
              </h2>
              <p className="text-2xl font-medium my-3">
                Get all the media buying tools and analytics you need in the
                easy-to-use platform built for agencies.
              </p>
            </div>

            <div className="my-10 grid grid-cols-3 gap-10">
              {[
                {
                  icon: "/icon1.png",
                  heading: "Campaign performance that adapts on the fly.",
                  description:
                    "Changing market conditions? New competitors? Sudden budget cuts? Be ready for any media buying challenge with real-time optimization.",
                },
                {
                  icon: "/icon1.png",
                  heading: "Cross-platform campaign management made simple.",
                  description:
                    "Manage Google, Facebook, LinkedIn, and more from one dashboard. No more logging into multiple platforms daily.",
                },
                {
                  icon: "/icon1.png",
                  heading: "Client reporting that impresses and informs.",
                  description:
                    "Generate beautiful, insightful reports that show ROI, performance trends, and strategic recommendations for your clients.",
                },
              ].map((service, idx) => (
                <div key={idx} className="flex items-start flex-col gap-2">
                  <img src={service.icon} alt={""} className="w-12 h-12" />
                  <h3 className="text-3xl font-bold text-[#9C27B0]">
                    {service.heading}
                  </h3>
                  <p className="text-lg mb-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Carousel />
          </div>

          <div className="my-10">
            <div className="py-18 bg-linear-to-br from-[#c173cf] via-[#9C27B0] to-[#7e218f] text-white rounded-2xl">
              <div className="w-full flex justify-around items-center mr-10">
                <h2 className="text-3xl">
                  <strong>Clients questioning your AI strategy? </strong>
                  <strong>Here's we navigating AI in media buying...</strong>
                </h2>
                <button className="px-8 py-3 rounded-full bg-white text-black hover:bg-gray-200 hover:cursor-pointer transition">
                  Read the article
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-screen">
          <div className="mx-auto text-center my-10">
            <h2 className="text-[42px] w-3/5 font-extrabold mx-auto text-[#9C27B0]">
              {" "}
              Getting started is so easy, even your clients could do it.
            </h2>
            <p className="text-2xl font-medium my-3">
              Get all the media buying tools and analytics you need in the
              easy-to-use platform built for agencies.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </div>

      <div className="bg-linear-to-br from-[#c173cf] via-[#9C27B0] to-[#7e218f] min-h-screen ">
        <h2 className="text-[42px] font-extrabold text-white mx-auto w-fit py-14 text-center">
          {" "}
          With optimized campaigns, the
          <br />
          <span>results speak for themselves.</span>
        </h2>

        <IndustriesTeamsTabs />
      </div>

      <div>
        <FAQForTrading />
        <TeamworkCTA />
      </div>
    </div>
  );
}
