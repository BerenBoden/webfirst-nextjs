import { DocumentTextIcon, EyeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "../elemets.tsx/PortfolioCard";

const projects = [
  {
    id: 1,
    name: "firesidecandles.co.nz",
    href: "#",
    liveSlug: "https://firesidecandles.co.nz",
    slug: "firesidecandles.co.nz",
    description:
      "(Under construction) E-commerce store selling candles, currently running Enterprise plan with content creation, SEO audits, and more...",
    options: "Next.js Strapi TailwindCSS",
    imageSrc: "portfolio_1.png",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  // {
  //   id: 2,
  //   name: "Basic Tee",
  //   href: "#",
  //   price: "$32",
  //   description:
  //     "Look like a visionary CEO and wear the same black t-shirt every day.",
  //   options: "Black",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
  //   imageAlt: "Front of plain black t-shirt.",
  // },
  // More products...
];

export default function Portfolio() {
  return (
    <div className="my-32 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl mb-4 lg:mx-0">
        <h2 className="text-base font-semibold leading-7 text-indigo-400">
          Portfolio
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Some of our work...
        </p>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 "
      >
        {projects.map((project) => (
          <PortfolioCard project={project} />
        ))}
      </ul>
    </div>
  );
}
