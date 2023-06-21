import { DocumentTextIcon, EyeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "../elemets.tsx/PortfolioCard";

const projects = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    link: "firesidecandles.co.nz",
    email: "janecooper@example.com",
    imageUrl: "portfolio_1.png",
  },
];

export default function Portfolio() {
  return (
    <div className="my-32 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl mb-4 lg:mx-0">
        <h2 className="text-base font-semibold leading-7 text-indigo-400">
          Portfolio
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Here is some of our work...
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
