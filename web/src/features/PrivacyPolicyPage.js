import React from "react";

const PrivacyPolicy = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="content-container">
      <div className="conent-section">
        <h1>Privacy Policy</h1>

        <p>Effective Date: {currentDate}</p>

        <p>
          This Privacy Policy outlines the types of personal information
          collected by 'Shift It.' and how we use, store, and protect the
          information obtained from users when using our mobile application.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Personal Information:</h3>
        <p>
          We may collect certain personally identifiable information that you
          provide directly to us when using the App. This may include, but is
          not limited to:
        </p>
        <ul className="privacy-list">
          <li>Your name</li>
          <li>
            Contact information (such as email address, phone number, or mailing
            address)
          </li>
          <li>
            User-generated content (such as feedback or messages sent through
            the App)
          </li>
        </ul>

        <h3>1.2 Non-Personal Information:</h3>
        <p>
          We may also collect non-personal information automatically as you
          interact with the App. This may include:
        </p>
        <ul className="privacy-list">
          <li>
            Device information (such as device type, operating system version,
            unique device identifiers)
          </li>
          <li>
            Usage data (such as the actions you take within the App, time and
            date of your visits)
          </li>
        </ul>

        <h2>2. Use of Information</h2>
        <p>We may use the collected information for the following purposes:</p>
        <ul className="privacy-list">
          <li>To provide and maintain the App's functionality</li>
          <li>To respond to your inquiries, feedback, or support requests</li>
          <li>To personalize and enhance your experience with the App</li>
          <li>
            To send you promotional communications or important updates (with
            your consent, where required by applicable laws)
          </li>
          <li>
            To monitor and analyze usage patterns and improve our services
          </li>
          <li>
            To detect, prevent, and address technical issues, fraud, or illegal
            activities
          </li>
        </ul>

        <h2>3. Data Retention</h2>
        <p>
          We will retain your personal information only for as long as necessary
          to fulfill the purposes outlined in this Privacy Policy or as required
          by law. Non-personal information may be retained for statistical
          analysis and improvement of our services.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We take reasonable measures to protect the security and integrity of
          your personal information. However, please note that no method of
          transmission over the internet or electronic storage is 100% secure.
          While we strive to use commercially acceptable means to protect your
          data, we cannot guarantee its absolute security.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          The App may contain links to third-party websites or services that are
          not owned or controlled by us. This Privacy Policy does not cover the
          practices of such third parties. We encourage you to review the
          privacy policies of these third-party services before providing any
          personal information to them.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>
          The App is not intended for use by children under the age of 13. We do
          not knowingly collect personal information from children. If we become
          aware that we have collected personal information from a child under
          the age of 13, we will take the necessary steps to delete it.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Subject to applicable laws, you may have certain rights regarding the
          personal information we hold about you. These rights may include
          accessing, correcting, or deleting your personal information. To
          exercise your rights, please contact us using the information provided
          in the "Contact Us" section below.
        </p>

        <h2>8. Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy from time
          to time. Any changes will be effective when we post the revised policy
          in the App. We encourage you to review this Privacy Policy
          periodically for any updates.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at 'shift.it.contact.us@gmail.com'
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
