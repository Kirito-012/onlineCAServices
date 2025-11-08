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
              Terms of Use
            </h1>
            <p className="text-teal-50 text-lg">Online CA Services</p>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-10 content-fade">
            {/* Section C: Terms of Use */}
            <section>
              {/* ✅ A. Terms & Conditions */}
              <div className="mb-10">
                {/* 1. Acceptance */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    1. Acceptance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    By using this website or making any payment, you agree to
                    these terms, the privacy policy, and refund policy.
                  </p>
                </div>

                {/* 2. Platform Nature */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    2. Platform Nature
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Online CA Services functions as an intermediary connecting
                    users and professionals. It does not provide direct
                    professional services.
                  </p>
                </div>

                {/* 3. User Obligations */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    3. User Obligations
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Users must:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                    <li>Provide correct and valid details.</li>
                    <li>
                      Not misuse or attempt to access data of other users.
                    </li>
                    <li>
                      Verify the authenticity of professionals independently.
                    </li>
                  </ul>
                </div>

                {/* 4. Professional Engagement */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    4. Professional Engagement
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Any professional engagement occurs directly between user and
                    professional. Online CA Services is not a party to any such
                    contract.
                  </p>
                </div>

                {/* 5. Payments & Consultations */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    5. Payments & Consultations
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All payments are collected securely via Razorpay. Once the
                    user books an appointment or subscription, the payment is
                    final and non-refundable as services are pre-scheduled or
                    listing-based.
                  </p>
                </div>
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
