import { NextResponse } from "next/server";
import { resend, LEAD_FROM_EMAIL, LEAD_TO_EMAIL } from "@/lib/resend";

interface SubcontractorIntakeData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  trades: string[];
  serviceArea: string[];
  licenseNumbers: string;
  insuranceStatus: string;
  crewSize: string;
  yearsInTrade: string;
}

export async function POST(request: Request) {
  try {
    const data: SubcontractorIntakeData = await request.json();

    if (!data.email || !data.name || !data.trades.length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: LEAD_FROM_EMAIL,
      to: LEAD_TO_EMAIL,
      subject: `New Subcontractor Application: ${data.name} (${data.trades.join(", ")})`,
      html: `
        <h2>New Subcontractor Application</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.name)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.companyName)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.phone)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Trades</td><td style="padding:8px;border:1px solid #ddd">${data.trades.map(escapeHtml).join(", ")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service Area</td><td style="padding:8px;border:1px solid #ddd">${data.serviceArea.map(escapeHtml).join(", ")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">License Numbers</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.licenseNumbers || "None provided")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Insurance</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.insuranceStatus)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Crew Size</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.crewSize)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Years in Trade</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.yearsInTrade)}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:14px">Note: Work samples and additional documentation will be collected during the onboarding process.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send subcontractor intake email:", error);
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
