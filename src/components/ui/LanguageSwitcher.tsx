"use client";


import { Globe } from "lucide-react";

import {
  useLanguage
} from "../../app/providers/LanguageProvider";



export default function LanguageSwitcher(){


const {
 language,
 setLanguage
}=useLanguage();




return (

<button

onClick={()=>{

setLanguage(
language==="en"
?
"ar"
:
"en"
);


}}


className="
flex
items-center
gap-2
rounded-full
border
border-border
bg-card
px-4
py-2
text-sm
font-medium
text-foreground
"

>

<Globe size={17}/>


{
language==="en"
?
"AR"
:
"EN"
}


</button>

);


}