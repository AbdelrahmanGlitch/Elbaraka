"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import Container from "../layout/Container";

import {
  categories
} from "../../hooks/data/categories";


import {
  useLanguage
} from "../../app/providers/LanguageProvider";



export default function Categories(){


  const {
    language,
    messages
  } = useLanguage();



  return (

    <section
        id="categories"
      className="
      py-20
      "
    >

      <Container>


        {/* Heading */}

        <div
          className="
          mx-auto
          max-w-2xl
          text-center
          "
        >


          <motion.h2

            initial={{
              opacity:0,
              y:20
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            className="
            text-3xl
            font-bold
            text-foreground
            sm:text-4xl
            "

          >

            {
              messages.home.categoriesTitle
            }


          </motion.h2>





          <p
            className="
            mt-4
            text-muted
            "
          >

            {
              messages.home.categoriesDescription
            }

          </p>



        </div>






        {/* Cards */}


        <div

          className="
          mt-12
          grid
          grid-cols-2
          gap-5
          sm:grid-cols-3
          lg:grid-cols-5
          "

        >


        {
          categories.map((category,index)=>(


            <motion.div


              key={category.id}


              initial={{
                opacity:0,
                y:30
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}


              transition={{
                delay:index * .1
              }}


              className="
              group
              cursor-pointer
              rounded-3xl
              bg-card
              p-4
              text-center
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              border
              border-border
              "

            >



              {/* Image */}

              <div

                className="
                relative
                mx-auto
                h-28
                w-28
                overflow-hidden
                rounded-full
                "

              >

                <Image

                  src={category.image}

                  alt={category.title}

                  fill

                  className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  "

                />


              </div>






              {/* Name */}

              <h3

                className="
                mt-5
                font-semibold
                text-foreground
                "

              >

                {
                  language === "ar"
                  ?
                  category.arabic
                  :
                  category.title
                }


              </h3>




            </motion.div>


          ))
        }


        </div>




      </Container>


    </section>


  );


}