import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/cc3c25e6-2c94-4260-a6a4-a0a9ae782a53"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent text-secondary">
            Contact
          </p>
          <p className="text-secondary py-4">Please fill out the form below</p>
        </div>
        <input
          className="bg-secondary p-2 focus:outline-none focus:ring-2 focus:ring-accent"
          type="text"
          placeholder="Name"
          name="name"
          required="required"
        />
        <input
          className="my-4 p-2 bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
          type="email"
          placeholder="Mail"
          name="email"
          required="required"
        />
        <textarea
          className="bg-secondary p-2 focus:outline-none focus:ring-2 focus:ring-accent"
          name="message"
          rows="10"
          placeholder="Message"
          required="required"
        ></textarea>
        <button className="text-white border-2 hover:bg-accent hover:border-accent px-4 py-3 my-8 mx-auto flex items-center font-semibold">
          CONTACT
        </button>
      </form>
    </div>
  );
}

export default Contact;
