import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6 text-center">
        Fill in the form below to order your cookies! 🍪
      </p>
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Your message has been sent! We’ll get back to you soon.");
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="order"
            className="block text-sm font-medium text-gray-700"
          >
            Your Order
          </label>
          <textarea
            id="order"
            name="order"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="What would you like to order?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          Send Order
        </button>
      </form>
    </div>
  );
};

export default Contact;
