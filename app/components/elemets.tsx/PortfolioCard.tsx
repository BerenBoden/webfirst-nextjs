import { DocumentTextIcon, EyeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ project }: any) {
  return (
    <li
      key={project.email}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <Image
        className="mx-auto object-contain w-full h-full flex-shrink-0"
        src={`/${project.imageUrl}`}
        width={1000}
        height={100}
        alt=""
      />
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <Link
              href={`/portfolio/${project.link}`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <DocumentTextIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Case Study
            </Link>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://${project.link}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              View Live
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
