import Link from "next/link";

const links = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Menu",
    href: "/menu"
  },
  {
    title: "Branches",
    href: "/branches"
  },
  {
    title: "Offers",
    href: "/offers"
  },
  {
    title: "Contact",
    href: "/contact"
  }
];


export default function FooterLinks() {

  return (

    <div>

      <h3 className="
        text-lg
        font-semibold
        mb-5
      ">
        Quick Links
      </h3>


      <ul className="space-y-3">

        {
          links.map((link)=>(
            <li key={link.href}>

              <Link
                href={link.href}
                className="
                  text-gray-400
                  hover:text-white
                  transition
                  text-sm
                "
              >
                {link.title}
              </Link>

            </li>
          ))
        }

      </ul>

    </div>

  );
}