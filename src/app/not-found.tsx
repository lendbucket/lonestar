import { Section } from "@/components/Section";
import { Button } from "@/components/CTA";

export default function NotFound() {
  return (
    <Section bg="white">
      <div className="max-w-xl mx-auto text-center py-16">
        <h1 className="text-6xl font-bold text-clay/20 font-serif">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate">
          Page Not Found
        </h2>
        <p className="mt-4 text-stone">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Go Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
