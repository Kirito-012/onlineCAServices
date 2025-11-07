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
              Comprehensive Legal Policies
            </h1>
            <p className="text-teal-50 text-lg">Online CA Services</p>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-10 content-fade">
            {/* Section D: Refund & Cancellation Policy */}
            <section>
              <h2 className="text-2xl font-bold bg-linear-to-r from-gray-900 mb-6 pb-3 border-b-2 border-teal-500">
                &bull; Refund & Cancellation Policy
              </h2>

              {/* 1. Nature of Fees */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  1. Nature of Fees
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The portal itself does not charge users for connecting with
                  professionals unless specifically stated. Any fees are paid
                  directly to the professional.
                </p>
              </div>

              {/* 2. Refund Eligibility */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  2. Refund Eligibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Refunds, where applicable, are governed solely by the refund
                  policy of the professional engaged by the user. The portal has
                  no involvement in financial transactions or refunds.
                </p>
              </div>

              {/* 3. Non-Refundable Components */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  3. Non-Refundable Components
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Government filing fees, taxes, and service charges are
                  non-refundable once paid.
                </p>
              </div>

              {/* 4. Cancellation */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  4. Cancellation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users may cancel requests by written notice before
                  professional engagement. Online CA Services may also decline
                  service requests at its discretion.
                </p>
              </div>

              {/* 5. Dispute Resolution */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  5. Dispute Resolution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes relating to fees or services must be resolved
                  directly between the user and the professional concerned.
                </p>
              </div>

              {/* 6. Jurisdiction */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  6. Jurisdiction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All disputes relating to portal operation shall fall within
                  Delhi jurisdiction.
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
