import React from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Feel free to reach out to me through this form or at my email address
        below.
      </p>
      <ContactForm />
      <p>Email: example@example.com</p>
    </div>
  );
};

export default ContactPage;
