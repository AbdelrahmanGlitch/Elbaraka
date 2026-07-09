"use client";


import {
useForm
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
checkoutSchema
} from "../../schemas/checkoutSchema";


import CustomerInfo from "../../components/checkout/CustomerInfo";
import AddressForm from "../../components/checkout/AddressForm";
import OrderNotes from "../../components/checkout/OrderNotes";
import PromoCode from "../../components/checkout/PromoCode";
import OrderSummary from "../../components/checkout/OrderSummary";
import PlaceOrderButton from "../../components/checkout/PlaceOrderButton";


import { useLanguage } from "../providers/LanguageProvider";



export default function CheckoutPage(){


const {language}=useLanguage();



const {

register,

handleSubmit,

formState:{errors}

}=useForm({

resolver:zodResolver(checkoutSchema),

defaultValues:{

fullName:"",
phone:"",
secondaryPhone:"",
area:"",
street:"",
building:"",
floor:"",
apartment:"",
landmark:"",
notes:"",
promoCode:""

}

});



function onSubmit(data:any){

console.log(data);

// later:
// send order API

}



return (

<main className="
min-h-screen
bg-background
pt-28
pb-20
">


<div className="
container
mx-auto
px-4
max-w-7xl
">


<h1 className="
text-4xl
font-bold
mb-10
">

{
language==="ar"
?"إتمام الطلب"
:"Checkout"
}

</h1>



<form

onSubmit={
handleSubmit(onSubmit)
}

className="
grid
lg:grid-cols-[2fr_1fr]
gap-8
"


>


<div>


<CustomerInfo

register={register}

errors={errors}

language={language}

/>


<AddressForm

register={register}

language={language}

/>


<OrderNotes

register={register}

language={language}

/>


<PromoCode

register={register}

language={language}

/>


</div>



<div>


<OrderSummary />


<PlaceOrderButton />


</div>



</form>


</div>


</main>

)

}