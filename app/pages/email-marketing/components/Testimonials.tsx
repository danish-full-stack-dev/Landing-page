import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This email marketing tool transformed our business. We saw a 40% increase in sales within the first month!",
      author: "Jane Doe, CEO of Company X",
      result: "40% Sales Increase",
    },
    {
      quote:
        "The automation features saved us hours every week. Highly recommend for any marketing team.",
      author: "John Smith, Marketing Director at Brand Y",
      result: "50% Time Saved",
    },
    {
      quote:
        "Easy to use and powerful analytics. Our engagement rates doubled after switching.",
      author: "Emily Johnson, Founder of Startup Z",
      result: "2x Engagement",
    },
  ];

  return (
    <section className="bg-black text-gray-500 h-[60dvh] px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute h-100 w-100 bg-white/5 blur-2xl rounded-bl-full rounded-t-full bottom-0 right-0"></div>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20">
          Testimonials & Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black py-10 px-6 rounded-lg border-gray-400/60 border"
            >
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-[#9C27B0]">
                {testimonial.author}
              </p>
              <p className="text-gray-500 font-bold">{testimonial.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
