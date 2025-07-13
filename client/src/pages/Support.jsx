import React from "react";
import { helplines } from "../constants/support";
import { FiPhone, FiMail, FiGlobe } from "react-icons/fi";

const Support = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 bg-gradient-to-b from-blue-100 via-white to-blue-200 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl shadow-xl p-6 sm:p-10">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            You're Not Alone
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Reach out to any of these trusted mental health helplines. Help is
            just a call or message away.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {helplines.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                {item.name}
              </h2>

              <div className="space-y-2 text-gray-700 text-sm">
                {item.phone && (
                  <div className="flex items-center gap-2">
                    <FiPhone className="text-blue-600" />
                    <a
                      href={`tel:${item.phone.replace(/\s+/g, "")}`}
                      className="hover:underline text-blue-600"
                    >
                      {item.phone}
                    </a>
                  </div>
                )}

                {item.email && (
                  <div className="flex items-center gap-2">
                    <FiMail className="text-blue-600" />
                    <a
                      href={`mailto:${item.email}`}
                      className="hover:underline text-blue-600"
                    >
                      {item.email}
                    </a>
                  </div>
                )}

                {item.website && (
                  <div className="flex items-center gap-2">
                    <FiGlobe className="text-blue-600" />
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
