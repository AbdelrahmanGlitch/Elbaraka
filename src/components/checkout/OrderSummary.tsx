"use client";

import { useCart } from "../../context/CartContext";
import { useLanguage } from "../../app/providers/LanguageProvider";


export default function OrderSummary(){

const {cart,totalPrice}=useCart();

const {language}=useLanguage();


return (

<div className="
bg-card
rounded-2xl
border
border-border
p-6
sticky
top-28
">


<h2 className="
text-2xl
font-bold
mb-6
">

{language==="ar"
?"ملخص الطلب"
:"Order Summary"}

</h2>


<div className="space-y-5">


{
cart.map((item:any)=>(

<div
key={item.id}
className="
flex
justify-between
items-center
border-b
border-border
pb-4
"
>

<div>

<h3 className="font-semibold">

{
language==="ar"
?item.arabic
:item.title
}

</h3>


<p className="text-muted text-sm">

{item.quantity} × {item.unitPrice} EGP

</p>

</div>



<p className="font-bold text-price">

{item.totalPrice} EGP

</p>


</div>


))
}


</div>



<div className="
flex
justify-between
mt-8
pt-5
border-t
border-border
text-xl
font-bold
">


<span>

{
language==="ar"
?"الإجمالي"
:"Total"
}

</span>


<span className="text-price">

{totalPrice} EGP

</span>


</div>


</div>

)

}