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
              

              {/* 1. Definitions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  1. Definitions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  "User", "You", or "Your" refers to any individual accessing
                  this portal. "Qualified professional" means an independent
                  professional with relevant credentials engaged by the user
                  through the platform.
                </p>
              </div>

              {/* 2. Data Controller */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  2. Data Controller
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Online CA Services determines the purpose of data processing
                  for the operation of this portal. Contact details for
                  privacy-related queries can be added later by the site
                  operator.
                </p>
              </div>

              {/* 3. Information Collected */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  3. Information Collected
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may collect (a) personal identifiers such as name, email,
                  and phone number; (b) documents or information submitted for
                  matching with professionals; (c) technical data such as IP
                  address and browser information.
                </p>
              </div>

              {/* 4. Purpose of Processing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  4. Purpose of Processing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Information collected is used solely for connecting you with a
                  relevant qualified professional, responding to inquiries,
                  improving portal performance, and complying with statutory
                  obligations.
                </p>
              </div>

              {/* 5. Legal Basis for Processing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  5. Legal Basis for Processing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Processing is based on user consent, contractual necessity
                  (for referral purposes), and compliance with applicable Indian
                  law.
                </p>
              </div>

              {/* 6. Data Sharing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  6. Data Sharing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Information is shared only with qualified professionals
                  relevant to your request or with service providers required to
                  operate the portal (hosting, analytics, etc.). No information
                  is sold or traded.
                </p>
              </div>

              {/* 7. User Due Diligence & Responsibility */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  7. User Due Diligence & Responsibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By submitting data, you agree to independently verify any
                  professional referred through this portal and hold Online CA
                  Services harmless from any resulting disputes or losses.
                </p>
              </div>

              {/* 8. Data Retention */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  8. Data Retention
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Information is retained only as long as necessary for the
                  referral process or as legally required. Data is securely
                  deleted thereafter.
                </p>
              </div>

              {/* 9. Security Measures */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  9. Security Measures
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Industry-standard SSL encryption and restricted access
                  policies are used to protect information. Despite precautions,
                  the portal cannot guarantee absolute data security.
                </p>
              </div>

              {/* 10. Cookies and Analytics */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  10. Cookies and Analytics
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are used to enhance site experience. Users can disable
                  cookies via browser settings. Analytics tools help assess site
                  performance without identifying individuals.
                </p>
              </div>

              {/* 11. User Rights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  11. User Rights
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You may request access, correction, or deletion of your
                  personal data by contacting the operator at the provided
                  address.
                </p>
              </div>

              {/* 12. Grievance Officer */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  12. Grievance Officer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A Grievance Officer will be appointed as per Rule 5(9) of the
                  Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011.
                </p>
              </div>

              {/* 13. Policy Updates */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  13. Policy Updates
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Privacy Policy may be updated periodically. Continued use
                  constitutes acceptance of any revisions.
                </p>
              </div>

              {/* 14. Governing Law */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  14. Governing Law
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All matters are governed by Indian law with exclusive
                  jurisdiction in Delhi.
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
