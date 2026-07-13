import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PlaystorePrivacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Needin</title>
        <meta name="description" content="Official Privacy Policy for the Needin mobile application operated by Viec Carry India Pvt Ltd." />
      </Helmet>

      <Header />

      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Privacy Policy
              </h1>
              <div className="text-muted-foreground mb-8 flex gap-4 text-sm font-semibold">
                <span>Effective Date: 13 July 2026</span>
                <span>Last Updated: 13 July 2026</span>
              </div>

              <div className="bg-destructive/10 border-l-4 border-destructive p-6 mb-8 rounded-r-lg">
                <p className="text-destructive-foreground font-semibold">
                  This Privacy Policy explains how Needin ("Needin", "we", "our", or "us"), operated by <strong>Viec Carry India Pvt Ltd</strong>, collects, uses, stores, protects, shares, and processes information when you use the Needin mobile application, website, and related services.
                </p>
              </div>

              <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                <p>Needin is an Indian peer-to-peer logistics platform that connects:</p>
                <ul className="list-disc pl-8 mb-6">
                  <li><strong>Travellers</strong> with verified accounts and available luggage space.</li>
                  <li><strong>Senders</strong> who need parcels transported safely along matching routes.</li>
                </ul>
                <p>Needin is a technology platform and does not physically transport parcels itself.</p>
                
                <p>This Privacy Policy applies to:</p>
                <ul className="list-disc pl-8 mb-10">
                  <li>Needin Android Application</li>
                  <li>Needin Website</li>
                  <li>Needin Customer Support</li>
                  <li>Needin Communication Services</li>
                  <li>Needin Notifications</li>
                  <li>Needin Future Services unless otherwise stated</li>
                </ul>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">1. Eligibility (18+ Age Restriction)</h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 mb-4 rounded-r-lg text-destructive-foreground font-semibold">
                  Needin is strictly intended for individuals who are <strong>18 years of age or older</strong>.
                </div>
                <p>Users under 18 years of age are not permitted to register, create accounts, post journeys, book deliveries, or use the service. If we become aware that we have collected personal data from a minor under 18, we will immediately suspend the account and delete the associated data in accordance with applicable law.</p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-10 pb-2 border-b">2. Information We Collect</h2>
                <p>Depending on how you use Needin, we may collect different categories of information to provide, maintain, improve and secure the Service. Some information is provided directly by you, while other information is generated automatically through your use of the platform.</p>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">2.1 Information You Provide Directly:</h3>
                <ul className="list-disc pl-8 mb-6">
                  <li><strong>Account Information:</strong> Full Name, Mobile Number, Email Address, Date of Birth, Gender, City, and Profile Picture.</li>
                  <li><strong>Journey Information (Travellers):</strong> Origin, Destination, Journey Date, Journey Time, Travel Mode, Weight Capacity, Space Type, Routes, Google Place IDs, coordinates (Latitude/Longitude), State, District, and Locality.</li>
                  <li><strong>Parcel Information (Senders):</strong> Pickup and Delivery Locations, Preferred Delivery Date, Parcel Weight, Category, Description, Delivery Instructions, and Verification PINs.</li>
                  <li><strong>Support Information:</strong> Communications with our support team, screenshots provided voluntarily, and technical logs.</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">2.2 Automatically Collected Information:</h3>
                <div className="overflow-x-auto border rounded-lg mb-6">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-4 border-b font-bold text-foreground w-1/3">Category</th>
                        <th className="p-4 border-b font-bold text-foreground">Examples</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 font-semibold text-foreground">Device & Network Info</td>
                        <td className="p-4">Device model, Android OS version, app version, IP address, and connection status.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground">Session Logs</td>
                        <td className="p-4">Authentication tokens, login timestamps, and application performance data (response times, availability).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">2.3 Information We Do NOT Collect:</h3>
                <p>As of the Effective Date of this Privacy Policy, Needin does NOT intentionally collect or request the following categories of personal information:</p>
                <ul className="list-disc pl-8 mb-10">
                  <li>Background Location Data (location is only accessed when the app is active in the foreground).</li>
                  <li>Carrier-level SMS Messages or Call Logs.</li>
                  <li>Financial credentials (credit/debit cards, bank accounts, or UPI PINs).</li>
                  <li>Device Contacts or Microphone Recordings.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">3. How We Use Your Information</h2>
                <p>We process your personal information only for legitimate business and operational purposes:</p>
                <ul className="list-disc pl-8 mb-10">
                  <li><strong>Core Functionality:</strong> Authenticating users via OTP, matching Travellers with Senders, and managing parcel bookings.</li>
                  <li><strong>Communications:</strong> Enabling in-app chat between users and delivering push notifications for booking updates.</li>
                  <li><strong>Safety & Security:</strong> Verifying user profiles, detecting fraudulent activity, preventing spam, and managing platform abuse.</li>
                  <li><strong>Operations:</strong> Providing customer support, resolving disputes, and complying with applicable laws.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">4. App Permissions</h2>
                <p>To function correctly, the Needin app requests the following foreground permissions:</p>
                <ul className="list-decimal pl-8 mb-10">
                  <li className="mb-2"><strong>Location Permission (Foreground Only):</strong> Used to search coordinates and autofill pickup/drop-off locations. We do NOT track location in the background.</li>
                  <li className="mb-2"><strong>Notifications Permission:</strong> Used to send push notifications about bookings, chat messages, and account updates.</li>
                  <li className="mb-2"><strong>Storage/Media Access (Optional):</strong> Used solely to allow you to upload a profile picture from your gallery or attach screenshots for support.</li>
                  <li className="mb-2"><strong>Phone Dialer (Optional):</strong> Allows you to launch your default phone dialer to call the matched Traveller/Sender. We do not access call logs or make calls automatically.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">5. Identity Verification</h2>
                <p>To maintain platform trust, Needin offers identity verification. If you choose to verify your profile:</p>
                <ul className="list-disc pl-8 mb-10">
                  <li>We integrate with secure verification services (such as DigiLocker) to verify your credentials.</li>
                  <li><strong>We do not store your Aadhaar or government ID numbers</strong> on our servers. We only collect and store verification status (e.g., "Verified" or "Unverified"), the verified name, and a secure verification token.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">6. Location Services & Routing</h2>
                <p className="mb-10">Needin uses Google Maps Platform and Google Places APIs. Location information is collected only when you actively select or confirm locations within the app. We do not monitor your live location in the background. Latitude, longitude, and place metadata are processed on our servers (via Supabase) to calculate matching routes between Travellers and Senders.</p>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">7. In-App Chat Messaging</h2>
                <p className="mb-10">When a booking is accepted, Needin provides a secure, in-app messaging channel. We store in-app chat messages, timestamps, and message statuses (sent/read) to maintain conversation history, assist in dispute resolution, and protect platform safety. We do not read or access your device's external SMS messages.</p>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">8. Third-Party Service Providers</h2>
                <p>We partner with selected providers to deliver core app services. These providers process data according to their own privacy policies:</p>
                <div className="overflow-x-auto border rounded-lg mb-10 mt-4">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-4 border-b font-bold text-foreground w-1/3">Service</th>
                        <th className="p-4 border-b font-bold text-foreground">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 font-semibold text-foreground">Supabase</td>
                        <td className="p-4">Backend database, secure authentication infrastructure, storage, and real-time APIs.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground">Google Maps Platform</td>
                        <td className="p-4">Map rendering, place autocomplete search, and route matching.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground">MSG91</td>
                        <td className="p-4">Secure delivery of mobile verification OTPs.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground">Firebase Cloud Messaging (FCM)</td>
                        <td className="p-4">Push notification delivery.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">9. Data Sharing</h2>
                <p>We do not sell, rent, or trade your personal data with advertisers. Your data is shared only under the following circumstances:</p>
                <ul className="list-disc pl-8 mb-10">
                  <li><strong>With Other Users:</strong> Your name, profile picture, and relevant journey/parcel details are shared with your match to complete a booking.</li>
                  <li><strong>Service Providers:</strong> Shared securely with the infrastructure providers listed in Section 8.</li>
                  <li><strong>Legal Requirements:</strong> Shared with regulatory or law enforcement authorities if required by law or to protect safety and property.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">10. Data Retention</h2>
                <p>We retain data only as long as necessary to provide our services and satisfy legal obligations:</p>
                <div className="overflow-x-auto border rounded-lg mb-10 mt-4">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-4 border-b font-bold text-foreground w-1/3">Category</th>
                        <th className="p-4 border-b font-bold text-foreground">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 font-semibold text-foreground">Account details</td>
                        <td className="p-4">Retained until you request account deletion.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground">Journey and booking records</td>
                        <td className="p-4">Stored to maintain operational logs and comply with regulatory/tax audits.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground">Security logs</td>
                        <td className="p-4">Kept temporarily to identify and prevent abuse.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">11. Data Security</h2>
                <p>Needin implements industry-standard administrative, organizational, and technical safeguards:</p>
                <ul className="list-disc pl-8 mb-10">
                  <li>All communications are encrypted in transit via HTTPS (TLS/SSL).</li>
                  <li>Row-Level Security (RLS) is enforced on our backend database to isolate and secure user data.</li>
                  <li>Device sessions use secure, encrypted local tokens.</li>
                  <li>While we implement standard protections, no internet-based service can be guaranteed 100% secure.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">12. Cookies & Local Storage</h2>
                <p className="mb-10">The Needin mobile application uses local device storage to cache session tokens, user preferences, and notification settings. This is done to keep you logged in and optimize app loading performance.</p>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">13. Account Deletion & Data Erasure</h2>
                <p>Needin fully supports your right to data deletion:</p>
                <ul className="list-disc pl-8 mb-10">
                  <li><strong>In-App Deletion:</strong> You can request account deletion directly under <strong>Profile &gt; Delete Account</strong>.</li>
                  <li><strong>Web-Based Deletion:</strong> You can also request deletion online by emailing our support team at <a href="mailto:support@withneedin.com" className="text-primary hover:underline">support@withneedin.com</a> or visiting our website.</li>
                  <li><strong>Effect of Deletion:</strong> Upon receiving your request, we will delete or permanently anonymize your name, email, phone number, profile picture, and login history within 30 days. Historical transaction logs and bookings may be retained in an anonymized format where legally required.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">14. Your Privacy Rights</h2>
                <p className="mb-10">Under applicable laws, including India’s Digital Personal Data Protection (DPDP) Act, 2023, you have the right to access your information, correct inaccuracies, withdraw consent, and request deletion. Direct all requests to our Grievance Officer using the contact details below.</p>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">15. International Transfers</h2>
                <p className="mb-10">Needin primarily operates and stores data in India. If our third-party infrastructure providers process data internationally, we ensure they implement equivalent standard security protections to safeguard your data.</p>

                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">16. Contact & Grievance Information</h2>
                <p className="mb-6">If you have questions regarding this policy or wish to exercise your rights, please contact us:</p>
                
                <div className="overflow-x-auto border rounded-lg mb-8">
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 font-semibold text-foreground bg-muted w-1/3">Company</td>
                        <td className="p-4">Viec Carry India Pvt Ltd</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground bg-muted">Brand</td>
                        <td className="p-4">Needin</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground bg-muted">Website</td>
                        <td className="p-4"><a href="https://www.withneedin.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://www.withneedin.com</a></td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground bg-muted">Email</td>
                        <td className="p-4"><a href="mailto:support@withneedin.com" className="text-primary hover:underline">support@withneedin.com</a></td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground bg-muted">Business Address</td>
                        <td className="p-4">BG-60, Main NH-58, Yogi Puram, Meerut – 250002, Uttar Pradesh, India</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-foreground bg-muted">Business Hours</td>
                        <td className="p-4">Monday – Saturday<br/>9:00 AM – 6:00 PM (IST)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Grievance Officer (India):</h3>
                <ul className="list-disc pl-8 mb-6">
                  <li><strong>Designation:</strong> Grievance Officer</li>
                  <li><strong>Address:</strong> BG-60, Main NH-58, Yogi Puram, Meerut – 250002, Uttar Pradesh, India</li>
                  <li><strong>Business Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM (IST)</li>
                  <li><strong>Response Time:</strong> Within 7 working days</li>
                </ul>
                <p className="mb-10"><strong>Governing Law:</strong> Governed by the laws of India, subject to the jurisdiction of the competent courts in Uttar Pradesh, India.</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PlaystorePrivacy;
