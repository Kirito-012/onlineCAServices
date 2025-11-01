'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
	return (
		<>
			<Header />
			<main className='min-h-screen bg-gray-50 pt-20 pb-16'>
				<style
					jsx
					global>{`
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
				<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
					{/* Header Section */}
					<div className='bg-linear-to-r from-teal-600 to-blue-700 rounded-xl p-8 mb-8 text-white shadow-lg header-fade'>
						<h1 className='text-3xl sm:text-4xl font-bold mb-3'>
							Comprehensive Legal Policies
						</h1>
						<p className='text-teal-50 text-lg'>Online CA Services</p>
					</div>

					{/* Content Container */}
					<div className='bg-white rounded-xl shadow-md p-6 sm:p-10 space-y-10 content-fade'>
						{/* Section A: Disclaimer & Legal Notice */}
						<section>
							<h2 className='text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-500'>
								A. Disclaimer & Legal Notice
							</h2>

							{/* 1. Purpose & Legal Status */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									1. Purpose & Legal Status
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Online CA Services (
									<a
										href='https://www.onlineCAservices.com'
										className='text-teal-600 hover:text-teal-700 underline'
										target='_blank'
										rel='noopener noreferrer'>
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
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									2. No Affiliation with ICAI
								</h3>
								<p className='text-gray-700 leading-relaxed'>
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
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									3. Scope of Portal
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									The website operates strictly as a facilitator, enabling users
									to communicate with qualified professionals who are capable of
									handling their specific compliance or filing requirements.
									Online CA Services neither supervises nor guarantees the
									quality, expertise, or timeliness of any work performed by
									those professionals.
								</p>
							</div>

							{/* 4. No Client-Professional Relationship */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									4. No Client-Professional Relationship
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Browsing this website, submitting an inquiry, or being
									introduced to a professional through the portal does not
									constitute or establish a client–professional relationship
									between the user and Online CA Services. Such relationships,
									if any, are formed exclusively between the user and the
									professional concerned.
								</p>
							</div>

							{/* 5. User Due Diligence */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									5. User Due Diligence
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Users must perform their own verification of credentials,
									experience, and qualifications of any professional before
									proceeding with engagement. Online CA Services does not
									authenticate or certify any professional profiles listed or
									referenced on the platform.
								</p>
							</div>

							{/* 6. Limitation of Liability */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									6. Limitation of Liability
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Online CA Services, its operators, and affiliates disclaim all
									responsibility for the quality, accuracy, or results of
									services rendered by qualified professionals contacted via
									this portal. The portal assumes no liability for any loss or
									damage incurred by reliance on information or services
									obtained through such professionals.
								</p>
							</div>

							{/* 7. Intellectual Property and Copyright */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									7. Intellectual Property and Copyright
								</h3>
								<p className='text-gray-700 leading-relaxed'>
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
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									8. Content Accuracy and Updates
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Information on this website is subject to change without
									notice. While efforts are made to maintain accuracy, Online CA
									Services makes no representations or warranties regarding
									correctness, reliability, or completeness of content.
								</p>
							</div>

							{/* 9. Third-Party Links */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									9. Third-Party Links
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									The website may include links to third-party platforms for
									convenience. Online CA Services does not control, endorse, or
									assume responsibility for their content or privacy practices.
								</p>
							</div>

							{/* 10. Jurisdiction */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									10. Jurisdiction
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									All activities on this website are governed by the laws of
									India. Any disputes shall be subject exclusively to the
									competent courts located in Delhi, India.
								</p>
							</div>
						</section>

						{/* Section B: Privacy Policy */}
						<section>
							<h2 className='text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-500'>
								B. Privacy Policy
							</h2>

							{/* 1. Definitions */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									1. Definitions
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									"User", "You", or "Your" refers to any individual accessing
									this portal. "Qualified professional" means an independent
									professional with relevant credentials engaged by the user
									through the platform.
								</p>
							</div>

							{/* 2. Data Controller */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									2. Data Controller
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Online CA Services determines the purpose of data processing
									for the operation of this portal. Contact details for
									privacy-related queries can be added later by the site
									operator.
								</p>
							</div>

							{/* 3. Information Collected */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									3. Information Collected
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									We may collect (a) personal identifiers such as name, email,
									and phone number; (b) documents or information submitted for
									matching with professionals; (c) technical data such as IP
									address and browser information.
								</p>
							</div>

							{/* 4. Purpose of Processing */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									4. Purpose of Processing
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Information collected is used solely for connecting you with a
									relevant qualified professional, responding to inquiries,
									improving portal performance, and complying with statutory
									obligations.
								</p>
							</div>

							{/* 5. Legal Basis for Processing */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									5. Legal Basis for Processing
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Processing is based on user consent, contractual necessity
									(for referral purposes), and compliance with applicable Indian
									law.
								</p>
							</div>

							{/* 6. Data Sharing */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									6. Data Sharing
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Information is shared only with qualified professionals
									relevant to your request or with service providers required to
									operate the portal (hosting, analytics, etc.). No information
									is sold or traded.
								</p>
							</div>

							{/* 7. User Due Diligence & Responsibility */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									7. User Due Diligence & Responsibility
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									By submitting data, you agree to independently verify any
									professional referred through this portal and hold Online CA
									Services harmless from any resulting disputes or losses.
								</p>
							</div>

							{/* 8. Data Retention */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									8. Data Retention
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Information is retained only as long as necessary for the
									referral process or as legally required. Data is securely
									deleted thereafter.
								</p>
							</div>

							{/* 9. Security Measures */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									9. Security Measures
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Industry-standard SSL encryption and restricted access
									policies are used to protect information. Despite precautions,
									the portal cannot guarantee absolute data security.
								</p>
							</div>

							{/* 10. Cookies and Analytics */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									10. Cookies and Analytics
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Cookies are used to enhance site experience. Users can disable
									cookies via browser settings. Analytics tools help assess site
									performance without identifying individuals.
								</p>
							</div>

							{/* 11. User Rights */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									11. User Rights
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									You may request access, correction, or deletion of your
									personal data by contacting the operator at the provided
									address.
								</p>
							</div>

							{/* 12. Grievance Officer */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									12. Grievance Officer
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									A Grievance Officer will be appointed as per Rule 5(9) of the
									Information Technology (Reasonable Security Practices and
									Procedures and Sensitive Personal Data or Information) Rules,
									2011.
								</p>
							</div>

							{/* 13. Policy Updates */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									13. Policy Updates
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									The Privacy Policy may be updated periodically. Continued use
									constitutes acceptance of any revisions.
								</p>
							</div>

							{/* 14. Governing Law */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									14. Governing Law
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									All matters are governed by Indian law with exclusive
									jurisdiction in Delhi.
								</p>
							</div>
						</section>

						{/* Section C: Terms of Use */}
						<section>
							<h2 className='text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-500'>
								C. Terms of Use
							</h2>

							{/* 1. Acceptance of Terms */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									1. Acceptance of Terms
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Accessing this website implies acceptance of all terms,
									privacy policies, and disclaimers. Users unwilling to comply
									must discontinue use immediately.
								</p>
							</div>

							{/* 2. Nature of Platform */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									2. Nature of Platform
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Online CA Services operates purely as an online connector that
									links users to qualified professionals. It does not provide
									direct professional or consultancy services.
								</p>
							</div>

							{/* 3. Eligibility */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									3. Eligibility
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Users must be legally competent under Indian law to enter into
									contracts. Minors or entities lacking legal capacity are not
									permitted to use the portal.
								</p>
							</div>

							{/* 4. Registration */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									4. Registration
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Users providing contact details warrant that information is
									true, complete, and accurate. Misrepresentation may result in
									termination of access.
								</p>
							</div>

							{/* 5. Professional Engagement */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									5. Professional Engagement
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Any engagement between user and professional occurs directly
									between those parties. Online CA Services is not involved in
									their contractual or commercial terms.
								</p>
							</div>

							{/* 6. User Obligations */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									6. User Obligations
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Users agree not to post unlawful material, hack, scrape, or
									disrupt the site. Users must verify professionals
									independently.
								</p>
							</div>

							{/* 7. Payments */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									7. Payments
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									If any payments are facilitated, they are made directly
									between the user and the professional. The portal does not
									handle client funds.
								</p>
							</div>

							{/* 8. Intellectual Property */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									8. Intellectual Property
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									All website content is protected under the Copyright Act,
									1957. The descriptive use of "CA India" is permitted under
									Section 30(2)(a) of the Trade Marks Act, 1999.
								</p>
							</div>

							{/* 9. Warranty Disclaimer */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									9. Warranty Disclaimer
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									This portal is provided "as is". Online CA Services offers no
									warranties regarding content accuracy or outcomes from
									engagements with professionals.
								</p>
							</div>

							{/* 10. Limitation of Liability */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									10. Limitation of Liability
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Online CA Services shall not be liable for damages, losses, or
									claims arising from engagements between users and
									professionals or reliance on any content.
								</p>
							</div>

							{/* 11. Indemnity */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									11. Indemnity
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Users agree to indemnify Online CA Services and its operators
									against all claims resulting from misuse or violation of these
									terms.
								</p>
							</div>

							{/* 12. Termination */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									12. Termination
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Online CA Services reserves the right to restrict access to
									any user who violates these terms.
								</p>
							</div>

							{/* 13. Governing Law and Jurisdiction */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									13. Governing Law and Jurisdiction
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									These Terms are governed by the laws of India, subject to the
									exclusive jurisdiction of Delhi courts.
								</p>
							</div>
						</section>

						{/* Section D: Refund & Cancellation Policy */}
						<section>
							<h2 className='text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-500'>
								D. Refund & Cancellation Policy
							</h2>

							{/* 1. Nature of Fees */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									1. Nature of Fees
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									The portal itself does not charge users for connecting with
									professionals unless specifically stated. Any fees are paid
									directly to the professional.
								</p>
							</div>

							{/* 2. Refund Eligibility */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									2. Refund Eligibility
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Refunds, where applicable, are governed solely by the refund
									policy of the professional engaged by the user. The portal has
									no involvement in financial transactions or refunds.
								</p>
							</div>

							{/* 3. Non-Refundable Components */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									3. Non-Refundable Components
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Government filing fees, taxes, and service charges are
									non-refundable once paid.
								</p>
							</div>

							{/* 4. Cancellation */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									4. Cancellation
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Users may cancel requests by written notice before
									professional engagement. Online CA Services may also decline
									service requests at its discretion.
								</p>
							</div>

							{/* 5. Dispute Resolution */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									5. Dispute Resolution
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Any disputes relating to fees or services must be resolved
									directly between the user and the professional concerned.
								</p>
							</div>

							{/* 6. Jurisdiction */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									6. Jurisdiction
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									All disputes relating to portal operation shall fall within
									Delhi jurisdiction.
								</p>
							</div>
						</section>

						{/* Section E: Copyright & Intellectual Property Notice */}
						<section>
							<h2 className='text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-500'>
								E. Copyright & Intellectual Property Notice
							</h2>

							{/* 1. Ownership */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									1. Ownership
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									All content, layout, and visual design of Online CA Services
									are the intellectual property of its operators, protected
									under the Copyright Act, 1957.
								</p>
							</div>

							{/* 2. Limited License */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									2. Limited License
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Users are granted a limited, non-exclusive, and
									non-transferable right to access this site for personal
									informational purposes only.
								</p>
							</div>

							{/* 3. Prohibited Uses */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									3. Prohibited Uses
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									Users shall not copy, reproduce, distribute, or create
									derivative works of site content without written consent.
								</p>
							</div>

							{/* 4. Reporting Infringement */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									4. Reporting Infringement
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									If you believe your copyrighted material has been used
									improperly, you may notify the operator using the provided
									contact details.
								</p>
							</div>

							{/* 5. Legal Reference */}
							<div className='mb-6'>
								<h3 className='text-lg font-semibold text-teal-700 mb-3'>
									5. Legal Reference
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									All use of "CA India" is descriptive under Section 30(2)(a) of
									the Trade Marks Act, 1999, and does not imply association with
									ICAI.
								</p>
							</div>
						</section>

						{/* Last Updated */}
						<div className='mt-10 pt-6 border-t border-gray-200'>
							<p className='text-sm text-gray-500 text-center'>
								Last Updated: {new Date().toLocaleDateString('en-IN')}
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
