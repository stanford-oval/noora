import Image from "next/image";
import Link from "next/link";

function HomeLogo() {
  return (
    <Link href="/">
      <div className="flex-shrink-0 flex items-center">
        <Image
          className="block h-12 w-auto mr-1"
          src="/img/logos/noora/lamp.png"
          width={64}
          height={64}
          alt="Noora logo"
        />
        <h1 className="font-bold tracking-widest text-lg text-noora-primary">
          NOORA
        </h1>
      </div>
    </Link>
  )
}

export default HomeLogo;