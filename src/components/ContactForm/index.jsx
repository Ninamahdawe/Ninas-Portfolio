import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="message">
          Message:
          <textarea id="message" name="message" />
        </label>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
