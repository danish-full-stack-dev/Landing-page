import React from "react";

const Capabilities = () => {
  return (
    <section className="bg-black text-gray-500 h-[80dvh] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto my-auto h-full flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20">
          Detailed Capabilities
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#9C27B0] ">
              Template Builder
            </h3>
            <p className="text-gray-300 mb-6">
              Create stunning emails with our intuitive drag-and-drop editor. No
              coding required.
            </p>
            <div className="bg-gray-900/50 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">
                Drag-and-Drop Editor Preview
              </span>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#9C27B0]">
              Marketing Automation
            </h3>
            <p className="text-gray-300 mb-6">
              Set up drip campaigns and behavior-triggered emails to nurture
              your leads automatically.
            </p>
            <div className="bg-gray-900/50 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">Workflows Diagram</span>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#9C27B0]">
              Audience Segmentation
            </h3>
            <p className="text-gray-300 mb-6">
              Target the right people with advanced CRM integration and
              segmentation tools.
            </p>
            <div className="bg-gray-900/50 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">CRM Dashboard Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
