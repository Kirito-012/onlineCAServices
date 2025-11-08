"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20 pb-16">
        <style jsx global>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .header-fade {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .content-fade {
            animation: fadeInUp 0.8s ease-out 0.4s forwards;
            opacity: 0;
          }
        `}</style>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          {/* Header Section */}
          <div className="bg-linear-to-r from-teal-600 to-blue-700 rounded-xl p-8 mb-8 text-white shadow-lg header-fade">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Copyright & Intellectual Property Notice Legal Policies
            </h1>
            <p className="text-teal-50 text-lg">Online CA Services</p>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-10 content-fade">
            {/* Section E: Copyright & Intellectual Property Notice */}
            <section>
             

              {/* 1. Ownership */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  1. Ownership
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All content, layout, and visual design of Online CA Services
                  are the intellectual property of its operators, protected
                  under the Copyright Act, 1957.
                </p>
              </div>

              {/* 2. Limited License */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  2. Limited License
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users are granted a limited, non-exclusive, and
                  non-transferable right to access this site for personal
                  informational purposes only.
                </p>
              </div>

              {/* 3. Prohibited Uses */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  3. Prohibited Uses
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users shall not copy, reproduce, distribute, or create
                  derivative works of site content without written consent.
                </p>
              </div>

              {/* 4. Reporting Infringement */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  4. Reporting Infringement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If you believe your copyrighted material has been used
                  improperly, you may notify the operator using the provided
                  contact details.
                </p>
              </div>

              {/* 5. Legal Reference */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  5. Legal Reference
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All use of "CA India" is descriptive under Section 30(2)(a) of
                  the Trade Marks Act, 1999, and does not imply association with
                  ICAI.
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Last Updated: {new Date().toLocaleDateString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
