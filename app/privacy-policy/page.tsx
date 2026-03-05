import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Houston Pro Plumbing',
  description: 'Houston Pro Plumbing privacy policy - How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed">
                Houston Pro Plumbing collects information you provide directly to us, such as when you contact us for services, request a quote, or schedule an appointment. This may include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Name and contact information (phone number, email, address)</li>
                <li>Service details and plumbing issues</li>
                <li>Payment information (processed securely through third-party processors)</li>
                <li>Communication records (calls, emails, text messages)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide plumbing services and respond to service requests</li>
                <li>Process payments and send invoices</li>
                <li>Communicate with you about appointments and service updates</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Information Sharing</h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Payment processors for transaction processing</li>
                <li>Service providers who assist in our operations (e.g., scheduling software)</li>
                <li>When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Your Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <p className="text-slate-600">Houston Pro Plumbing</p>
                <p className="text-slate-600">Houston, TX</p>
                <p className="text-slate-600">Phone: (832) 555-0123</p>
                <p className="text-slate-600">Email: info@houstonproplumbing.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
