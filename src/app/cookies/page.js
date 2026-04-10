import React from "react";
import PageHeader from "../../Components/Shared/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Vlad Weby",
  description: "Cookie policy for vladweby.com. Learn how we use cookies on our website.",
};

const CookiePolicy = () => {
  return (
    <>
      <PageHeader heading={"Cookie Policy"} page={"Cookies"} />
      <section className="pb_120">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="text-clr_pra text-lg mb-6">
                Last updated: April 10, 2026
              </p>

              <h2 className="text-white text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="text-clr_pra mb-8">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners. This Cookie Policy explains what cookies we use, why we use them, and your choices regarding their use.
              </p>

              <h2 className="text-white text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p className="text-clr_pra mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                <li><span className="text-white font-medium">Essential cookies</span> — These are necessary for the website to function properly. They enable basic features such as page navigation and access to secure areas. The website cannot function properly without these cookies.</li>
                <li><span className="text-white font-medium">Preference cookies</span> — These cookies allow the website to remember your choices (such as your cookie consent preference) and provide enhanced, more personalized features.</li>
                <li><span className="text-white font-medium">Analytics cookies</span> — These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website experience.</li>
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">3. Cookies We Use</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-clr_cusborder">
                      <th className="text-left text-white py-3 pr-4">Cookie Name</th>
                      <th className="text-left text-white py-3 pr-4">Type</th>
                      <th className="text-left text-white py-3 pr-4">Duration</th>
                      <th className="text-left text-white py-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-clr_cusborder">
                      <td className="text-clr_base py-3 pr-4 font-mono text-sm">cookie_consent</td>
                      <td className="text-clr_pra py-3 pr-4">Essential</td>
                      <td className="text-clr_pra py-3 pr-4">Persistent</td>
                      <td className="text-clr_pra py-3">Stores your cookie consent preference</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-white text-2xl font-semibold mb-4">4. Your Rights Under GDPR</h2>
              <p className="text-clr_pra mb-4">
                As a visitor from the European Union, you have certain rights under the General Data Protection Regulation (GDPR) and the ePrivacy Directive. These include:
              </p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                <li>The right to be informed about how your data is collected and used</li>
                <li>The right to access the personal data we hold about you</li>
                <li>The right to request correction of inaccurate personal data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to withdraw your consent at any time</li>
                <li>The right to lodge a complaint with the Slovak Data Protection Authority (Urad na ochranu osobnych udajov Slovenskej republiky)</li>
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">5. Managing Cookies</h2>
              <p className="text-clr_pra mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                <li><span className="text-white font-medium">Cookie consent banner</span> — When you first visit our website, you can choose to accept or decline non-essential cookies.</li>
                <li><span className="text-white font-medium">Browser settings</span> — Most web browsers allow you to manage cookies through their settings. You can set your browser to refuse cookies or to delete cookies that have already been set. Note that disabling cookies may affect the functionality of the website.</li>
                <li><span className="text-white font-medium">Clear storage</span> — You can clear your browser&#39;s local storage at any time to reset your cookie consent preference.</li>
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">6. Third-Party Cookies</h2>
              <p className="text-clr_pra mb-8">
                We may use third-party services that set their own cookies (for example, embedded content or analytics). We do not have control over these cookies. Please refer to the respective third-party privacy policies for more information about how they use cookies.
              </p>

              <h2 className="text-white text-2xl font-semibold mb-4">7. Data Controller</h2>
              <p className="text-clr_pra mb-4">
                The data controller responsible for this website is:
              </p>
              <div className="bg-[rgb(29_29_29)] rounded-xl p-6 mb-8">
                <p className="text-white mb-1">Vlad Weby</p>
                <p className="text-clr_pra mb-1">Bottova 2A, 811 09 Bratislava, Slovakia</p>
                <p className="text-clr_pra">
                  Email:{" "}
                  <Link href="mailto:v.hvorov73@gmail.com" className="text-clr_base duration-500 hover:opacity-80">
                    v.hvorov73@gmail.com
                  </Link>
                </p>
              </div>

              <h2 className="text-white text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-clr_pra mb-8">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically to stay informed about how we use cookies.
              </p>

              <h2 className="text-white text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-clr_pra mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="bg-[rgb(29_29_29)] rounded-xl p-6">
                <p className="text-clr_pra mb-1">
                  Email:{" "}
                  <Link href="mailto:v.hvorov73@gmail.com" className="text-clr_base duration-500 hover:opacity-80">
                    v.hvorov73@gmail.com
                  </Link>
                </p>
                <p className="text-clr_pra">
                  Phone:{" "}
                  <Link href="tel:+421919208426" className="text-clr_base duration-500 hover:opacity-80">
                    +421 919 208 426
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
