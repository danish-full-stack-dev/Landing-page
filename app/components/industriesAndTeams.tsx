"use client";
import React, { useState } from "react";
import { Users, MessageSquare, Tag, Clock, CheckCircle } from "lucide-react";

const industriesData = [
  {
    title: "E-commerce",
    description:
      "Drive sales with targeted media campaigns that convert browsers into buyers across all digital channels.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    overlay: {
      type: "feedback",
      avatars: [
        "https://i.pravatar.cc/150?img=1",
        "https://i.pravatar.cc/150?img=2",
        "https://i.pravatar.cc/150?img=3",
      ],
    },
  },
  {
    title: "SaaS & Technology",
    description:
      "Scale your user acquisition with data-driven media buying that maximizes LTV and minimizes CAC.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    overlay: {
      type: "reporting",
      title: "Campaign Analytics",
      subtitle: "Performance metrics",
      date: "May 16, 2024 - Jun 20, 2024",
    },
  },
  {
    title: "Healthcare & Finance",
    description:
      "Navigate complex regulations while delivering compliant, high-performing media campaigns that build trust.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    overlay: {
      type: "activity",
      activities: [
        {
          user: "Kelly M",
          action: "optimized",
          target: "Ad spend",
          time: "Just now",
        },
        {
          user: "Clair B",
          action: "launched",
          target: "New campaign",
          time: "May 7",
        },
        {
          user: "Brian P",
          action: "increased",
          target: "CTR by 25%",
          time: "May 1",
        },
      ],
    },
  },
  {
    title: "Retail & Consumer Goods",
    description:
      "Turn seasonal trends into year-round success with dynamic media buying that adapts to market conditions.",
    image:
      "https://images.unsplash.com/photo-1554224311-beee2ece089d?w=800&h=600&fit=crop",
    overlay: {
      type: "created",
      user: "May 16, 09:00 AM",
    },
  },
];

const teamsData = [
  {
    title: "Media Buyers",
    description:
      "Launch and optimize campaigns faster with collaborative tools that keep your media team aligned and productive.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    overlay: {
      type: "feedback",
      avatars: [
        "https://i.pravatar.cc/150?img=4",
        "https://i.pravatar.cc/150?img=5",
        "https://i.pravatar.cc/150?img=6",
      ],
    },
  },
  {
    title: "Performance Marketers",
    description:
      "Scale campaigns with data-driven insights and automated optimization for maximum ROI.",
    image:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=800&h=600&fit=crop",
    overlay: {
      type: "reporting",
      title: "Campaign Dashboard",
      subtitle: "Real-time metrics",
      date: "Jan 1, 2024 - Jan 31, 2024",
    },
  },
  {
    title: "Account Managers",
    description:
      "Manage client relationships while tracking campaign performance and delivering results on time.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    overlay: {
      type: "activity",
      activities: [
        {
          user: "Alex R",
          action: "updated",
          target: "Client report",
          time: "2h ago",
        },
        {
          user: "Sarah M",
          action: "approved",
          target: "New budget",
          time: "5h ago",
        },
        {
          user: "Mike T",
          action: "scheduled",
          target: "Strategy call",
          time: "Yesterday",
        },
      ],
    },
  },
  {
    title: "Creative Teams",
    description:
      "Create compelling ads that perform with seamless collaboration between creatives and media buyers.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    overlay: {
      type: "created",
      user: "Jan 15, 10:30 AM",
    },
  },
];

export default function IndustriesTeamsTabs() {
  const [activeTab, setActiveTab] = useState("industries");
  const currentData = activeTab === "industries" ? industriesData : teamsData;

  return (
    <div className="pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-12 mb-16">
          <button
            onClick={() => setActiveTab("industries")}
            className={`text-xl font-semibold pb-3 transition-all relative hover:cursor-pointer ${
              activeTab === "industries"
                ? "text-black border-b-2 border-[#9C27B0]"
                : "text-gray-200 hover:text-gray-300"
            }`}
          >
            Industries
            {activeTab === "industries" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("teams")}
            className={`text-xl font-semibold pb-3 transition-all relative hover:cursor-pointer ${
              activeTab === "teams"
                ? "text-black border-b-2 border-[#9C27B0]"
                : "text-gray-200 hover:text-gray-300"
            }`}
          >
            Teams
            {activeTab === "teams" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            )}
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

                {/* Feedback Overlay */}
                {item.overlay.type === "feedback" && (
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex -space-x-2 mb-2">
                      {item.overlay?.avatars?.map((avatar, i) => (
                        <img
                          key={i}
                          src={avatar}
                          alt={`User ${i + 1}`}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-purple-600 text-sm font-medium">
                      <MessageSquare className="w-4 h-4" />
                      Add feedback
                    </div>
                  </div>
                )}

                {/* Reporting Overlay */}
                {item.overlay.type === "reporting" && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="font-semibold text-slate-900 mb-1">
                      {item.overlay.title}
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      📊 {item.overlay.subtitle}
                    </div>
                    <div className="inline-block bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded mb-2">
                      Done
                    </div>
                    <div className="text-xs text-gray-600">
                      📅 {item.overlay.date}
                    </div>
                  </div>
                )}

                {/* Activity Overlay */}
                {item.overlay.type === "activity" && (
                  <div className="absolute top-4 right-4 space-y-2">
                    {item.overlay?.activities?.map((activity, i) => (
                      <div
                        key={i}
                        className="bg-white/95 backdrop-blur rounded-full px-3 py-2 text-xs text-slate-900 shadow-lg flex items-center gap-2"
                      >
                        <div className="w-6 h-6 rounded-full bg-linear-to-br from-purple-400 to-pink-400"></div>
                        <span>
                          <strong>{activity.user}</strong> {activity.action}{" "}
                          <strong>{activity.target}</strong>
                        </span>
                        <span className="text-gray-500 ml-auto">
                          {activity.time}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Created Overlay */}
                {item.overlay.type === "created" && (
                  <div className="absolute bottom-4 right-4 bg-pink-100 text-pink-600 rounded-full px-4 py-2 text-xs font-medium shadow-lg flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Created
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-purple-400 to-pink-400"></div>
                    {item.overlay.user}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 text-gray-900">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-900 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
