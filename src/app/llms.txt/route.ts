export const dynamic = "force-static";

const CONTENT = `# Lone Star Contracting Group

> Texas statewide contracting. Commercial and residential work across every major trade, delivered through one accountable point of contact and a vetted network of licensed professionals.

## Key Pages

- Services: https://lonestarcontractinggroup.com/services
- Service Areas: https://lonestarcontractinggroup.com/texas
- How It Works: https://lonestarcontractinggroup.com/how-it-works
- Contact: https://lonestarcontractinggroup.com/contact
- About: https://lonestarcontractinggroup.com/about
- Resources: https://lonestarcontractinggroup.com/resources
- For Subcontractors: https://lonestarcontractinggroup.com/subcontractors
`;

export function GET() {
  return new Response(CONTENT, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
