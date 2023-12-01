import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light p-4">
      <h1 className="display-4 font-weight-bold mb-4">Contact Page</h1>
      <p className="lead mb-4 text-center">
        Feel free to reach out to me through this form or at my email address
        below.
      </p>
      <ContactForm />
      <p className="lead mt-4">Email: example@example.com</p>
    </div>
  );
};

export default ContactPage;
