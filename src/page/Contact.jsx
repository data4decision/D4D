import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS to send emails directly from the frontend
import ContactBackground from "../assets/ContactBackground.jpg"; // Import the background image for the first section

const Contact = () => {
  // State to store form data (name, email, subject, message)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to store validation errors for the form fields
  const [errors, setErrors] = useState({});

  // State to track if the form is being submitted (to disable the button during submission)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to display a success or error message after form submission
  const [submitMessage, setSubmitMessage] = useState("");

  // Function to handle changes in form inputs (updates formData state when user types)
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the input field
    setFormData({ ...formData, [name]: value }); // Update the formData state with the new value
  };

  // Function to validate the form fields before submission
  const validateForm = () => {
    const newErrors = {}; // Object to store error messages
    // Check if name is empty
    if (!formData.name.trim()) newErrors.name = "Name is required";
    // Check if email is empty or invalid
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"; // Use a regex to check email format
    }
    // Check if subject is empty
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    // Check if message is empty
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors; // Return any errors found
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    setIsSubmitting(true); // Set submitting state to true (disables the button)
    setSubmitMessage(""); // Clear any previous submission message

    // Validate the form fields
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // If there are errors, set them in state and stop submission
      setIsSubmitting(false);
      return;
    }

    // Use EmailJS to send the form data as an email
    try {
      // Send the email using EmailJS
      await emailjs.send(
        "service_grn79ir", // Service ID from EmailJS dashboard
        "template_x93x25r", // Template ID from EmailJS dashboard
        {
          name: formData.name, // Map form fields to template variables
          email: formData.email, // This will be used as the "To Email" in the template ({{email}})
          subject: formData.subject, // This will be used in the template subject ({{subject}})
          message: formData.message, // This will be used in the template body ({{message}})
        },
        "ZCDvTsahGB8YnPGIU" // Public Key from EmailJS dashboard
      );

      // If email is sent successfully, show a success message and reset the form
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form fields
      setErrors({}); // Clear any validation errors
    } catch (error) {
      // If there’s an error sending the email, show an error message
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      // After submission (success or failure), set submitting state back to false
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Section 1: Background Image with Text */}
      <section
        className="h-[300px] bg-cover bg-center bg-no-repeat flex justify-center items-center text-center sm:h-[600px]"
        style={{ backgroundImage: `url(${ContactBackground})` }} // Set the background image for the section
      >
        <div>
          {/* Heading: "CONTACT US" */}
          <h1 className="text-[40px] sm:text-[70px] text-[#0b0b5c] mb-4 font-bold font-['Montserrat'] tracking-tight">
            CONTACT US
          </h1>
          {/* Paragraph: "Let's have a chat." */}
          <p className="text-[20px] sm:text-[40px] text-[#171744] font-bold font-['Montserrat']">
            Let's have a chat.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="bg-[#0B0B5C] py-16 flex justify-center items-center">
        {/* Form container: 50% width, centered with padding */}
        <div className="w-full max-w-[80%] mx-auto px-4 sm:px-6 sm:w-full sm:max-w-[50%]   md:px-8">
          {/* Form element with onSubmit handler */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name" // Name attribute matches the key in formData
                value={formData.name} // Controlled input: value from state
                onChange={handleChange} // Update state when user types
                placeholder="Your Name" // Placeholder text
                className={`w-full px-4 py-3 text-[15px] text-white bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:border-white focus:ring-2 focus:ring-white focus:outline-none transition duration-300 ${
                  errors.name ? "border-red-500" : "" // Show red border if there's an error
                }`}
              />
              {/* Display error message if name validation fails */}
              {errors.name && (
                <p className="text-red-400 text-[14px] mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full px-4 py-3 text-[15px] text-white bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:border-white focus:ring-2 focus:ring-white focus:outline-none transition duration-300 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-[14px] mt-1">{errors.email}</p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full px-4 py-3 text-[15px] text-white bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:border-white focus:ring-2 focus:ring-white focus:outline-none transition duration-300 ${
                  errors.subject ? "border-red-500" : ""
                }`}
              />
              {errors.subject && (
                <p className="text-red-400 text-[14px] mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message Field (Textarea) */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5" // Set the height of the textarea
                className={`w-full px-4 py-3 text-[15px] text-white bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:border-white focus:ring-2 focus:ring-white focus:outline-none transition duration-300 ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-[14px] mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting} // Disable the button while submitting
              className={`w-full py-3 text-[15px] font-semibold font-['Montserrat'] text-[#0B0B5C] bg-white rounded-md hover:bg-gray-200 transition duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "" // Dim the button when submitting
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}{" "}
              {/* Show "Sending..." while submitting */}
            </button>

            {/* Submission Message (Success or Error) */}
            {submitMessage && (
              <p
                className={`text-[14px] mt-4 text-center ${
                  submitMessage.includes("successfully")
                    ? "text-green-400" // Green for success
                    : "text-red-400" // Red for error
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
