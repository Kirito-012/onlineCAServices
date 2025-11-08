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
              Copyright & Intellectual Property Notice
            </h1>
            <p className="text-teal-50 text-lg">Online CA Services</p>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-10 content-fade">
            {/* Section E: Copyright & Intellectual Property Notice */}
            <section>
              {/* 1. Ownership and Intellectual Property */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  1. Ownership and Intellectual Property
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All website design, layout, and written content are exclusive
                  property of Online CA Services, protected under the Copyright
                  Act, 1957.
                </p>
              </div>

              {/* 2. Legal Use of CA India */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  2. Legal Use of “CA India”
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Use of the descriptive term “CA India” is legally permissible
                  under Section 30(2)(a) of the Trade Marks Act, 1999.
                </p>
              </div>

              {/* 3. Restriction on Copying */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  3. Restriction on Copying
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No portion of this site may be copied, reproduced, or
                  republished without written consent.
                </p>
              </div>

              {/* 4. Infringement Notice */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  4. Infringement Notice
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Any alleged infringement notice may be addressed to the
                  operator via email.
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
