"use client";
import {
  ArrowRight,
  Brain,
  ChartColumn,
  MessageCircleMore,
  RefreshCcw,
  ShieldHalf,
  Waypoints,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-black"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0">
            <img src="/ai-bg2.png" alt="hero pic" className="w-full" />
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#9C27B0]/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
              animationDuration: "4s",
            }}
          ></div>
          {/* <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.12}px)`,
              animationDelay: "2s",
              animationDuration: "5s",
            }}
          ></div> */}
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="text-sm font-semibold text-white/50 mb-4 tracking-widest uppercase border border-gray-400/20 px-6 py-2 rounded-full backdrop-blur-sm">
              AI-POWERED AUTOMATION
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
            <span
              className="inline-block animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Automate Your Workflow
            </span>
            <br />
            <span
              className="inline-block text-[#9C27B0] animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              With AI Intelligence
            </span>
            <br />
            <span
              className="inline-block animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              Beyond Imagination
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Transform your business operations with cutting-edge AI automation
            that learns, adapts, and optimizes your entire workflow.
          </p>

          <div
            className="flex flex-wrap gap-6 justify-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-fit p-2 h-10 border-2 border-white/30 rounded-full flex justify-center items-center text-xs">
                Tap
              </div>
            </div>
            <button className="group px-8 py-2 bg-[#9C27B0] rounded-full font-bold text-lg flex items-center hover:shadow-2xl hover:shadow-[#9C27B0]/50 transform hover:scale-105 transition-all duration-300 border border-gray-400/20">
              Start Automating
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
            <button className="px-8 py-2 border border-gray-400/20 rounded-full font-bold text-lg hover:bg-white/5 transform hover:scale-105 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section min-h-screen py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-[#9C27B0]">
              AI-Powered Features That Work
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Unlock intelligent automation capabilities that transform how your
              business operates daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Waypoints,
                title: "Smart Workflow Automation",
                desc: "AI analyzes your processes and automatically optimizes repetitive tasks in real-time.",
              },
              {
                icon: ChartColumn,
                title: "Predictive Analytics",
                desc: "Forecast trends and outcomes with machine learning algorithms that improve over time.",
              },
              {
                icon: MessageCircleMore,
                title: "Natural Language Processing",
                desc: "Communicate with your systems using plain language commands and queries.",
              },
              {
                icon: RefreshCcw,
                title: "Intelligent Data Processing",
                desc: "Extract, transform, and load data automatically with AI-driven accuracy.",
              },
              {
                icon: Brain,
                title: "Automated Decision Making",
                desc: "Let AI make routine decisions based on custom rules and historical patterns.",
              },
              {
                icon: ShieldHalf,
                title: "24/7 AI Monitoring",
                desc: "Constant system surveillance with instant alerts and self-healing capabilities.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-transparent p-8 rounded-3xl border border-gray-400/20 hover:border-[#9C27B0]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm"
                style={{
                  animation:
                    activeSection >= 1
                      ? `slide-up 0.6s ease-out ${index * 0.1}s both`
                      : "none",
                }}
              >
                <div className="w-16 h-16 bg-[#9C27B0]/20 rounded-2xl mb-6 flex items-center justify-center text-3xl border border-gray-400/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-[#9C27B0]" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>

                <div className="absolute inset-0 bg-linear-to-br from-[#9C27B0]/0 to-white/0 group-hover:from-[#9C27B0]/5 group-hover:to-white/5 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9C27B0]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      </section>

      {/* Image Left, Content Right */}
      <section className="section min-h-screen py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="inset-0 flex items-center justify-center text-6xl font-bold text-white/10 ">
                <img
                  src="/ai-dashboard.png"
                  alt="dashboard"
                  className="object-top object-cover h-[80dvh]"
                />
              </div>

              <div className="absolute bottom-0 -right-8 bg-black p-6 rounded-2xl border border-gray-400/20 shadow-2xl animate-float backdrop-blur-sm">
                <div className="text-sm text-white/60 mb-2">
                  Tasks Automated
                </div>
                <div className="text-3xl font-bold text-[#9C27B0]">+850%</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight">
                Experience AI-Driven
                <span className="block text-[#9C27B0] mt-2">
                  Automation Platform
                </span>
              </h2>

              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Harness the power of artificial intelligence to automate complex
                workflows and scale your operations effortlessly.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Real-time AI Processing",
                  "Adaptive Learning Algorithms",
                  "Seamless Integration APIs",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 bg-[#9C27B0]/20 rounded-lg flex items-center justify-center text-sm font-bold border border-gray-400/20 group-hover:scale-110 transition-transform">
                      <span className="text-[#9C27B0]">✓</span>
                    </div>
                    <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className="px-8 py-2 bg-[#9C27B0] rounded-full font-bold hover:shadow-2xl hover:shadow-[#9C27B0]/50 transform hover:scale-105 transition-all duration-300 border border-gray-400/20">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Left, Image Right */}
      <section className="section min-h-screen py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight">
                Built For Scale,
                <span className="block text-[#9C27B0] mt-2">Powered By AI</span>
              </h2>

              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Our AI platform adapts to your needs, providing enterprise-grade
                automation with the intelligence to optimize continuously.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { number: "99.9%", label: "Accuracy Rate" },
                  { number: "10M+", label: "Tasks Processed" },
                  { number: "150+", label: "Integrations" },
                  { number: "24/7", label: "AI Monitoring" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-black/50 p-6 rounded-2xl border border-gray-400/10 hover:border-[#9C27B0]/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold text-[#9C27B0] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="px-8 py-2 border border-gray-400/20 text-white/80 rounded-full font-bold hover:bg-white/5 hover:text-white transform hover:scale-105 transition-all duration-300">
                View Case Studies
              </button>
            </div>

            <div className="lg:order-2 relative">
              <div className="inset-0 flex items-center justify-center text-6xl font-bold text-white/10">
                <img
                  src="/ai-analytics.png"
                  alt="dashboard"
                  className="object-top object-cover h-[80dvh]"
                />
              </div>

              <div className="absolute -top-8 -left-8 w-32 h-32">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-[#9C27B0]/30 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section min-h-screen py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-[#9C27B0]">
              Trusted By Industry Leaders
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              See how companies are transforming their operations with our AI
              automation platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "This AI automation platform reduced our processing time by 85%. The ROI was immediate and transformative.",
                name: "Sarah Chen",
                role: "CTO, TechCorp",
              },
              {
                quote:
                  "The predictive analytics helped us prevent issues before they occurred. Game-changing technology.",
                name: "Michael Rodriguez",
                role: "CEO, InnovateLabs",
              },
              {
                quote:
                  "Seamless integration and intelligent automation. Our team is now 3x more productive.",
                name: "Emily Johnson",
                role: "VP Operations, ScaleUp",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-transparent p-8 rounded-3xl border border-gray-400/20 hover:border-[#9C27B0]/50 transition-all duration-500 hover:shadow-2xl group backdrop-blur-sm"
                style={{
                  animation:
                    activeSection >= 4
                      ? `fade-in 0.8s ease-out ${index * 0.2}s both`
                      : "none",
                }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#9C27B0] text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-white/80 text-lg mb-8 leading-relaxed italic">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#9C27B0]/20 rounded-full flex items-center justify-center text-xl font-bold border border-gray-400/20">
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.name}</div>
                    <div className="text-white/60">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-20 border-t border-gray-400/10">
            <div className="text-center text-[#9C27B0] mb-12 uppercase tracking-wider font-bold text-sm">
              Trusted by over 10,000 companies worldwide
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50">
              {[1, 2, 3, 4, 5].map((logo) => (
                <div
                  key={logo}
                  className="h-20 bg-transparent rounded-xl flex items-center justify-center hover:opacity-100 transition-opacity border border-gray-400/10"
                >
                  [COMPANY {logo}]
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section min-h-screen py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#9C27B0] font-black mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Choose the perfect plan for your automation needs. All plans
              include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Starter", price: "49", popular: false },
              { name: "Professional", price: "149", popular: true },
              { name: "Enterprise", price: "399", popular: false },
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-transparent p-8 rounded-3xl border ${
                  plan.popular
                    ? "border-[#9C27B0] scale-105"
                    : "border-gray-400/20"
                } hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm`}
                style={{
                  animation:
                    activeSection >= 5
                      ? `scale-in 0.6s ease-out ${index * 0.15}s both`
                      : "none",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9C27B0] text-white px-6 py-2 rounded-full text-sm font-bold border border-gray-400/20">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span className="text-white/60">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "AI-powered automation",
                    "Advanced analytics",
                    "Custom integrations",
                    "Priority support",
                    "99.9% uptime SLA",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-[#9C27B0]">✓</span>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 rounded-full font-bold transition-all duration-300 transform group-hover:scale-105 border ${
                    plan.popular
                      ? "bg-[#9C27B0] border-gray-400/20 hover:shadow-2xl hover:shadow-[#9C27B0]/50"
                      : "bg-transparent border-gray-400/20 hover:bg-white/5"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section min-h-screen py-32 px-6 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            Ready To Automate
            <span className="block text-[#9C27B0] mt-2">Your Future?</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies using our AI platform to accelerate
            growth and achieve unprecedented efficiency.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <button className="group px-12 py-3 bg-[#9C27B0] rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#9C27B0]/50 transform hover:scale-105 transition-all duration-300 border border-gray-400/20">
              Start Free Trial
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button className="px-12 py-3 border border-gray-400/20 rounded-full font-bold text-lg hover:bg-white/5 transform hover:scale-105 transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-white/60">
            <div className="flex items-center gap-2">
              <span className="text-[#9C27B0]">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9C27B0]">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9C27B0]">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#9C27B0]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#9C27B0]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
