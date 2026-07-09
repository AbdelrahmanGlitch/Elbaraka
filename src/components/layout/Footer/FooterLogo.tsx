import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="space-y-4">

      <div className="relative w-20 h-20">
        <Image
          src="/logo.jpg"
          alt="El Baraka Restaurant"
          fill
          className="object-cover rounded-full"
        />
      </div>


      <p className="
        text-sm 
        text-gray-400 
        leading-7
      ">
        El Baraka Restaurant
        <br />
        Authentic taste with unforgettable experience.
      </p>


      <p className="
        text-sm
        text-gray-500
      ">
        Since 1995
      </p>

    </div>
  );
}