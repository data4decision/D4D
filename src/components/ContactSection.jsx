import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const ContactSection = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for submission message
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Validate the form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    // Send the email using EmailJS
    try {
      await emailjs.send(
        "service_grn79ir", // Service ID (same as in Contact.jsx)
        "template_x93x25r", // Template ID (same as in Contact.jsx)
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "ZCDvTsahGB8YnPGIU" // Public Key (same as in Contact.jsx)
      );

      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset the form
      setErrors({});
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white h-[500px] py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 h-full items-center">
        {/* First Column: Contact Information */}
        <div className="flex-1 text-[#0B0B5C]">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-4">
            Nipco Filling Station Along Old Jebba Road Sango Area, Ilorin Kwara
            State.
          </p>
          <p className="text-lg mb-4">
            Phone number:{" "}
            <a
              href="https://wa.me/2349030031328"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-orange-500 transition"
            >
              09030031328
            </a>
          </p>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:adegbesanoluwakayode52@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-orange-500 transition"
            >
              data4decison25@gmail.com
            </a>
          </p>
        </div>

        {/* Second Column: Contact Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`p-3 rounded-md border-2 border-[#0B0B5C] bg-transparent text-[#0B0B5C] placeholder-gray focus:outline-none focus:border-orange-500 transition w-full ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`p-3 rounded-md border-2 border-[#0B0B5C] bg-transparent text-[#0B0B5C] placeholder-gray focus:outline-none focus:border-orange-500 transition w-full ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className={`p-3 rounded-md border-2 border-[#0B0B5C] bg-transparent text-[#0B0B5C] placeholder-gray focus:outline-none focus:border-orange-500 transition w-full resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-transparent border-2 border-[#0B0B5C] text-[#0B0B5C] px-6 py-2 rounded-md hover:bg-[#f47b20] hover:border-orange-500 transition self-start ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {/* Submission Message */}
            {submitMessage && (
              <p
                className={`text-sm mt-2 ${
                  submitMessage.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
