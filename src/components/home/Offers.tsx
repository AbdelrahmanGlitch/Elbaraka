"use client";

import Image from "next/image";

import {
motion
} from "framer-motion";


import Container from "../layout/Container";


import {
offers
} from "../../hooks/data/offers";


import {
useLanguage
} from "../../app/providers/LanguageProvider";



export default function Offers(){


const {
language,
messages
}=useLanguage();



return (

<section
className="
py-20
"
>


<Container>


<div
className="
text-center
max-w-2xl
mx-auto
"
>

<h2
className="
text-3xl
sm:text-4xl
font-bold
text-foreground
"
>

{
messages.home.offersTitle
}

</h2>


<p
className="
mt-4
text-muted
"
>

{
messages.home.offersDescription
}

</p>


</div>





<div

className="
mt-12
grid
grid-cols-1
md:grid-cols-3
gap-6
"

>


{
offers.map((offer,index)=>(


<motion.div


key={offer.id}


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
delay:index*.15
}}


className="
relative
overflow-hidden
rounded-3xl
bg-card
border
border-border
group
"

>



<div
className="
relative
h-64
"
>

<Image

src={offer.image}

alt={offer.title}

fill

className="
object-cover
transition
duration-500
group-hover:scale-110
"

/>



<div

className="
absolute
top-5
right-5
rounded-full
bg-accent
px-4
py-2
text-sm
font-bold
text-black
"

>

{
offer.discount
}

</div>


</div>





<div
className="
p-6
"
>


<h3
className="
text-xl
font-bold
text-foreground
"
>

{
language==="ar"
?
offer.arabicTitle
:
offer.title
}

</h3>



<p
className="
mt-3
text-muted
"
>

{
language==="ar"
?
offer.arabicDescription
:
offer.description
}

</p>




<button

className="
mt-5
rounded-full
bg-primary
px-6
py-3
font-semibold
text-white
hover:bg-primary-hover
"

>

{
messages.home.viewOffer
}

</button>


</div>



</motion.div>


))
}


</div>


</Container>


</section>

);

}