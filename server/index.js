import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

// 👇 ADD HERE
console.log("API KEY:", process.env.RESEND_API_KEY);
// ✅ FIRST create app
const app = express();

// ✅ THEN middleware
app.use(cors({ origin: true }));
app.use(express.json());

// ✅ THEN routes
app.get("/", (req, res) => {
    res.send("Backend is working ✅");
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
    try {
        const { name, email, company, message, plan } = req.body;

        console.log("🔥 HIT API:", req.body);

        // ✅ 1. SEND EMAIL TO YOU
        const response = await resend.emails.send({
            from: "Lajapathy <info@lajapathy.com>",
            to: "lajapathylp@gmail.com",
            reply_to: email,
            subject: `New Contact Form - ${plan || "General"}`,
            html: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        });

        console.log("✅ EMAIL RESPONSE:", response);

        // ✅ 2. AUTO-REPLY TO USER (ADD HERE 👇)
        await resend.emails.send({
            from: "Lajapathy <info@lajapathy.com>",
            to: email,
            subject: "We received your request 🚀",
            html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. We'll get back within 24–48 hours.</p>
        <br/>
        <p>– Team Lajapathy</p>
      `,
        });

        // ✅ RESPONSE
        return res.status(200).json({ success: true });

    } catch (err) {
        console.error("❌ ERROR:", err);

        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});

// ✅ LAST → start server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});