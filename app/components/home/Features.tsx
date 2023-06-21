import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  EyeIcon,
  CodeBracketIcon,
  CloudIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  LockClosedIcon,
  ServerIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "UI/UX Design",
    description:
      "Brand identity, websites and mobile apps, visual design, prototyping and testing.",
    icon: EyeIcon,
  },
  {
    name: "Development",
    description:
      "Custom applications with Next.js including Backend/API integrations with express or serverless Next.js.",
    icon: CodeBracketIcon,
  },
  {
    name: "Hosting / Support",
    description:
      "Fast and secure hosting with AWS, Vercel & DigitalOcean. HTTPS always with SSL certificate. 99% uptime and free migration.",
    icon: CloudIcon,
  },
  {
    name: "Content / SEO",
    description:
      "Copywriting and creating social content. Optimizing SEO to drive organic traffic.",
    icon: DocumentTextIcon,
  },
  {
    name: "E-Commerce",
    description:
      "Payment processing solutions with Shopify, Snipcart, Stripe, PayPal, BigCommerce and more.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Database backups",
    description:
      "You will never have to worry about losing your data. We do daily backups.",
    icon: ServerIcon,
  },
  {
    name: "Customized Security",
    description:
      "Regular pentesting and website audits to ensure your website and data are safe from hackers and data breaches.",
    icon: LockClosedIcon,
  },
  {
    name: "Analytics and Reporting",
    description:
      "Track your website's performance and user behavior. Gain insights with comprehensive reports to strategize and make informed decisions.",
    icon: ChartBarIcon, // replace with actual icon
  },
  {
    name: "SEO Auditing",
    description:
      "Stay ahead with periodic SEO audits. We identify and fix SEO issues to ensure your website always remains search-engine friendly.",
    icon: MagnifyingGlassIcon, // replace with actual icon
  },
  {
    name: "Custom Backend Dashboard",
    description:
      "Tailored dashboard to manage your content, track orders, interact with customers, and monitor overall performance of your website.",
    icon: TableCellsIcon, // replace with actual icon
  },
];

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Blazingly fast web applications
          </p>
          <p className="mt-6 text-md text-gray-300">
            Delve into the digital realm with our custom-made web applications,
            designed to address your unique requirements. From complex business
            challenges to innovative startups, we translate your vision into a
            seamless and efficient digital experience.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
