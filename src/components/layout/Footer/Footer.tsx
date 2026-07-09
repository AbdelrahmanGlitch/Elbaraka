import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterBranches from "./FooterBranches";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10">

      <div className="container mx-auto px-5 py-12">

        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-5 
          gap-10
        ">

          <FooterLogo />

          <FooterLinks />

          <FooterBranches />

          <FooterContact />

        </div>

      </div>


      <FooterBottom />

    </footer>
  );
}