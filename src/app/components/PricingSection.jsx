"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePricingPlan } from "../hooks/usePricingPlan";

/**
 * Normalize destination data
 * Handles:
 * - Destination: []
 * - Destination: { Domestic: [], International: [] }
 */
function normalizeDestinations(destination) {
  if (Array.isArray(destination)) {
    return {
      domestic: destination,
      international: [],
    };
  }

  return {
    domestic: destination?.Domestic || [],
    international: destination?.International || [],
  };
}

export default function PricingSection() {
  const { plans, loading, error } = usePricingPlan();

  // state per plan + per type
  const [expanded, setExpanded] = useState({});

  const toggle = (planId, type) => {
    setExpanded((prev) => ({
      ...prev,
      [planId]: {
        ...prev[planId],
        [type]: !prev?.[planId]?.[type],
      },
    }));
  };

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        {loading && (
          <p className="text-center text-gray-400">Loading plans…</p>
        )}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {/* PLANS */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = (plan.PricePaise / 100).toLocaleString("en-IN");

            const { domestic, international } = normalizeDestinations(
              plan.Destination
            );

            const showDomesticAll =
              expanded?.[plan.PlanId]?.domestic;
            const showInternationalAll =
              expanded?.[plan.PlanId]?.international;

            const domesticVisible = showDomesticAll
              ? domestic
              : domestic.slice(0, 10);

            const internationalVisible = showInternationalAll
              ? international
              : international.slice(0, 10);

            return (
              <div
                key={plan.PlanId}
                className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg overflow-hidden hover:border-orange-600/50 transition flex flex-col"
              >
                {/* PLAN HEADER */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-6">
                  <h3 className="text-2xl font-bold">{plan.Name}</h3>
                  <p className="text-orange-100 text-sm mt-2">
                    {plan.Description}
                  </p>
                </div>

                {/* PLAN BODY */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <span className="text-5xl font-bold">₹{price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>

                  <ul className="space-y-3 mb-6 text-gray-300">
                    <li>{plan.QuoteCredits} Quotation Credits</li>
                    <li>Currency: {plan.Currency}</li>
                  </ul>

                  {/* DOMESTIC */}
                  {domestic.length > 0 && (
                    <div className="border-t border-gray-700 pt-6 mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">
                        Domestic Destinations
                      </h4>

                      <div className="grid grid-cols-2 gap-2">
                        {domesticVisible.map((d, i) => (
                          <span
                            key={i}
                            className="text-sm text-gray-400"
                          >
                            • {d}
                          </span>
                        ))}
                      </div>

                      {domestic.length > 10 && (
                        <button
                          onClick={() =>
                            toggle(plan.PlanId, "domestic")
                          }
                          className="flex items-center mt-2 text-orange-600 text-sm font-semibold"
                        >
                          {showDomesticAll ? "Show Less" : "See More"}
                          <ChevronDown
                            className={`ml-1 w-4 h-4 transition ${
                              showDomesticAll ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  )}

                  {/* INTERNATIONAL */}
                  {international.length > 0 && (
                    <div className="border-t border-gray-700 pt-6 mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">
                        International Destinations
                      </h4>

                      <div className="grid grid-cols-2 gap-2">
                        {internationalVisible.map((d, i) => (
                          <span
                            key={i}
                            className="text-sm text-gray-400"
                          >
                            • {d}
                          </span>
                        ))}
                      </div>

                      {international.length > 10 && (
                        <button
                          onClick={() =>
                            toggle(plan.PlanId, "international")
                          }
                          className="flex items-center mt-2 text-orange-600 text-sm font-semibold"
                        >
                          {showInternationalAll
                            ? "Show Less"
                            : "See More"}
                          <ChevronDown
                            className={`ml-1 w-4 h-4 transition ${
                              showInternationalAll ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  )}

                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition mt-auto">
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
