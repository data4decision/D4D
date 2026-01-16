// src/components/AppointmentSection.jsx
import React, { useState, useEffect } from "react"; // Add useEffect
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser"; // Import EmailJS

const AppointmentSection = () => {
  // State for calendar visibility and selected dates
  const [showConsultationCalendar, setShowConsultationCalendar] =
    useState(false);
  const [showPhoneCallCalendar, setShowPhoneCallCalendar] = useState(false);
  const [consultationDate, setConsultationDate] = useState(null);
  const [phoneCallDate, setPhoneCallDate] = useState(null);

  // State for form visibility and data
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showPhoneCallForm, setShowPhoneCallForm] = useState(false);
  const [consultationFormData, setConsultationFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [phoneCallFormData, setPhoneCallFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init("YdXH7zCJtfM6CuSxE"); // Replace with your EmailJS Public Key
  }, []); // Empty dependency array ensures this runs once on component mount

  // Handlers for calendar visibility
  const toggleConsultationCalendar = () => {
    setShowConsultationCalendar(!showConsultationCalendar);
    setShowPhoneCallCalendar(false);
    setShowConsultationForm(false);
    setShowPhoneCallForm(false);
  };

  const togglePhoneCallCalendar = () => {
    setShowPhoneCallCalendar(!showPhoneCallCalendar);
    setShowConsultationCalendar(false);
    setShowConsultationForm(false);
    setShowPhoneCallForm(false);
  };

  // Handlers for form visibility after date selection
  const proceedToConsultationForm = () => {
    if (consultationDate) {
      setShowConsultationCalendar(false);
      setShowConsultationForm(true);
    } else {
      alert("Please select a date and time for your consultation.");
    }
  };

  const proceedToPhoneCallForm = () => {
    if (phoneCallDate) {
      setShowPhoneCallCalendar(false);
      setShowPhoneCallForm(true);
    } else {
      alert("Please select a date and time for your phone call.");
    }
  };

  // Handlers for form input changes
  const handleConsultationFormChange = (e) => {
    const { name, value } = e.target;
    setConsultationFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneCallFormChange = (e) => {
    const { name, value } = e.target;
    setPhoneCallFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handlers for form submission with EmailJS
  const submitConsultation = async (e) => {
    e.preventDefault();
    if (
      !consultationFormData.name ||
      !consultationFormData.email ||
      !consultationFormData.details
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const appointmentDetails = {
      type: "Consultation",
      date: consultationDate.toLocaleString(),
      name: consultationFormData.name,
      email: consultationFormData.email,
      details: consultationFormData.details,
      bookedAt: new Date().toLocaleString(), // Current date and time: May 26, 2025, 11:59 AM WAT
    };

    try {
      await emailjs.send(
        "service_123abc",
        "template_7eq51uh",
        appointmentDetails
      );
      alert("Appointment booked successfully! Details sent to admin.");
      setShowConsultationForm(false);
      setConsultationDate(null);
      setConsultationFormData({ name: "", email: "", details: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send appointment details.");
    }
  };

  const submitPhoneCall = async (e) => {
    e.preventDefault();
    if (
      !phoneCallFormData.name ||
      !phoneCallFormData.email ||
      !phoneCallFormData.details
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const appointmentDetails = {
      type: "Phone Call",
      date: phoneCallDate.toLocaleString(),
      name: phoneCallFormData.name,
      email: phoneCallFormData.email,
      details: phoneCallFormData.details,
      bookedAt: new Date().toLocaleString(), // Current date and time: May 26, 2025, 11:59 AM WAT
    };

    try {
      await emailjs.send(
        "service_123abc",
        "template_7eq51uh",
        appointmentDetails
      );
      alert("Appointment booked successfully! Details sent to admin.");
      setShowPhoneCallForm(false);
      setPhoneCallDate(null);
      setPhoneCallFormData({ name: "", email: "", details: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send appointment details.");
    }
  };

  return (
    <>
      {/* Section 1: Introduction */}
      <section className="bg-[#0B0B5C] text-white py-16 pt-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Book Your Appointment
          </h1>
          <p className="text-base sm:text-lg  mx-auto">
            Need support or have valuable information to share with D4D
            International? Book your appointment today! Whether you're a
            partner, client, or someone in need of our services, we’re here to
            help. Schedule a session now and connect with our team for tailored
            guidance and meaningful collaboration.
          </p>
        </div>
      </section>

      {/* Section 2: Booking Options and Call-to-Action */}
      <section className="bg-[#0B0B5C] text-[#FFF] py-16 pb-[150px] mb-[150px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Column 1: Appointment Types */}
            <div className="ml-0 md:ml-[100px] flex flex-col items-center md:items-start">
              <p className="text-lg sm:text-xl font-semibold mb-6 text-center md:text-left">
                What type of appointment are you booking?
              </p>
              <div className="space-y-6 w-full max-w-md">
                {/* Consultation */}
                <div>
                  <button
                    onClick={toggleConsultationCalendar}
                    className="block w-full bg-white text-[#0B0B5C] text-base sm:text-lg font-medium py-3 px-6 rounded-lg border border-[#0B0B5C] hover:bg-[#f47b20] hover:text-white transition duration-300 text-center"
                  >
                    Consultation
                  </button>
                  {showConsultationCalendar && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                      <DatePicker
                        selected={consultationDate}
                        onChange={(date) => setConsultationDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        minDate={new Date()} // Prevent past dates
                        inline
                        className="w-full"
                      />
                      <button
                        onClick={proceedToConsultationForm}
                        className="mt-4 w-full bg-[#0B0B5C] text-white py-2 px-4 rounded-lg hover:bg-[#F47B20] transition duration-300"
                      >
                        Proceed to Details
                      </button>
                    </div>
                  )}
                  {showConsultationForm && (
                    <form
                      onSubmit={submitConsultation}
                      className="mt-4 p-4 bg-gray-100 text-[#0b0b5c] rounded-lg space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={consultationFormData.name}
                          onChange={handleConsultationFormChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={consultationFormData.email}
                          onChange={handleConsultationFormChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Brief Details of Consultation
                        </label>
                        <textarea
                          name="details"
                          value={consultationFormData.details}
                          onChange={handleConsultationFormChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          rows="4"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#0B0B5C] text-white py-2 px-4 rounded-lg hover:bg-[#F47B20] transition duration-300"
                      >
                        Book Appointment
                      </button>
                    </form>
                  )}
                </div>

                {/* Phone Call */}
                <div>
                  <button
                    onClick={togglePhoneCallCalendar}
                    className="block w-full bg-white text-[#0B0B5C] text-base sm:text-lg font-medium py-3 px-6 rounded-lg border border-[#0B0B5C] hover:bg-[#f47b20] hover:text-white transition duration-300 text-center"
                  >
                    Phone Call
                  </button>
                  {showPhoneCallCalendar && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                      <DatePicker
                        selected={phoneCallDate}
                        onChange={(date) => setPhoneCallDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        minDate={new Date()} // Prevent past dates
                        inline
                        className="w-full"
                      />
                      <button
                        onClick={proceedToPhoneCallForm}
                        className="mt-4 w-full bg-[#0B0B5C] text-white py-2 px-4 rounded-lg hover:bg-[#F47B20] transition duration-300"
                      >
                        Proceed to Details
                      </button>
                    </div>
                  )}
                  {showPhoneCallForm && (
                    <form
                      onSubmit={submitPhoneCall}
                      className="mt-4 p-4 bg-gray-100 text-[#0b0b5c] rounded-lg space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={phoneCallFormData.name}
                          onChange={handlePhoneCallFormChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={phoneCallFormData.email}
                          onChange={handlePhoneCallFormChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Brief Details of Phone Call
                        </label>
                        <textarea
                          name="details"
                          value={phoneCallFormData.details}
                          onChange={handlePhoneCallFormChange}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          rows="4"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#0B0B5C] text-white py-2 px-4 rounded-lg hover:bg-[#F47B20] transition duration-300"
                      >
                        Book Appointment
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Column 2: Call-to-Action */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mr-3">
                  Book Appointment Today
                </h1>
                <FaCalendarAlt className="text-3xl sm:text-4xl" />
              </div>
              <p className="text-base sm:text-lg text-center md:text-left">
                Take the first step toward creating real impact with D4D
                International.
                <br />
                <br />
                Whether you need support with data systems, digital solutions,
                content development, project management, or tailored training,
                our expert team is ready to help you grow, improve, and lead
                with confidence.
                <br />
                <br />
                👉 Book your consultation now — your journey starts here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentSection;
