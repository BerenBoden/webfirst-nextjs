import { DocumentTextIcon, EyeIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ project }: any) {
  return (
    <div
      key={project.id}
      className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white"
    >
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75">
        <Image
          src={`/${project.imageSrc}`}
          alt={project.imageAlt}
          width={500}
          height={500}
          className="h-full w-full object-contain object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/portfolio/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="text-sm text-gray-500">{project.description}</p>
        <div className="flex flex-1 flex-col justify-end my-2">
          <p className="text-sm italic text-gray-500 my-2">{project.options}</p>
          <div className="flex items-center justify-center my-2">
            <Link href={`/portfolio/${project.slug}`} className="w-full">
              <Button className="flex items-center justify-center w-full">
                Case Study
                <DocumentTextIcon className="w-4 ml-2 h-4 bg-none" />
              </Button>
            </Link>
          </div>
          <a
            href={project.liveSlug}
            className="w-full"
            rel="noopener norefferer"
            target="_blank"
          >
            <Button className="flex items-center justify-center w-full">
              View Live
              <EyeIcon className="w-4 ml-2 h-4 bg-none" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
