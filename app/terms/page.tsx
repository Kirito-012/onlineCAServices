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
              

              {/* 1. Acceptance of Terms */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Accessing this website implies acceptance of all terms,
                  privacy policies, and disclaimers. Users unwilling to comply
                  must discontinue use immediately.
                </p>
              </div>

              {/* 2. Nature of Platform */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  2. Nature of Platform
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Online CA Services operates purely as an online connector that
                  links users to qualified professionals. It does not provide
                  direct professional or consultancy services.
                </p>
              </div>

              {/* 3. Eligibility */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  3. Eligibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users must be legally competent under Indian law to enter into
                  contracts. Minors or entities lacking legal capacity are not
                  permitted to use the portal.
                </p>
              </div>

              {/* 4. Registration */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  4. Registration
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users providing contact details warrant that information is
                  true, complete, and accurate. Misrepresentation may result in
                  termination of access.
                </p>
              </div>

              {/* 5. Professional Engagement */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  5. Professional Engagement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Any engagement between user and professional occurs directly
                  between those parties. Online CA Services is not involved in
                  their contractual or commercial terms.
                </p>
              </div>

              {/* 6. User Obligations */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  6. User Obligations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users agree not to post unlawful material, hack, scrape, or
                  disrupt the site. Users must verify professionals
                  independently.
                </p>
              </div>

              {/* 7. Payments */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  7. Payments
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If any payments are facilitated, they are made directly
                  between the user and the professional. The portal does not
                  handle client funds.
                </p>
              </div>

              {/* 8. Intellectual Property */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  8. Intellectual Property
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All website content is protected under the Copyright Act,
                  1957. The descriptive use of "CA India" is permitted under
                  Section 30(2)(a) of the Trade Marks Act, 1999.
                </p>
              </div>

              {/* 9. Warranty Disclaimer */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  9. Warranty Disclaimer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This portal is provided "as is". Online CA Services offers no
                  warranties regarding content accuracy or outcomes from
                  engagements with professionals.
                </p>
              </div>

              {/* 10. Limitation of Liability */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  10. Limitation of Liability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Online CA Services shall not be liable for damages, losses, or
                  claims arising from engagements between users and
                  professionals or reliance on any content.
                </p>
              </div>

              {/* 11. Indemnity */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  11. Indemnity
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users agree to indemnify Online CA Services and its operators
                  against all claims resulting from misuse or violation of these
                  terms.
                </p>
              </div>

              {/* 12. Termination */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  12. Termination
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Online CA Services reserves the right to restrict access to
                  any user who violates these terms.
                </p>
              </div>

              {/* 13. Governing Law and Jurisdiction */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  13. Governing Law and Jurisdiction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of India, subject to the
                  exclusive jurisdiction of Delhi courts.
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
