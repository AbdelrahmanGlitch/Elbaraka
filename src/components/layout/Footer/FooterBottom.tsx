import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";


export default function FooterBottom(){

  return (

    <div className="
      border-t
      border-white/10
      py-5
    ">


      <div className="
        container
        mx-auto
        px-5
        flex
        flex-col
        md:flex-row
        gap-4
        justify-between
        items-center
      ">


        <p className="
          text-sm
          text-gray-500
          text-center
        ">
          © {new Date().getFullYear()} El Baraka Restaurant.
          All rights reserved. Created and Developed by Abdelrahman Ahmed
        </p>




        <div className="
          flex
          gap-4
        ">


          <a
            href="https://www.facebook.com/ElBarakaFriedChicken/"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            <FaFacebookF size={18}/>
          </a>



          <a
            href="https://www.instagram.com/elbarakafriedchicken/"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            <FaInstagram size={18}/>
          </a>


        </div>


      </div>


    </div>

  );
}