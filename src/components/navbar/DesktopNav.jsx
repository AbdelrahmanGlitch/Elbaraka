"use client";


import Link from "next/link";

import {
  Search,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";


import ThemeToggle from "../ui/ThemeToggle";

import LanguageSwitcher from "../ui/LanguageSwitcher";


import { useLanguage } from "../../app/providers/LanguageProvider";


import { usePathname } from "next/navigation";

import { motion } from "framer-motion";


import { navigation } from "../../constants/navigation";


import Button from "../ui/Button";




export default function DesktopNav() {


  const pathname = usePathname();


  const {
    language,
    messages,
  } = useLanguage();




  return (

    <nav
      className="
      hidden
      lg:flex
      flex-1
      items-center
      justify-between
      ml-10
      "
    >



      {/* Links */}

      <div
        className="
        flex
        items-center
        gap-8
        "
      >

      {
        navigation.map((item)=>{


          const active =
            pathname === item.href;



          return (

            <Link

              key={item.href}

              href={item.href}

              className="
              relative
              group
              py-2
              "

            >


              <span

                className={`
                text-sm
                font-medium
                transition-colors

                ${
                  active
                  ?
                  "text-primary"
                  :
                  "text-foreground/80 hover:text-primary"
                }

                `}

              >

                {
                  messages.navbar[item.key]
                }


              </span>




              {
                active && (

                  <motion.span

                    layoutId="active-navbar"

                    className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    rounded-full
                    bg-primary
                    "

                  />

                )
              }



            </Link>

          );


        })
      }


      </div>





      {/* Actions */}

      <div
        className="
        flex
        items-center
        gap-3
        "
      >



        <LanguageSwitcher />


        <ThemeToggle />



        <button
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-border
          bg-card
          text-foreground
          hover:bg-primary
          hover:text-white
          "
        >

          <Search size={18}/>

        </button>





        <button

          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-border
          bg-card
          text-foreground
          hover:bg-primary
          hover:text-white
          "

        >

          <Heart size={18}/>

        </button>





        <Link

          href="/cart"

          className="
          relative
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-border
          bg-card
          text-foreground
          "

        >

          <ShoppingCart size={18}/>


        </Link>





        <Link

          href="/login"

          className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-foreground
          hover:text-primary
          "

        >

          <User size={17}/>


          {
            messages.navbar.login
          }


        </Link>


        <Link
          href="/menu"
          className="
            bg-primary
            hover:bg-primary-hover
            text-white
            font-bold
            px-8
            py-3
            rounded-full
            transition
          "
        >
          {
            messages.navbar.order
          }
        </Link>



      </div>


    </nav>

  );

}