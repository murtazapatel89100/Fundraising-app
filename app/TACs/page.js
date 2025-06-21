import React from "react";

const TACs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center headland-one-regular">
        Terms and Conditions
      </h1>

      <p className="text-sm text-gray-400 mb-6 text-center">
        Effective Date: January 1, 2025
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold merriweather-regular mb-2">
            1. Introduction
          </h2>
          <p className="hedvig-letters-sans-regular leading-relaxed text-gray-300">
            Welcome to GetMeAChai. These Terms and Conditions govern your use of
            our platform. By accessing or using our services, you agree to
            comply with and be bound by these terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold merriweather-regular mb-2">
            2. Eligibility
          </h2>
          <p className="hedvig-letters-sans-regular leading-relaxed text-gray-300">
            You must be at least 18 years old to use our platform. By using our
            services, you confirm that you meet this requirement.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold merriweather-regular mb-2">
            3. User Obligations
          </h2>
          <p className="hedvig-letters-sans-regular leading-relaxed text-gray-300">
            Users agree to provide accurate information and use the platform
            responsibly. You must not use the platform for any illegal or
            unauthorized purpose.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold merriweather-regular mb-2">
            4. Payments and Refunds
          </h2>
          <p className="hedvig-letters-sans-regular leading-relaxed text-gray-300">
            Payments made through GetMeAChai are final. We do not offer refunds
            unless specifically stated under a project’s refund policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold merriweather-regular mb-2">
            5. Intellectual Property
          </h2>
          <p className="hedvig-letters-sans-regular leading-relaxed text-gray-300">
            All content, trademarks, and data on this platform are the property
            of their respective owners and protected by applicable intellectual
            property laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold merriweather-regular mb-2">
            6. Termination
          </h2>
          <p className="hedvig-letters-sans-regular leading-relaxed text-gray-300">
            We reserve the right to terminate or suspend your access to the
            platform at any time, without notice, for conduct that violates
            these terms or is otherwise harmful to other users.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold merriweather-regular mb-2">
            7. Governing Law
          </h2>
          <p className="hedvig-letters-sans-regular leading-relaxed text-gray-300">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of India. Any disputes will be subject to
            the jurisdiction of the courts in Pune, Maharashtra.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold merriweather-regular mb-2">
            8. Contact Us
          </h2>
          <p className="hedvig-letters-sans-regular leading-relaxed text-gray-300">
            If you have any questions about these Terms, please contact us at:{" "}
            <a
              href="mailto:support@getmeachai.com"
              className="text-cyan-400 hover:underline"
            >
              support@getmeachai.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TACs;
