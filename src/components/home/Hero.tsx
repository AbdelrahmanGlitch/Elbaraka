"use client";

import Image from "next/image";

import {
  useLanguage
} from "../../app/providers/LanguageProvider";

import Container from "../layout/Container";

import Button from "../ui/Button";
import Link from "next/dist/client/link";



export default function Hero(){


const {
 messages
}=useLanguage();



return (

<section
className="
relative
min-h-screen
flex
items-center
overflow-hidden
"
>


<Container>


<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
items-center
pt-24
"
>


{/* Text */}

<div>


<span
className="
inline-flex
rounded-full
bg-accent
px-5
py-2
text-sm
font-semibold
text-black
"
>

{
messages.home.badge
}

</span>



<h1
className="
mt-6
text-4xl
font-bold
leading-tight
text-foreground
sm:text-5xl
lg:text-6xl
"
>

{
messages.home.heroTitle
}

</h1>




<p
className="
mt-6
max-w-xl
text-lg
text-muted
"
>

{
messages.home.heroDescription
}

</p>




<div
className="
mt-8
flex
flex-wrap
gap-4
"
>

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
  {messages.home.primaryButton}
</Link>

<Link href="#categories">
  <Button variant="outline">
    {messages.home.secondaryButton}
  </Button>
</Link>


</div>


</div>





{/* Image */}

<div
className="
hidden
lg:block
relative
h-[400px]
lg:h-[550px]
"
>

<Image

src="/chickenphoto.png"

alt="El Baraka Food"

fill

className="
object-contain
-rotate-45
"

priority

/>


</div>



</div>


</Container>


</section>

)

}