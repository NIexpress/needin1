import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AccountDeletion = () => {
  return (
    <>
      <Helmet>
        <title>Account & Data Deletion Policy - Needin</title>
        <meta name="description" content="Official Account and Data Deletion Policy for the Needin platform operated by Viec Carry India Pvt Ltd." />
      </Helmet>

      <Header />

      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Account & Data Deletion Policy
              </h1>
              <div className="text-muted-foreground mb-8 flex gap-4 text-sm font-semibold">
                <span>Effective Date: 13 July 2026</span>
                <span>Last Updated: 13 July 2026</span>
              </div>

              <div className="bg-destructive/10 border-l-4 border-destructive p-6 mb-8 rounded-r-lg">
                <p className="text-destructive-foreground font-semibold">
                  <strong>Permanent Action Warning:</strong> Deleting your Needin account is irreversible. All of your personal identifiers, profile credentials, and verification logs will be erased permanently from our databases.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Needin, we believe you should always remain in control of your personal information. If you no longer wish to use our logistics marketplace services, you have the right to request deletion of your account and all associated personal data at any time.
              </p>

              <div className="space-y-10 text-muted-foreground text-lg leading-relaxed">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">1. Ways to Delete Your Account</h2>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Option A: Delete Inside the Needin App (Recommended)</h3>
                  <p className="mb-4">This is the fastest method and begins execution immediately via a direct, secure connection to our database servers.</p>
                  
                  <div className="bg-muted/50 border border-border p-6 rounded-lg space-y-4 my-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</div>
                      <p className="m-0">Open the <strong>Needin App</strong> on your mobile device.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</div>
                      <p className="m-0">Tap on the <strong>Profile</strong> tab in the navigation bar.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</div>
                      <p className="m-0">Scroll down to the bottom and select <strong>Delete Account</strong>.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</div>
                      <p className="m-0">Review the warning details and tap <strong>Continue</strong> on the first prompt.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">5</div>
                      <p className="m-0">Confirm the final prompt by tapping <strong>Delete My Account</strong>.</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Option B: Request Deletion via Email Support</h3>
                  <p className="mb-2">If you have already uninstalled the application or cannot access your account profile, submit an email request to our compliance team:</p>
                  <ul className="list-disc pl-8 mb-4">
                    <li><strong>Email Address:</strong> <a href="mailto:support@withneedin.com" className="text-primary hover:underline">support@withneedin.com</a></li>
                    <li><strong>Email Subject:</strong> Needin Account Deletion Request</li>
                    <li><strong>Required Details to Process:</strong> Your registered Full Name, Mobile Number, and registered Email Address.</li>
                  </ul>
                  <p className="italic text-sm">To prevent unauthorized deletions, our compliance team will perform verification steps to confirm ownership of the phone number before processing the request.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">2. What Data is Permanently Deleted?</h2>
                  <p className="mb-6">Upon successful processing of the account deletion, the following items are immediately hard-deleted from our Supabase servers and local device storage:</p>
                  
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="border p-5 rounded-lg bg-card">
                      <h4 className="font-bold text-foreground mb-2">Profile Identity Records</h4>
                      <p className="text-sm">Your name, date of birth, gender, profile photo, city, and account credentials are permanently erased.</p>
                    </div>
                    <div className="border p-5 rounded-lg bg-card">
                      <h4 className="font-bold text-foreground mb-2">Session & Device Logs</h4>
                      <p className="text-sm">All active authentication tokens, login histories, notification preferences, and FCM registration tokens are wiped.</p>
                    </div>
                    <div className="border p-5 rounded-lg bg-card">
                      <h4 className="font-bold text-foreground mb-2">Verification Logs</h4>
                      <p className="text-sm">All internal identity verification status records and associated service success tokens are removed.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">3. What Happens to Journeys and Bookings?</h2>
                  <p className="mb-4">To preserve operational records and comply with financial auditing, transaction data undergoes a minimization and anonymization process:</p>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6 mb-2">Journeys</h3>
                  <p className="mb-4">All historical travel routes and posted journeys associated with your profile are soft-deleted and hidden. They will never appear in matching search results or future booking streams.</p>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6 mb-2">Bookings</h3>
                  <p>Completed, cancelled, or draft parcel delivery bookings are retained for legal audit, tax, and dispute resolution workflows. However, all personal identifiers (such as names and contact numbers) are removed, leaving only the raw anonymized transaction details.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">4. Handling of In-App Messages and Photos</h2>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6 mb-2">In-App Messages</h3>
                  <p className="mb-4">In-app conversations remain visible to the other matching participant (traveler or sender) to preserve their booking records and transaction history. However, your name and profile picture are replaced with a generic "Deleted User" label, completely decoupling your personal identity from the chat logs.</p>
                  
                  <h3 className="text-xl font-bold text-foreground mt-6 mb-2">Profile Photos</h3>
                  <p>Your uploaded profile photograph is immediately and permanently deleted from our secure cloud storage buckets (Supabase Storage).</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">5. Data Retention & Legal Requirements</h2>
                  <p className="mb-4">Certain limited transaction data may be retained only when permitted or mandated by applicable laws (such as India's Digital Personal Data Protection Act, 2023) under the following conditions:</p>
                  <ul className="list-disc pl-8 mb-4 space-y-2">
                    <li>To comply with regulatory audits, tax reporting, or legal disputes.</li>
                    <li>To assist with active law enforcement requests or judicial orders.</li>
                    <li>To detect and prevent platform abuse, fraud, or cybersecurity threats.</li>
                  </ul>
                  <p>Any retained backup records are stored securely, isolated from active production environments, and minimized to the maximum extent possible.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">6. Processing and Deletion Timelines</h2>
                  <p>In-app requests execute immediately. For manual email requests, verification and deletion workflows are completed within a maximum window of <strong>30 days</strong>. Once the final deletion signal completes, your account details are unrecoverable.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b">7. Contact & Compliance Information</h2>
                  <p className="mb-6">For questions regarding this Deletion Policy or to submit complaints, please contact our support team:</p>
                  
                  <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-4 border-b font-bold text-foreground w-1/3">Operator</th>
                          <th className="p-4 border-b font-bold text-foreground">Viec Carry India Pvt Ltd</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-4 font-semibold text-foreground">Brand</td>
                          <td className="p-4">Needin</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-foreground">Support Email</td>
                          <td className="p-4"><a href="mailto:support@withneedin.com" className="text-primary hover:underline">support@withneedin.com</a></td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-foreground">Official Website</td>
                          <td className="p-4"><a href="https://www.withneedin.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://www.withneedin.com</a></td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-foreground">Business Address</td>
                          <td className="p-4">BG-60, Main NH-58, Yogi Puram, Meerut – 250002, Uttar Pradesh, India</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 p-6 bg-muted rounded-lg border">
                    <p className="mb-2"><strong>Grievance Office Hours:</strong> Monday through Saturday, 9:00 AM to 6:00 PM (IST).</p>
                    <p>All deletion disputes will be addressed within 7 business days.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AccountDeletion;
