import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentSection = () => {
 const [showConsultationCalendar, setShowConsultationCalendar] = useState(false);
 const [showPhoneCallCalendar, setShowPhoneCallCalendar] = useState(false);
 const [consultationDate, setConsultationDate] = useState(null);
 const [phoneCallDate, setPhoneCallDate] = useState(null);

 const [showConsultationForm, setShowConsultationForm] = useState(false);
 const [showPhoneCallForm, setShowPhoneCallForm] = useState(false);

 const [isSubmitting, setIsSubmitting] = useState(false);
 const [successMessage, setSuccessMessage] = useState("");

 const [consultationFormData, setConsultationFormData] = useState({
 name: "", email: "", phone: "", details: ""
 });

 const [phoneCallFormData, setPhoneCallFormData] = useState({
 name: "", email: "", phone: "", details: ""
 });

 // Auto-close success message
 useEffect(() => {
 if (successMessage) {
 const timer = setTimeout(() => setSuccessMessage(""), 5000);
 return () => clearTimeout(timer);
 }
 }, [successMessage]);

 const toggleConsultation = () => {
 setShowConsultationCalendar(!showConsultationCalendar);
 setShowPhoneCallCalendar(false);
 setShowConsultationForm(false);
 setShowPhoneCallForm(false);
 };

 const togglePhoneCall = () => {
 setShowPhoneCallCalendar(!showPhoneCallCalendar);
 setShowConsultationCalendar(false);
 setShowConsultationForm(false);
 setShowPhoneCallForm(false);
 };

 const proceedToConsultationForm = () => {
 if (!consultationDate) return alert("Please select a date and time.");
 setShowConsultationCalendar(false);
 setShowConsultationForm(true);
 };

 const proceedToPhoneCallForm = () => {
 if (!phoneCallDate) return alert("Please select a date and time.");
 setShowPhoneCallCalendar(false);
 setShowPhoneCallForm(true);
 };

 const handleConsultationChange = (e) => {
 setConsultationFormData({ ...consultationFormData, [e.target.name]: e.target.value });
 };

 const handlePhoneCallChange = (e) => {
 setPhoneCallFormData({ ...phoneCallFormData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e, type) => {
 e.preventDefault();
 setIsSubmitting(true);

 const formData = new FormData(e.target);
 formData.append("appointment_type", type);
 formData.append("preferred_date", type === "Consultation" ? consultationDate?.toLocaleString() : phoneCallDate?.toLocaleString());

 try {
 const response = await fetch('https://formspree.io/f/mgojbjrn', {
 method: 'POST',
 body: formData,
 headers: { 'Accept': 'application/json' }
 });

 if (response.ok) {
 setSuccessMessage(`🎉 ${type} appointment booked successfully!`);

 // Auto close everything after success
 setTimeout(() => {
 if (type === "Consultation") {
 setShowConsultationForm(false);
 setConsultationDate(null);
 setConsultationFormData({ name: "", email: "", phone: "", details: "" });
 } else {
 setShowPhoneCallForm(false);
 setPhoneCallDate(null);
 setPhoneCallFormData({ name: "", email: "", phone: "", details: "" });
 }
 }, 1500);
 } else {
 alert("Failed to submit. Please try again.");
 }
 } catch (error) {
 alert("Network error. Please check your connection.");
 } finally {
 setIsSubmitting(false);
 }
 };

 return (
 <>
 {/* Hero Header */}
 <section className="bg-[#0B0B5C] text-white py-20">
 <div className="max-w-7xl mx-auto px-6 text-center">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Appointment</h1>
 <p className="text-lg max-w-2xl mx-auto text-white/80">
 Schedule a consultation or phone call with the D4D International team.
 </p>
 </div>
 </section>

 <section className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid md:grid-cols-2 gap-12">
 {/* Left: Booking Options */}
 <div className="space-y-10">
 {/* Consultation */}
 <div className="space-y-4">
 <button
 onClick={toggleConsultation}
 className="w-full bg-[#0B0B5C] hover:bg-[#f47b20] text-white py-5 px-8 rounded-3xl text-left font-medium text-lg transition-all duration-300 flex items-center justify-between group"
 >
 <span>📅 Book Consultation (Virtual / In-person)</span>
 <span className="group-hover:rotate-45 transition">→</span>
 </button>

 {showConsultationCalendar && (
 <div className="bg-gray-50 rounded-3xl p-8">
 <DatePicker
 selected={consultationDate}
 onChange={setConsultationDate}
 showTimeSelect
 timeIntervals={30}
 dateFormat="MMMM d, yyyy h:mm aa"
 minDate={new Date()}
 inline
 className="w-full"
 />
 <button 
 onClick={proceedToConsultationForm}
 className="mt-6 w-full bg-[#f47b20] hover:bg-orange-600 text-white py-4 rounded-2xl font-medium transition"
 >
 Continue to Details
 </button>
 </div>
 )}

 {showConsultationForm && (
 <form onSubmit={(e) => handleSubmit(e, "Consultation")} className="bg-gray-50 rounded-3xl p-8 space-y-5">
 <input type="text" name="name" placeholder="Full Name" value={consultationFormData.name} onChange={handleConsultationChange} required className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#f47b20]" />
 <input type="email" name="email" placeholder="Email Address" value={consultationFormData.email} onChange={handleConsultationChange} required className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#f47b20]" />
 <input type="tel" name="phone" placeholder="Phone Number" value={consultationFormData.phone} onChange={handleConsultationChange} className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#f47b20]" />
 <textarea name="details" placeholder="Tell us more about your request..." value={consultationFormData.details} onChange={handleConsultationChange} required rows={4} className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#f47b20]" />
 <button type="submit" disabled={isSubmitting} className="w-full bg-[#0B0B5C] hover:bg-black text-white py-4 rounded-2xl font-medium transition disabled:opacity-70">
 {isSubmitting ? "Booking Appointment..." : "Confirm & Book Consultation"}
 </button>
 </form>
 )}
 </div>

 {/* Phone Call */}
 <div className="space-y-4">
 <button
 onClick={togglePhoneCall}
 className="w-full bg-[#0B0B5C] hover:bg-[#f47b20] text-white py-5 px-8 rounded-3xl text-left font-medium text-lg transition-all duration-300 flex items-center justify-between group"
 >
 <span>📞 Book Phone Call Appointment</span>
 <span className="group-hover:rotate-45 transition">→</span>
 </button>

 {showPhoneCallCalendar && (
 <div className="bg-gray-50 rounded-3xl p-8">
 <DatePicker
 selected={phoneCallDate}
 onChange={setPhoneCallDate}
 showTimeSelect
 timeIntervals={30}
 dateFormat="MMMM d, yyyy h:mm aa"
 minDate={new Date()}
 inline
 />
 <button 
 onClick={proceedToPhoneCallForm}
 className="mt-6 w-full bg-[#f47b20] hover:bg-orange-600 text-white py-4 rounded-2xl font-medium transition"
 >
 Continue to Details
 </button>
 </div>
 )}

 {showPhoneCallForm && (
 <form onSubmit={(e) => handleSubmit(e, "Phone Call")} className="bg-gray-50 rounded-3xl p-8 space-y-5">
 <input type="text" name="name" placeholder="Full Name" value={phoneCallFormData.name} onChange={handlePhoneCallChange} required className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#f47b20]" />
 <input type="email" name="email" placeholder="Email Address" value={phoneCallFormData.email} onChange={handlePhoneCallChange} required className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#f47b20]" />
 <input type="tel" name="phone" placeholder="Phone Number" value={phoneCallFormData.phone} onChange={handlePhoneCallChange} className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#f47b20]" />
 <textarea name="details" placeholder="Purpose of the call..." value={phoneCallFormData.details} onChange={handlePhoneCallChange} required rows={4} className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#f47b20]" />
 <button type="submit" disabled={isSubmitting} className="w-full bg-[#0B0B5C] text-white py-4 rounded-2xl font-medium transition disabled:opacity-70">
 {isSubmitting ? "Booking Appointment..." : "Confirm & Book Phone Call"}
 </button>
 </form>
 )}
 </div>
 </div>

 {/* Right Side */}
 <div className="flex items-center">
 <div className="bg-gradient-to-br from-[#0B0B5C] to-[#1e2a5c] text-white p-12 rounded-3xl">
 <FaCalendarAlt className="text-6xl mb-8" />
 <h3 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h3>
 <p className="text-white/80 text-lg leading-relaxed">
 Whether you need expert consultation, partnership discussion, or technical support — 
 our dedicated team is ready to assist you every step of the way.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Success Toast with Animation */}
 {successMessage && (
 <motion.div 
 initial={{ opacity: 0, y: 50 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: 50 }}
 className="fixed bottom-8 right-8 bg-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50"
 >
 <FaCheckCircle className="text-2xl" />
 <span className="font-medium">{successMessage}</span>
 </motion.div>
 )}
 </>
 );
};

export default AppointmentSection;