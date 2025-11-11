import React from "react";

const PricingSection = () => {
  return (
    <section className="bg-[#F8FBFF] py-20 flex flex-col items-center text-center px-4">
      {/* Section Header */}
      <div className="mb-10">
        <button className="text-sm bg-white border border-gray-300 rounded-full px-4 py-1 mb-4 shadow-sm">
          🏷️ Pricing
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Two ways to launch fast – and keep growing even faster
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the perfect package to launch and grow your startup
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-5xl">
        
        {/* MVP Development Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex-1 flex flex-col justify-between hover:shadow-lg transition">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                🚀 MVP Development
              </span>
              <span className="text-gray-400 text-sm">One Time</span>
            </div>
            <h3 className="text-xl font-semibold mb-1">MVP Development</h3>
            <p className="text-gray-500 mb-2">MVP Development Package</p>

            <div className="text-gray-400 line-through">$6500</div>
            <div className="text-3xl font-bold text-gray-800 mb-1">$4997</div>
            <p className="text-gray-500 mb-5">
              Complete MVP Delivered in just 2 weeks
            </p>

            <button className="bg-white border border-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-gray-50 mb-6">
              Book a Free MVP Call
            </button>

            <div className="border-t border-gray-200 pt-4 text-left">
              <h4 className="font-semibold mb-2 text-gray-700">
                What’s Included
              </h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✅ Full web or mobile MVP – built to scale</li>
                <li>✅ Modern, reliable tech stack (AI-ready)</li>
                <li>✅ Seamless integrations (payments, auth, email, etc)</li>
                <li>✅ 30 days of free post-launch support</li>
                <li>✅ Direct founder-led development & weekly updates</li>
                <li>✅ Transparent progress tracking – no surprises</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Growth Retainer Package */}
        <div className="bg-white border-2 border-blue-400 rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between relative hover:shadow-xl transition">
          {/* Badge */}
          <div className="absolute -top-3 right-5 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow">
            Most Popular
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                📈 Growth Retainer
              </span>
              <span className="text-gray-400 text-sm">Continuous</span>
            </div>
            <h3 className="text-xl font-semibold mb-1">
              Growth Retainer Package
            </h3>
            <p className="text-gray-500 mb-2">Continuous Growth Package</p>

            <div className="text-gray-400 line-through">$5000/m</div>
            <div className="text-3xl font-bold text-gray-800 mb-1">
              $3997<span className="text-base font-medium">/m</span>
            </div>
            <p className="text-gray-500 mb-5">
              No long-term commitment – cancel anytime
            </p>

            <button className="bg-gradient-to-b from-[#003BB9] to-[#0F93FF] border-2 border-[#00D0FF] text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 mb-6">
              Book My MVP Build
            </button>

            <div className="border-t border-gray-200 pt-4 text-left">
              <h4 className="font-semibold mb-2 text-gray-700">
                Monthly Services:
              </h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✅ 60 hours of flexible dev time monthly</li>
                <li>✅ Priority feature updates & bug fixes</li>
                <li>✅ Weekly strategy + product calls</li>
                <li>✅ Continuous performance optimization</li>
                <li>✅ Same-day emergency support</li>
                <li>✅ Cancel anytime – zero hassle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
