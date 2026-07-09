"use client";


import { useLanguage } from "../../app/providers/LanguageProvider";


export default function PlaceOrderButton(){

const {language}=useLanguage();


return (

<button

type="submit"

className="
w-full
h-14
rounded-2xl
bg-primary
hover:bg-primary-hover
text-white
font-bold
text-lg
transition
mt-6
"

>

{

language==="ar"
?"تأكيد الطلب"
:"Place Order"

}


</button>

)

}