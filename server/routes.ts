import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store in database/memory
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      // Send email notification using SMTP
      try {
        const transporter = nodemailer.createTransporter({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_EMAIL || process.env.GMAIL_USER || "support@greendrivemobility.com",
            pass: process.env.SMTP_PASSWORD || process.env.GMAIL_PASSWORD || "defaultpassword"
          }
        });

        const mailOptions = {
          from: process.env.SMTP_EMAIL || process.env.GMAIL_USER || "support@greendrivemobility.com",
          to: process.env.CONTACT_EMAIL || process.env.SMTP_EMAIL || process.env.GMAIL_USER || "support@greendrivemobility.com",
          subject: `New Contact Form Submission - Greendrive Mobility`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">New Contact Form Submission</h2>
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Phone:</strong> ${validatedData.phone}</p>
                <p><strong>Service Type:</strong> ${validatedData.serviceType || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px;">${validatedData.message || 'No message provided'}</p>
              </div>
              <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
                This email was sent from the Greendrive Mobility contact form.
              </p>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        
        // Send confirmation email to user
        const userMailOptions = {
          from: process.env.SMTP_EMAIL || process.env.GMAIL_USER || "support@greendrivemobility.com",
          to: validatedData.email,
          subject: "Thank you for contacting Greendrive Mobility",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #10b981;">Thank you for contacting us!</h2>
              <p>Dear ${validatedData.firstName},</p>
              <p>We've received your inquiry and our team will get back to you within 24 hours.</p>
              <div style="background: #f0f9f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #059669; margin-top: 0;">Your Inquiry Details:</h3>
                <p><strong>Service Type:</strong> ${validatedData.serviceType || 'General Inquiry'}</p>
                <p><strong>Message:</strong> ${validatedData.message || 'No message provided'}</p>
              </div>
              <p>For immediate assistance, you can also call us at <strong>+91 9818494446</strong></p>
              <p>Best regards,<br>Greendrive Mobility Team</p>
            </div>
          `
        };

        await transporter.sendMail(userMailOptions);
        
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails, but log the error
      }

      res.json({ 
        message: "Contact form submitted successfully", 
        id: contactSubmission.id 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      console.error("Contact form submission error:", error);
      res.status(500).json({ 
        message: "Failed to submit contact form. Please try again." 
      });
    }
  });

  // Get all contact submissions (for admin use)
  app.get("/api/contact/submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Failed to get contact submissions:", error);
      res.status(500).json({ message: "Failed to get contact submissions" });
    }
  });

  // Rate calculation endpoint (mock implementation)
  app.post("/api/calculate-rate", async (req, res) => {
    try {
      const { fromCity, toCity, weight, vehicleType, serviceType } = req.body;
      
      if (!fromCity || !toCity || !weight || !vehicleType) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Mock rate calculation logic
      const baseRate = 2000;
      const weightMultiplier = parseFloat(weight) * 2;
      const serviceMultiplier = serviceType === "Express" ? 1.5 : serviceType === "Same Day" ? 2 : 1;
      const estimatedRate = Math.round((baseRate + weightMultiplier) * serviceMultiplier);

      res.json({
        fromCity,
        toCity,
        weight,
        vehicleType,
        serviceType,
        estimatedRate,
        estimatedDays: serviceType === "Same Day" ? 0 : serviceType === "Express" ? 1 : 3,
        includesGST: true,
        trackingIncluded: true
      });
    } catch (error) {
      console.error("Rate calculation error:", error);
      res.status(500).json({ message: "Failed to calculate rate" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
