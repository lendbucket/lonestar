"use client";

import { useState } from "react";

interface FormData {
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

const tradeOptions = [
  "Roofing",
  "Foundation Repair",
  "Concrete and Flatwork",
  "Framing",
  "Masonry",
  "Siding",
  "Stucco",
  "Gutters",
  "Windows and Doors",
  "Exterior Painting",
  "Interior Painting",
  "Waterproofing",
  "Plumbing (Licensed)",
  "Electrical (Licensed)",
  "HVAC (Licensed)",
  "Irrigation (Licensed)",
  "Drywall",
  "Flooring",
  "Tile",
  "Cabinetry and Countertops",
  "Trim and Finish Carpentry",
  "Land Clearing",
  "Grading and Excavation",
  "Demolition",
  "Fencing",
  "Decks and Patios",
  "Hardscaping",
  "Landscaping",
  "Tree Trimming and Removal",
  "Drainage",
  "Pressure Washing",
  "Welding and Metal Fabrication",
  "General Handyman",
  "Residential Remodels",
  "Kitchen and Bath",
  "Commercial Construction",
  "Tenant Finish Out",
  "Insurance Restoration",
];

const cityOptions = [
  "Houston",
  "San Antonio",
  "Dallas",
  "Fort Worth",
  "Austin",
  "El Paso",
  "Corpus Christi",
  "Statewide / Multiple Areas",
];

const insuranceOptions = [
  "General liability and workers comp",
  "General liability only",
  "Currently obtaining insurance",
  "Not yet insured",
];

const crewSizes = ["Solo", "2 to 5", "6 to 10", "11 to 20", "20 plus"];

const yearsOptions = [
  "Less than 2 years",
  "2 to 5 years",
  "5 to 10 years",
  "10 to 20 years",
  "20 plus years",
];

const TOTAL_STEPS = 4;

export function SubcontractorIntakeForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    trades: [],
    serviceArea: [],
    licenseNumbers: "",
    insuranceStatus: "",
    crewSize: "",
    yearsInTrade: "",
  });

  function updateField(field: keyof FormData, value: string | string[]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function toggleTrade(trade: string) {
    setFormData((prev) => ({
      ...prev,
      trades: prev.trades.includes(trade)
        ? prev.trades.filter((t) => t !== trade)
        : [...prev.trades, trade],
    }));
  }

  function toggleCity(city: string) {
    setFormData((prev) => ({
      ...prev,
      serviceArea: prev.serviceArea.includes(city)
        ? prev.serviceArea.filter((c) => c !== city)
        : [...prev.serviceArea, city],
    }));
  }

  function canAdvance(): boolean {
    switch (step) {
      case 1:
        return !!formData.email && !!formData.name && !!formData.phone;
      case 2:
        return formData.trades.length > 0 && formData.serviceArea.length > 0;
      case 3:
        return !!formData.insuranceStatus;
      case 4:
        return !!formData.crewSize && !!formData.yearsInTrade;
      default:
        return false;
    }
  }

  const hasLicensedTrade = formData.trades.some((t) =>
    t.includes("(Licensed)")
  );

  async function handleSubmit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/leads/subcontractor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-stone/15 bg-white p-8 text-center">
        <h3 className="text-2xl font-semibold text-slate font-serif">
          Application Received
        </h3>
        <p className="mt-4 text-stone">
          We have your information and will follow up within two business days.
          During onboarding, we will request work samples and verify
          credentials.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-stone/15 bg-white p-6 sm:p-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate">
            Step {step} of {TOTAL_STEPS}
          </span>
          <span className="text-sm text-stone">
            {Math.round((step / TOTAL_STEPS) * 100)}% complete
          </span>
        </div>
        <div className="h-2 bg-stone/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-clay rounded-full transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Contact info */}
      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold text-slate font-serif">
            Your information
          </h3>
          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-charcoal">Full name</span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
                autoFocus
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-charcoal">Company name (if applicable)</span>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-charcoal">Email</span>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-base text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-charcoal">Phone</span>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-base text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
              />
            </label>
          </div>
        </div>
      )}

      {/* Step 2: Trades and Service Area */}
      {step === 2 && (
        <div>
          <h3 className="text-xl font-semibold text-slate font-serif">
            Trades and service area
          </h3>
          <div className="mt-6 space-y-6">
            <fieldset>
              <legend className="text-sm font-medium text-charcoal">
                What trades do you perform? (select all that apply)
              </legend>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-2">
                {tradeOptions.map((trade) => (
                  <label
                    key={trade}
                    className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm cursor-pointer transition-colors ${
                      formData.trades.includes(trade)
                        ? "border-clay bg-clay/5 text-clay"
                        : "border-stone/20 text-charcoal hover:border-stone/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.trades.includes(trade)}
                      onChange={() => toggleTrade(trade)}
                      className="sr-only"
                    />
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                        formData.trades.includes(trade)
                          ? "border-clay bg-clay text-white"
                          : "border-stone/30"
                      }`}
                    >
                      {formData.trades.includes(trade) && (
                        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    {trade}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-medium text-charcoal">
                Where do you work? (select all that apply)
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {cityOptions.map((city) => (
                  <label
                    key={city}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      formData.serviceArea.includes(city)
                        ? "border-clay bg-clay/5 text-clay"
                        : "border-stone/20 text-charcoal hover:border-stone/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.serviceArea.includes(city)}
                      onChange={() => toggleCity(city)}
                      className="sr-only"
                    />
                    {city}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      )}

      {/* Step 3: Licensing and Insurance */}
      {step === 3 && (
        <div>
          <h3 className="text-xl font-semibold text-slate font-serif">
            Licensing and insurance
          </h3>
          <div className="mt-6 space-y-5">
            {hasLicensedTrade && (
              <label className="block">
                <span className="text-sm font-medium text-charcoal">
                  License number(s) for licensed trades (plumbing, electrical,
                  HVAC, irrigation)
                </span>
                <input
                  type="text"
                  value={formData.licenseNumbers}
                  onChange={(e) =>
                    updateField("licenseNumbers", e.target.value)
                  }
                  placeholder="Enter your license number(s)"
                  className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
                />
                <p className="mt-1 text-xs text-stone">
                  Licensed trades in Texas require valid state licensing. We
                  verify all license numbers.
                </p>
              </label>
            )}
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                Insurance status
              </span>
              <select
                value={formData.insuranceStatus}
                onChange={(e) =>
                  updateField("insuranceStatus", e.target.value)
                }
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal focus:border-clay focus:ring-1 focus:ring-clay"
              >
                <option value="">Select your insurance status</option>
                {insuranceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}

      {/* Step 4: Experience */}
      {step === 4 && (
        <div>
          <h3 className="text-xl font-semibold text-slate font-serif">
            Experience and capacity
          </h3>
          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                Crew size
              </span>
              <select
                value={formData.crewSize}
                onChange={(e) => updateField("crewSize", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal focus:border-clay focus:ring-1 focus:ring-clay"
              >
                <option value="">Select crew size</option>
                {crewSizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                Years in the trade
              </span>
              <select
                value={formData.yearsInTrade}
                onChange={(e) => updateField("yearsInTrade", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal focus:border-clay focus:ring-1 focus:ring-clay"
              >
                <option value="">Select years of experience</option>
                {yearsOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
            <p className="text-xs text-stone mt-4">
              During onboarding, we will request work samples, references, and
              verify credentials. Photo uploads and full documentation are
              handled in the onboarding portal.
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="min-h-[44px] min-w-[44px] text-sm font-medium text-stone hover:text-slate transition-colors"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canAdvance()}
            className="min-h-[44px] rounded-md bg-clay px-6 py-3 text-sm font-semibold text-white hover:bg-clay/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canAdvance() || status === "loading"}
            className="min-h-[44px] rounded-md bg-clay px-6 py-3 text-sm font-semibold text-white hover:bg-clay/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Submitting..." : "Submit Application"}
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600 text-center">
          Something went wrong. Please try again or email us directly at{" "}
          info@lonestarcontractinggroup.com.
        </p>
      )}
    </div>
  );
}
