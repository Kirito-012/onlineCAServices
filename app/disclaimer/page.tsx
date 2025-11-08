"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Disclaimer() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Disclaimer</h1>
            <p className="text-teal-50 text-lg">Online CA Services</p>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-10 content-fade">
            {/* Section A: Disclaimer & Legal Notice */}
            <section>
              {/* 1. Purpose & Legal Status */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  1. Purpose & Legal Status
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Online CA Services (
                  <a
                    href="https://www.onlineCAservices.com"
                    className="text-teal-600 hover:text-teal-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.onlineCAservices.com
                  </a>
                  )is an independent online portal created to connect users with
                  qualified professionals for Income Tax, GST, accounting,
                  financial, and business-compliance related services. The
                  portal itself does not render professional advice or
                  certification directly. Users are advised to exercise
                  independent judgment and due diligence before engaging with
                  any professional introduced via this portal.
                </p>
              </div>

              {/* 2. No Affiliation with ICAI */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  2. No Affiliation with ICAI
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Online CA Services is not affiliated, endorsed, or associated
                  with the Institute of Chartered Accountants of India (ICAI) or
                  any statutory authority. The descriptive term “CA India” used
                  anywhere on this website is purely indicative of chartered
                  accountancy services offered in India and is permissible under
                  Section 30(2)(a) of the Trade Marks Act, 1999.
                </p>
              </div>

              {/* 3. Scope of Portal */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  3. Scope of Portal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The website operates as a facilitator platform enabling users
                  to connect with qualified independent professionals for Income
                  Tax filing, GST, accounting, finance, and business
                  registration services. The portal does not supervise,
                  guarantee, or certify any professional’s competence, quality,
                  or timeliness.
                </p>
              </div>

              {/* 4. No Client-Professional Relationship */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  4. No Client-Professional Relationship
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Using this website, submitting a query, or booking an
                  appointment does not create a client–professional relationship
                  between the user and Online CA Services. Such relationships,
                  if any, exist solely between the user and the professional
                  engaged.
                </p>
              </div>

              {/* 5. User Due Diligence */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  5. User Due Diligence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users must verify the credentials and experience of
                  professionals before engaging. Online CA Services does not
                  authenticate or certify any listed professional profiles.
                </p>
              </div>

              {/* 6. Limitation of Liability */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  6. Limitation of Liability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The portal and its operators disclaim all liability for
                  outcomes, losses, or damages arising from engagements between
                  users and professionals. Online CA Services shall not be held
                  responsible for any errors, delays, or deficiencies in service
                  rendered by professionals contacted via this website.
                </p>
              </div>

              {/* 7. Intellectual Property and Copyright */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  7. Intellectual Property and Copyright
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All original text, design, and content on this portal are
                  protected under the Copyright Act, 1957. Use of “CA India”
                  within the domain name is descriptive and lawful as per
                  Section 30(2)(a) of the Trade Marks Act, 1999. Logos,
                  trademarks, or emblems of ICAI are neither used nor implied.
                </p>
              </div>

              {/* 8. Content Accuracy and Updates */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  8. Content Accuracy and Updates
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Content and offerings are updated regularly, but accuracy and
                  completeness cannot be guaranteed. Users are encouraged to
                  confirm details independently before making decisions.
                </p>
              </div>

              {/* 9. Third-Party Links */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  9. Third-Party Links
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The portal may contain links to third-party websites or
                  payment pages (like Razorpay). Online CA Services does not
                  control or endorse their content, privacy practices, or data
                  handling.
                </p>
              </div>

              {/* 10. Jurisdiction */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  10. Jurisdiction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All activities through this portal are governed by Indian
                  laws, subject to exclusive jurisdiction of courts in Delhi,
                  India.
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
