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
              Refund & Cancellation
            </h1>
            <p className="text-teal-50 text-lg">Online CA Services</p>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-10 content-fade">
            {/* Section D: Refund & Cancellation Policy */}
            <section>
              {/* ✅ C. Refund Policy */}
              <div className="mb-10">
                {/* 1. General Rule */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    1. General Rule
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All payments made through Online CA Services are
                    non-refundable and non-transferable, once the service is
                    booked or subscription activated.
                  </p>
                </div>

                {/* 2. On-Call Appointment Bookings */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    2. On-Call Appointment Bookings
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    For consultation calls booked through the “Book CA Online”
                    feature:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                    <li>
                      Payment once made is non-refundable under any
                      circumstances.
                    </li>
                    <li>
                      Rescheduling requests may be considered at the sole
                      discretion of the portal (subject to slot availability).
                    </li>
                    <li>
                      Failure to attend the scheduled call forfeits the session
                      fee.
                    </li>
                  </ul>
                </div>

                {/* 3. Subscription (List Your Profile) */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    3. Subscription (List Your Profile)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    For professionals subscribing under the “List Your Profile”
                    service:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                    <li>
                      Subscription fees (monthly/yearly) are non-refundable.
                    </li>
                    <li>
                      Subscription remains active till the end of the paid
                      period, even if the professional chooses to discontinue
                      listing.
                    </li>
                    <li>No partial or prorated refunds will be processed.</li>
                  </ul>
                </div>

                {/* 4. Technical or Gateway Issues */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    4. Technical or Gateway Issues
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    If any transaction fails due to technical error or duplicate
                    payment, the amount will be automatically refunded by
                    Razorpay to the source account within 7–10 business days.
                  </p>
                </div>

                {/* 5. Dispute Resolution */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    5. Dispute Resolution
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Any dispute relating to payments, subscriptions, or
                    consultations shall be governed by the laws of India, with
                    exclusive jurisdiction in Delhi.
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
