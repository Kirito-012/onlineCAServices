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
              Privacy Policy
            </h1>
            <p className="text-teal-50 text-lg">Online CA Services</p>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-10 content-fade">
            {/* Section B: Privacy Policy */}
            <section>
              {/* ✅ B. Privacy Policy */}
              <div className="mb-10">
                

                {/* 1. Information Collected */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    1. Information Collected
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    We may collect:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                    <li>Name, email, and contact number of users.</li>
                    <li>
                      Service details for appointment booking or subscription.
                    </li>
                    <li>
                      Transaction data for payment verification (via Razorpay).
                    </li>
                    <li>
                      Technical data (browser, IP, time logs) for analytics and
                      security.
                    </li>
                  </ul>
                </div>

                {/* 2. Purpose of Use */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    2. Purpose of Use
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Your data is used only for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                    <li>Connecting you with verified professionals.</li>
                    <li>Processing appointment or subscription payments.</li>
                    <li>Sending meeting links, confirmations, or receipts.</li>
                    <li>
                      Fulfilling legal, tax, or accounting obligations under
                      Indian law.
                    </li>
                  </ul>
                </div>

                {/* 3. Data Sharing */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    3. Data Sharing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Information is shared only with professionals or service
                    providers essential to perform operations (Razorpay,
                    hosting, analytics). No personal data is ever sold or
                    disclosed for marketing.
                  </p>
                </div>

                {/* 4. Payment Gateway Security */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    4. Payment Gateway Security
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All online transactions are securely processed through
                    Razorpay, which is PCI DSS compliant. Online CA Services
                    does not store or access your payment card, UPI, or banking
                    details.
                  </p>
                </div>

                {/* 5. Data Retention */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    5. Data Retention
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Data is stored only for as long as necessary for the service
                    or legally required retention period.
                  </p>
                </div>

                {/* 6. User Rights */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    6. User Rights
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    You may request correction or deletion of your data by
                    contacting our support email.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    A Grievance Officer will be appointed under Rule 5(9) of the
                    IT (Reasonable Security Practices) Rules, 2011.
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
