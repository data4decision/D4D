// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configure CORS to allow requests only from your frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend (Vite dev server)
    methods: ["POST"], // Allow only POST requests
  })
);

app.use(express.json());

// Validate environment variables
const { EMAIL_USER, EMAIL_PASS } = process.env;
if (!EMAIL_USER || !EMAIL_PASS) {
  console.error(
    "Error: Missing environment variables. Please set EMAIL_USER and EMAIL_PASS in the .env file."
  );
  process.exit(1); // Exit the process if environment variables are missing
}

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER, // e.g., adegbesanoluwakayode52@gmail.com
    pass: EMAIL_PASS, // App Password (e.g., abcd efgh ijkl mnop without spaces)
  },
});

// Verify the transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Error verifying email transporter:", error);
  } else {
    console.log("Email transporter is ready to send emails.");
  }
});

app.post("/api/book-appointment", async (req, res) => {
  const { type, date, name, email, details, bookedAt } = req.body;

  // Validate request body
  if (!type || !date || !name || !email || !details || !bookedAt) {
    return res
      .status(400)
      .json({
        error:
          "All fields are required: type, date, name, email, details, bookedAt",
      });
  }

  const mailOptions = {
    from: EMAIL_USER, // Sender email
    to: "adegbesanoluwakayode52@gmail.com", // Admin email
    subject: `New Appointment Booking: ${type}`,
    text: `
      New Appointment Details:
      Type: ${type}
      Date: ${date}
      Name: ${name}
      Email: ${email}
      Details: ${details}
      Booked At: ${bookedAt}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Appointment booked and email sent." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Failed to send email.",
      details: error.message || "Unknown error occurred while sending email.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
