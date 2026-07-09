import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/logo.jpg"
        alt="El Baraka"
        width={60}
        height={60}
        priority
        className="rounded-full object-cover"
      />

      <div>
        <h2 className="text-xl font-bold text-[#C8102E]">
          EL BARAKA
        </h2>

        <p className="text-xs tracking-[4px] text-gray-500 uppercase">
          Restaurant
        </p>
      </div>
    </Link>
  );
}