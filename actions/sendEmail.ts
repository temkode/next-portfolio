"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    console.log("a");
    return { error: "Invalid Sender Email" };
  }
  if (!validateString(message, 5000)) {
    console.log("b");
    return { error: "Invalid Message" };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      subject: "New message",
      to: "temuujin.nat@gmail.com",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
