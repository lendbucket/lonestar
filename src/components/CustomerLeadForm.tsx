"use client";

import { useState } from "react";

interface FormData {
  email: string;
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  city: string;
  projectType: "commercial" | "residential" | "";
  scopeDescription: string;
  timeline: string;
}

const services = [
  { id: "roofing", name: "Roofing" },
  { id: "foundation-repair", name: "Foundation Repair" },
  { id: "concrete-flatwork", name: "Concrete and Flatwork" },
  { id: "framing", name: "Framing" },
  { id: "retaining-walls", name: "Retaining Walls" },
  { id: "masonry", name: "Masonry" },
  { id: "structural-repairs", name: "Structural Repairs" },
  { id: "siding", name: "Siding" },
  { id: "stucco", name: "Stucco" },
  { id: "gutters", name: "Gutters" },
  { id: "windows-and-doors", name: "Windows and Doors" },
  { id: "exterior-painting", name: "Exterior Painting" },
  { id: "waterproofing", name: "Waterproofing" },
  { id: "plumbing", name: "Plumbing" },
  { id: "electrical", name: "Electrical" },
  { id: "hvac", name: "HVAC" },
  { id: "irrigation", name: "Irrigation" },
  { id: "drywall", name: "Drywall" },
  { id: "interior-painting", name: "Interior Painting" },
  { id: "flooring", name: "Flooring" },
  { id: "tile", name: "Tile" },
  { id: "cabinetry-and-countertops", name: "Cabinetry and Countertops" },
  { id: "trim-and-finish-carpentry", name: "Trim and Finish Carpentry" },
  { id: "land-clearing", name: "Land Clearing" },
  { id: "grading-and-excavation", name: "Grading and Excavation" },
  { id: "demolition", name: "Demolition" },
  { id: "fencing", name: "Fencing" },
  { id: "decks-and-patios", name: "Decks and Patios" },
  { id: "hardscaping", name: "Hardscaping" },
  { id: "landscaping", name: "Landscaping" },
  { id: "drainage-and-french-drains", name: "Drainage and French Drains" },
  { id: "pressure-washing", name: "Pressure Washing" },
  { id: "welding-and-metal-fabrication", name: "Welding and Metal Fabrication" },
  { id: "general-handyman", name: "General Handyman and Repairs" },
  { id: "residential-remodels", name: "Residential Remodels" },
  { id: "kitchen-and-bath", name: "Kitchen and Bath" },
  { id: "room-additions", name: "Room Additions" },
  { id: "commercial-construction", name: "Commercial Construction" },
  { id: "tenant-finish-out", name: "Tenant Finish Out and Build Outs" },
  { id: "insurance-restoration", name: "Insurance Restoration" },
];

const cities = [
  "Houston",
  "San Antonio",
  "Dallas",
  "Fort Worth",
  "Austin",
  "El Paso",
  "Corpus Christi",
  "Other",
];

const timelines = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "Within 3 months",
  "Flexible / planning ahead",
];

const TOTAL_STEPS = 4;

export function CustomerLeadForm({
  preselectedService,
  preselectedCity,
}: {
  preselectedService?: string;
  preselectedCity?: string;
}) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    phone: "",
    serviceId: preselectedService || "",
    serviceName: "",
    city: preselectedCity || "",
    projectType: "",
    scopeDescription: "",
    timeline: "",
  });

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "serviceId") {
      const svc = services.find((s) => s.id === value);
      setFormData((prev) => ({
        ...prev,
        serviceId: value,
        serviceName: svc?.name || value,
      }));
    }
  }

  function canAdvance(): boolean {
    switch (step) {
      case 1:
        return !!formData.email;
      case 2:
        return !!formData.serviceId && !!formData.city && !!formData.projectType;
      case 3:
        return !!formData.scopeDescription && !!formData.timeline;
      case 4:
        return !!formData.name && !!formData.phone;
      default:
        return false;
    }
  }

  async function handleSubmit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/leads/customer", {
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
          Request Received
        </h3>
        <p className="mt-4 text-stone">
          We have your project details and will be in touch within one business
          day. Check your email at {formData.email} for confirmation.
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

      {/* Step 1: Email */}
      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold text-slate font-serif">
            Let us start with your email
          </h3>
          <p className="mt-2 text-sm text-stone">
            We will send project updates and your quote to this address.
          </p>
          <label className="block mt-6">
            <span className="text-sm font-medium text-charcoal">
              Email address
            </span>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
              autoFocus
            />
          </label>
        </div>
      )}

      {/* Step 2: Service, City, Type */}
      {step === 2 && (
        <div>
          <h3 className="text-xl font-semibold text-slate font-serif">
            Tell us about your project
          </h3>
          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                What service do you need?
              </span>
              <select
                value={formData.serviceId}
                onChange={(e) => updateField("serviceId", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal focus:border-clay focus:ring-1 focus:ring-clay"
              >
                <option value="">Select a service</option>
                {services.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                Where is the project?
              </span>
              <select
                value={formData.city}
                onChange={(e) => updateField("city", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal focus:border-clay focus:ring-1 focus:ring-clay"
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
            <fieldset>
              <legend className="text-sm font-medium text-charcoal">
                Project type
              </legend>
              <div className="mt-2 flex gap-4">
                {(["residential", "commercial"] as const).map((type) => (
                  <label
                    key={type}
                    className={`flex-1 cursor-pointer rounded-md border px-4 py-3 text-center text-sm font-medium transition-colors ${
                      formData.projectType === type
                        ? "border-clay bg-clay/5 text-clay"
                        : "border-stone/20 text-stone hover:border-stone/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value={type}
                      checked={formData.projectType === type}
                      onChange={(e) => updateField("projectType", e.target.value)}
                      className="sr-only"
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      )}

      {/* Step 3: Scope and Timeline */}
      {step === 3 && (
        <div>
          <h3 className="text-xl font-semibold text-slate font-serif">
            Scope and timeline
          </h3>
          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                Describe the work you need done
              </span>
              <textarea
                value={formData.scopeDescription}
                onChange={(e) =>
                  updateField("scopeDescription", e.target.value)
                }
                rows={4}
                placeholder="Tell us about the project, the property, any issues you are dealing with, and what you are looking to accomplish."
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                When do you need this done?
              </span>
              <select
                value={formData.timeline}
                onChange={(e) => updateField("timeline", e.target.value)}
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal focus:border-clay focus:ring-1 focus:ring-clay"
              >
                <option value="">Select a timeline</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}

      {/* Step 4: Contact info */}
      {step === 4 && (
        <div>
          <h3 className="text-xl font-semibold text-slate font-serif">
            Your contact information
          </h3>
          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                Full name
              </span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your full name"
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-charcoal">
                Phone number
              </span>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="(555) 555-5555"
                className="mt-1 block w-full rounded-md border border-stone/20 bg-bone px-4 py-3 text-charcoal placeholder:text-stone/50 focus:border-clay focus:ring-1 focus:ring-clay"
              />
            </label>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="mt-8 flex items-center justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-sm font-medium text-stone hover:text-slate transition-colors"
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
            className="rounded-md bg-clay px-6 py-3 text-sm font-semibold text-white hover:bg-clay/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canAdvance() || status === "loading"}
            className="rounded-md bg-clay px-6 py-3 text-sm font-semibold text-white hover:bg-clay/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Submitting..." : "Submit Request"}
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
