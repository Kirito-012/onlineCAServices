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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Disclaimer 
            </h1>
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
                  ) is an independent online portal designed solely to connect
                  users with qualified professionals for taxation, GST,
                  accounting, and business-compliance related services. The
                  portal itself does not render any professional service,
                  certification, or advice directly. Users are required to
                  exercise their own judgment and due diligence before engaging
                  with any professional introduced through the portal.
                </p>
              </div>

              {/* 2. No Affiliation with ICAI */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  2. No Affiliation with ICAI
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Online CA Services is not affiliated with, endorsed by, or in
                  any way connected to The Institute of Chartered Accountants of
                  India (ICAI) or any other statutory authority. The term "CA
                  India" is used purely in a descriptive sense to indicate that
                  this portal relates to chartered accountancy services
                  available in India. Such use qualifies as "descriptive use" as
                  defined under Section 30(2)(a) of the Trade Marks Act, 1999.
                </p>
              </div>

              {/* 3. Scope of Portal */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  3. Scope of Portal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The website operates strictly as a facilitator, enabling users
                  to communicate with qualified professionals who are capable of
                  handling their specific compliance or filing requirements.
                  Online CA Services neither supervises nor guarantees the
                  quality, expertise, or timeliness of any work performed by
                  those professionals.
                </p>
              </div>

              {/* 4. No Client-Professional Relationship */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  4. No Client-Professional Relationship
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Browsing this website, submitting an inquiry, or being
                  introduced to a professional through the portal does not
                  constitute or establish a client–professional relationship
                  between the user and Online CA Services. Such relationships,
                  if any, are formed exclusively between the user and the
                  professional concerned.
                </p>
              </div>

              {/* 5. User Due Diligence */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  5. User Due Diligence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Users must perform their own verification of credentials,
                  experience, and qualifications of any professional before
                  proceeding with engagement. Online CA Services does not
                  authenticate or certify any professional profiles listed or
                  referenced on the platform.
                </p>
              </div>

              {/* 6. Limitation of Liability */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  6. Limitation of Liability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Online CA Services, its operators, and affiliates disclaim all
                  responsibility for the quality, accuracy, or results of
                  services rendered by qualified professionals contacted via
                  this portal. The portal assumes no liability for any loss or
                  damage incurred by reliance on information or services
                  obtained through such professionals.
                </p>
              </div>

              {/* 7. Intellectual Property and Copyright */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  7. Intellectual Property and Copyright
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All original text, graphics, and website design of Online CA
                  Services are protected under the Copyright Act, 1957. The use
                  of "CA India" in the website's domain name is purely
                  descriptive and permissible under Section 30(2)(a) of the
                  Trade Marks Act, 1999. The official ICAI logos or emblems are
                  exclusive property of ICAI and are neither reproduced nor
                  implied here.
                </p>
              </div>

              {/* 8. Content Accuracy and Updates */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  8. Content Accuracy and Updates
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Information on this website is subject to change without
                  notice. While efforts are made to maintain accuracy, Online CA
                  Services makes no representations or warranties regarding
                  correctness, reliability, or completeness of content.
                </p>
              </div>

              {/* 9. Third-Party Links */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  9. Third-Party Links
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The website may include links to third-party platforms for
                  convenience. Online CA Services does not control, endorse, or
                  assume responsibility for their content or privacy practices.
                </p>
              </div>

              {/* 10. Jurisdiction */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  10. Jurisdiction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All activities on this website are governed by the laws of
                  India. Any disputes shall be subject exclusively to the
                  competent courts located in Delhi, India.
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
