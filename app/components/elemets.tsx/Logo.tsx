import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Webfirst</span>
        <Image
          className="h-8 w-auto mr-3"
          src="/new_logo.png"
          alt=""
          width={75}
          height={75}
        />
      </Link>
      <div>
        <p className="text-sm">Webfirst.co.nz</p>
        <p className="text-xs">Web development in New Zealand</p>
      </div>
    </div>
  );
}
