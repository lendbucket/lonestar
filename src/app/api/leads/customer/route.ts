import { NextResponse } from "next/server";
import { resend, LEAD_FROM_EMAIL, LEAD_TO_EMAIL } from "@/lib/resend";

interface CustomerLeadData {
  email: string;
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  city: string;
  projectType: "commercial" | "residential";
  scopeDescription: string;
  timeline: string;
}

export async function POST(request: Request) {
  try {
    const data: CustomerLeadData = await request.json();

    if (!data.email || !data.name || !data.serviceId || !data.city) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: LEAD_FROM_EMAIL,
      to: LEAD_TO_EMAIL,
      subject: `New Lead: ${data.serviceName} in ${data.city} (${data.projectType})`,
      html: `
        <h2>New Customer Lead</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.name)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.phone)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.serviceName)} (${escapeHtml(data.serviceId)})</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">City</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.city)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Project Type</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.projectType)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Timeline</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.timeline)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Scope</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.scopeDescription)}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send customer lead email:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
