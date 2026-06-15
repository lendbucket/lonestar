import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export const LEAD_FROM_EMAIL = "Lone Star Contracting <leads@lonestarcontractinggroup.com>";
export const LEAD_TO_EMAIL = process.env.LEAD_DESTINATION_EMAIL || "info@lonestarcontractinggroup.com";
