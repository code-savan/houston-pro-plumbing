import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - DYZ Plumbing',
  description: 'DYZ Plumbing terms of service - Agreement for plumbing services and use of our website.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Agreement to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By using DYZ Plumbing's services or website, you agree to these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Services Description</h2>
              <p className="text-slate-600 leading-relaxed">
                DYZ Plumbing provides professional plumbing services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Emergency plumbing repairs</li>
                <li>Drain cleaning and unclogging</li>
                <li>Water heater installation and repair</li>
                <li>Pipe installation and repiping</li>
                <li>Fixture repair and installation</li>
                <li>Bathroom and kitchen plumbing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Service Agreements</h2>
              <p className="text-slate-600 leading-relaxed">
                By requesting our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide accurate information about your plumbing needs</li>
                <li>Allow our technicians reasonable access to your property</li>
                <li>Pay for services rendered as agreed</li>
                <li>Follow safety guidelines provided by our technicians</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Pricing and Payment</h2>
              <p className="text-slate-600 leading-relaxed">
                All services are provided at the rates quoted at the time of service. Payment is due upon completion of services unless other arrangements are made in writing. We accept various payment methods including cash, check, and major credit cards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Warranty and Guarantees</h2>
              <p className="text-slate-600 leading-relaxed">
                DYZ Plumbing stands behind our workmanship with a 30-day warranty on labor and manufacturer warranties on parts. This warranty does not cover damage caused by misuse, improper maintenance, or external factors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                DYZ Plumbing shall not be liable for any indirect, incidental, special, or consequential damages resulting from our services. Our total liability for any claim shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Emergency Services</h2>
              <p className="text-slate-600 leading-relaxed">
                Emergency services are available 24/7. Emergency rates may apply outside normal business hours. By requesting emergency service, you agree to the applicable emergency service rates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Property Access</h2>
              <p className="text-slate-600 leading-relaxed">
                Customers must provide safe and reasonable access to plumbing systems. DYZ Plumbing is not responsible for damage to existing systems that were not properly maintained or that fail during normal service procedures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Termination of Service</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to refuse or terminate service for any reason, including but not limited to unsafe working conditions, threatening behavior, or non-payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of Texas. Any disputes shall be resolved in Harris County, Texas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                DYZ Plumbing reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">Contact Information</h2>
              <p className="text-slate-600 leading-relaxed">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <p className="text-slate-600">DYZ Plumbing</p>
                <p className="text-slate-600">Houston, TX</p>
                <p className="text-slate-600">Phone: +1 832-877-9600</p>
                <p className="text-slate-600">Email: service@dyzplumbing.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
