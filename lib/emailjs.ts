import emailjs from "@emailjs/browser";

export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT || "",
  demoTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_DEMO || "",
  newsletterTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NEWSLETTER || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  // Falls back to a real, working inbox until support@bythron.tech is fully
  // wired up as a receiving mailbox in the EmailJS connected service.
  recipientEmail: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || "muhirelionel@gmail.com",
};

type Result = { success: true; response: unknown } | { success: false; error: unknown };

async function safeSend(templateId: string, templateParams: Record<string, unknown>): Promise<Result> {
  try {
    if (!emailConfig.serviceId || !templateId || !emailConfig.publicKey) {
      throw new Error("EmailJS is not configured. Set the NEXT_PUBLIC_EMAILJS_* environment variables.");
    }
    const response = await emailjs.send(emailConfig.serviceId, templateId, templateParams, emailConfig.publicKey);
    return { success: true, response };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
}

export const sendContactEmail = (formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) =>
  safeSend(emailConfig.contactTemplateId, {
    to_email: emailConfig.recipientEmail,
    reply_to: formData.email,
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || "Not provided",
    subject: formData.subject,
    message: formData.message,
  });

export const sendDemoRequestEmail = (formData: {
  name: string;
  company: string;
  email: string;
  phone: string;
  fleetSize: string;
  interest: string;
  message?: string;
}) =>
  safeSend(emailConfig.demoTemplateId, {
    to_email: emailConfig.recipientEmail,
    reply_to: formData.email,
    from_name: formData.name,
    company: formData.company,
    from_email: formData.email,
    phone: formData.phone,
    fleet_size: formData.fleetSize,
    interest: formData.interest,
    message: formData.message || "None",
  });

export const sendNewsletterSignup = (email: string) =>
  safeSend(emailConfig.newsletterTemplateId, {
    to_email: emailConfig.recipientEmail,
    from_email: email,
    subscribed_at: new Date().toISOString(),
  });
