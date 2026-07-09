"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  Menu,
  X,
  ShoppingCart,
  User,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";


import {
  navigation
} from "../../constants/navigation";


import Button from "../ui/Button";

import ThemeToggle from "../ui/ThemeToggle";

import LanguageSwitcher from "../ui/LanguageSwitcher";


import {
  useLanguage
} from "../../app/providers/LanguageProvider";



export default function MobileNav() {


  const [open,setOpen] =
    useState(false);



  const {
    messages
  } = useLanguage();




  useEffect(()=>{


    if(open){

      document.body.style.overflow =
        "hidden";

    }
    else{

      document.body.style.overflow =
        "auto";

    }



    return ()=>{

      document.body.style.overflow =
        "auto";

    }


  },[open]);






  return (

    <div
      className="
      flex
      items-center
      gap-3
      lg:hidden
      "
    >




      {/* Cart */}

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

        <ShoppingCart size={19}/>


        <span

          className="
          absolute
          -right-1
          -top-1
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-accent
          text-[10px]
          font-bold
          text-black
          "

        >

          2

        </span>


      </Link>






      {/* Hamburger */}

      <button

        onClick={()=>setOpen(true)}

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
        "

      >

        <Menu size={24}/>

      </button>








      <AnimatePresence>


      {
        open && (

          <>


          {/* Overlay */}

          <motion.div

            initial={{
              opacity:0
            }}

            animate={{
              opacity:.5
            }}

            exit={{
              opacity:0
            }}

            onClick={()=>setOpen(false)}

            className="
            fixed
            inset-0
            z-40
            bg-black
            "

          />








          {/* Drawer */}


          <motion.aside


            initial={{
              x:"-100%"
            }}


            animate={{
              x:0
            }}


            exit={{
              x:"-100%"
            }}


            transition={{
              type:"spring",
              damping:25
            }}


            className="
            fixed
            left-0
            top-0
            z-50
            h-screen
            w-[85%]
            max-w-sm
            bg-background
            p-6
            shadow-2xl
            "

          >






            {/* Header */}

            <div

              className="
              flex
              items-center
              justify-between
              border-b
              border-border
              pb-5
              "

            >


              <div>

                <h2

                  className="
                  text-2xl
                  font-bold
                  text-primary
                  "

                >

                  EL BARAKA

                </h2>



                <p
                  className="
                  text-sm
                  text-muted
                  "
                >

                  Restaurant

                </p>


              </div>





              <button

                onClick={()=>setOpen(false)}

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
                "

              >

                <X/>

              </button>


            </div>









            {/* Links */}


            <nav

              className="
              mt-8
              space-y-5
              "

            >


            {
              navigation.map((item,index)=>(


                <motion.div

                  key={item.href}


                  initial={{
                    opacity:0,
                    x:-20
                  }}


                  animate={{
                    opacity:1,
                    x:0
                  }}


                  transition={{
                    delay:index*.08
                  }}

                >


                  <Link


                    href={item.href}


                    onClick={()=>
                      setOpen(false)
                    }
                    className="
                    block
                    text-lg
                    font-medium
                    text-foreground
                    hover:text-primary
                    "
                  >


                    {
                      messages.navbar[item.key]
                    }


                  </Link>



                </motion.div>


              ))
            }



            </nav>








            {/* Settings */}


            <div

              className="
              absolute
              bottom-32
              left-6
              right-6
              flex
              items-center
              justify-between
              border-t
              border-border
              pt-5
              pb-5
              "

            >

              <LanguageSwitcher/>


              <ThemeToggle/>


            </div>









            {/* Buttons */}


            <div

              className="
              absolute
              bottom-6
              left-6
              right-6
              space-y-3
              "

            >



              <Link

                href="/login"

                className="
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-border
                py-3
                font-semibold
                text-foreground
                "

              >


                <User size={18}/>


                {
                  messages.navbar.login
                }


              </Link>
              <Link
                href="/menu"
                className="
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-border
                py-3
                font-semibold
                bg-primary
                hover:bg-primary-hover
                text-white
                transition
                "
              >
                {
                  messages.navbar.order
                }
              </Link>


            </div>





          </motion.aside>


          </>

        )
      }



      </AnimatePresence>



    </div>

  );

}