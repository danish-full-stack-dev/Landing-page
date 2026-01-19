"use client";
import BeforeAfterSlider from "@/app/components/beforeAfterSlider";
import Carousel from "@/app/components/carousel";
import IndustriesTeamsTabs from "@/app/components/industriesAndTeams";
import Services from "@/app/components/services";
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
          <div className="flex justify-end text-center flex-col items-center h-[40vh] my-auto mb-10">
            <h1 className="text-6xl font-bold mb-6">
              Project & resource management software{" "}
              <span className="text-[#9C27B0]"> powered by AI</span>, built for
              client work
            </h1>
            <p className="text-xl w-4/6">
              Teamwork.com is the{" "}
              <span className="font-semibold">
                {" "}
                AI-powered project management and resource management platform
              </span>{" "}
              that keeps your client projects on track, makes managing resources
              a breeze, and keeps your profits on point.
            </p>
          </div>
          <div className="flex gap-3 mx-auto w-fit py-2">
            <button className="bg-[#9C27B0] underline underline-offset-2 text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7B1FA2] transition duration-300">
              Start a Free Trial
            </button>
            <button className="bg-white text-[#9C27B0] border-2 border-[#9C27B0] px-6 py-3 rounded-full font-semibold hover:bg-[#F3E5F5] transition duration-300">
              Book a Demo
            </button>
          </div>
          <div className="mx-auto w-fit">
            <p className="font-bold text-sm">
              30 DAY TRIAL. NO CREDIT CARD REQUIRED
            </p>
          </div>
        </div>
        <div>
          <Services />
        </div>

        <div className="mt-10 mb-20 h-[50vh] border-2 border-[#9C27B0] rounded-2xl flex justify-center items-end relative">
          <div className="absolute -top-5">
            <img src="/bg.png" alt="bg" className="w-[50svh] h-[20svh]" />
          </div>
          <div className="flex justify-end text-center flex-col items-center h-3/4 my-auto gap-6">
            <h2 className="text-5xl font-bold">
              Introducing the all-new AI Teammates
            </h2>
            <p className="text-xl w-1/2">
              Helping your team plan smarter, work faster, and deliver more.
            </p>

            <button className="bg-white text-[#9C27B0] border-2 border-[#9C27B0] px-6 py-3 rounded-full font-semibold hover:bg-[#F3E5F5] transition duration-300">
              Meet your AI Teammates
            </button>
          </div>
        </div>

        <div className="mt-10 mb-20 flex justify-center text-center flex-col ">
          <h2 className="font-bold text-5xl w-3/4 mb-20 mx-auto">
            From headaches to high fives. Finally, project and resource
            management software that takes away the pain.
          </h2>
          <div className="grid grid-cols-1 grid-rows-4 grid-flow-col gap-12">
            {[
              {
                video: "/projectmanagement.mp4",
                icon: "/icon1.png",
                heading: "Plans change. Resource management stays on point.",
                description:
                  "Clients wanting things yesterday? A massive job on the horizon? Key Account Manager suddenly resigned? Be ready for any resource management challenge.",
                bullets: [
                  "See staff availability & workloads at a glance",
                  "Forecast and manage resources without the guesswork",
                  "Easily check if you’re under or over utilizing your team",
                ],
                buttonText: "Learn more about resource management",
              },
              {
                video: "/projectmanagement.mp4",
                icon: "/icon1.png",
                heading: "Squeeze more profit from your client projects.",
                description:
                  "Project management software that helps you keep projects on time and on budget.",
                bullets: [
                  "Get real-time project health updates",
                  "Identify and address potential issues before they escalate",
                  "Keep projects on track and within budget",
                ],
                buttonText: "Learn more about project management",
              },
              {
                video: "/projectmanagement.mp4",
                icon: "/icon2.png",
                heading: "Resource management made ridiculously easy.",
                description:
                  "Powerful resource management software that makes allocating and managing your team’s time a breeze.",
                bullets: [
                  "Drag-and-drop resource scheduling",
                  "Visualize team availability with intuitive calendars",
                  "Quickly assign the right people to the right tasks",
                ],
                buttonText: "Learn more about resource management",
              },
              {
                video: "/projectmanagement.mp4",
                icon: "/icon3.png",
                heading: "AI-powered project management & resource management.",
                description:
                  "Let AI take the busy work off your plate, so you can focus on what matters most—delivering amazing client work.",
                bullets: [
                  "AI-generated project plans and timelines",
                  "Automated resource allocation suggestions",
                  "Intelligent risk identification and mitigation strategies",
                ],
                buttonText: "Learn more about AI Teammates",
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
                    <img
                      src={service.icon}
                      alt={service.heading}
                      className="w-12 h-12"
                    />
                    <h3 className="text-3xl font-bold">{service.heading}</h3>
                    <p className="text-lg mb-2">{service.description}</p>
                  </div>
                  {service.bullets && (
                    <div className="pl-5">
                      {service.bullets.map((bullet, index) => (
                        <p key={index} className="mb-2 gap-2 flex items-center">
                          <span className="h-2 w-2 rounded-full bg-black " />
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
          <div className="py-14 bg-amber-100">
            <div className="w-4/6 flex justify-between items-end ml-auto mr-10">
              <h2 className="text-4xl">
                <strong>Clients on your back about AI? </strong>
                <br />
                <strong>Here’s our hot take on what to do next...</strong>
              </h2>
              <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
                Read the article
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
              <div className="w-4/5 flex gap-4 flex-col">
                <h3 className="text-4xl font-bold">
                  An alphabetful of integrations. From Asinaria to Zendesk.
                </h3>

                <p className="text-lg">
                  Whatever apps and platforms you already use, team them up with
                  Teamwork.com and watch how well they get on together.
                </p>
                <button className="bg-transparent text-lg w-fit text-[#9C27B0] border-2 border-[#9C27B0] px-6 py-3 rounded-full font-semibold hover:bg-[#F3E5F5] transition duration-300">
                  Read the article
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
              className={`h-[55dvh] p-5 transition-all duration-500 border-4 rounded-2xl hover:border-[#9C27B0] ${
                index === 2 ? "w-7/12 relative" : "w-5/12"
              } relative`}
              onMouseEnter={() => setIndex(2)}
            >
              <div className="w-4/5 flex gap-4 flex-col">
                <h3 className="text-4xl font-bold">
                  An alphabetful of integrations. From Asinaria to Zendesk.
                </h3>

                <p className="text-lg">
                  Whatever apps and platforms you already use, team them up with
                  Teamwork.com and watch how well they get on together.
                </p>
                <button className="bg-transparent text-lg w-fit text-[#9C27B0] border-2 border-[#9C27B0] px-6 py-3 rounded-full font-semibold hover:bg-[#F3E5F5] transition duration-300">
                  Read the article
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
            className={`h-[50dvh] p-16 rounded-2xl text-white bg-[#932ba3] my-10 flex  justify-between items-center`}
          >
            <div className="w-1/2 flex gap-4 flex-col">
              <h3 className="text-4xl font-bold">
                Less fuss. More focus.Total trust—built in.
              </h3>

              <p className="text-lg">
                From project planning and resource management to AI-powered
                productivity, Teamwork.com is secure by design. SOC 2 Type 2
                certified, with private data that's never used to train
                third-party models.
              </p>
              <button className="bg-transparent text-white hover:text-[#9C27B0] text-lg w-fit border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-[#F3E5F5] transition duration-300">
                Get started now
              </button>
            </div>
            <div>
              <img src="/bg.png" alt="bg" className="h-74 w-74" />
            </div>
          </div>

          <div className="mt-10 mb-20">
            <div className=" mx-auto w-3/6 text-center">
              <h2 className="text-[42px] font-extrabold mx-auto w-fit my-14">
                {" "}
                Getting started is so easy, even a client could do it.
              </h2>
              <p className="text-2xl font-medium">
                Get all the resource management tools and reports you need in
                the easy-to-use platform actually built for client work.
              </p>
            </div>

            <div className="my-10 grid grid-cols-3 gap-10">
              {[
                {
                  icon: "/icon1.png",
                  heading: "Plans change. Resource management stays on point.",
                  description:
                    "Clients wanting things yesterday? A massive job on the horizon? Key Account Manager suddenly resigned? Be ready for any resource management challenge.",
                },
                {
                  icon: "/icon1.png",
                  heading: "Plans change. Resource management stays on point.",
                  description:
                    "Clients wanting things yesterday? A massive job on the horizon? Key Account Manager suddenly resigned? Be ready for any resource management challenge.",
                },
                {
                  icon: "/icon1.png",
                  heading: "Plans change. Resource management stays on point.",
                  description:
                    "Clients wanting things yesterday? A massive job on the horizon? Key Account Manager suddenly resigned? Be ready for any resource management challenge.",
                },
              ].map((service, idx) => (
                <div key={idx} className="flex items-start flex-col gap-2">
                  <img
                    src={service.icon}
                    alt={""}
                    className="w-12 h-12"
                  />
                  <h3 className="text-3xl font-bold">{service.heading}</h3>
                  <p className="text-lg mb-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Carousel />
          </div>

          <div className="mt-10 mb-20">
            <div className="py-14 bg-[#9C27B0] text-white">
              <div className="w-full flex justify-around items-end mr-10">
                <h2 className="text-3xl">
                  <strong>Clients on your back about AI? </strong>
                  <strong>Here’s our hot take on what to do next...</strong>
                </h2>
                <button className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
                  Read the article
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-screen">
          <div className="mt-10">
            <div className=" mx-auto w-3/6 text-center my-10">
              <h2 className="text-[42px] font-extrabold mx-auto w-fit">
                {" "}
                Getting started is so easy, even a client could do it.
              </h2>
              <p className="text-2xl font-medium">
                Get all the resource management tools and reports you need in
                the easy-to-use platform actually built for client work.
              </p>
            </div>
          </div>
          <BeforeAfterSlider />
        </div>
      </div>
      <div className="bg-[#a042b1] min-h-screen ">
        <h2 className="text-[42px] font-extrabold mx-auto w-fit py-14 text-center">
          {" "}
          With happier teams, the
          <br />
          <span>stories write themselves.</span>
        </h2>

        <IndustriesTeamsTabs />
      </div>
    </div>
  );
}
