import Image from "next/image";

import {
 MenuItem
} from "../../types/menu";

import { useCart } from "../../context/CartContext";
import QuantitySelector from "../cart/QuantitySelector";


interface Props {

 item:MenuItem;

}



export default function MenuCard({
 item
}:Props){



const price =
item.price ??
item.price_delivery;

const { cart, addItem } = useCart();

const cartItem = cart.find(
  (product) => product.id === item.id
);



return (

<div className="
bg-card
border
border-border
rounded-2xl
overflow-hidden
group
">


<div className="
relative
h-56
bg-neutral-200
">


{
item.image ?

<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
group-hover:scale-105
transition
duration-300
"

/>


:

<div className="
h-full
flex
items-center
justify-center
text-muted
">

No Image

</div>

}



</div>




<div className="p-5">


<h3 className="
text-xl
font-bold
">

{item.title}

</h3>


<p className="
text-muted
text-sm
mt-1
">

{item.arabic}

</p>




{
item.description &&

<p className="
text-sm
mt-3
text-muted
leading-6
">

{item.description}

</p>

}




{
item.sauce_options &&

<div className="mt-4">


<p className="
font-medium
text-sm
">

Choose Sauce:

</p>    

</div>

}





<div className="
flex
justify-between
items-center
mt-6
">


<div>


<span className="
text-price
font-bold
text-lg
">

{price ?? "Ask"}

</span>


<span className="
text-muted
text-sm
ml-1
">

{item.currency}

</span>


</div>




{
cartItem ? (

<QuantitySelector
id={item.id}
/>

) : (

<button
onClick={() =>
addItem({

id:item.id,

title:item.title,

arabic:item.arabic,

description:item.description,

arabic_description:item.arabic_description,

image:item.image,

currency:item.currency,

diningType:"delivery",

unitPrice:
item.price_delivery ??
item.price ??
0

})
}

className="
bg-primary
hover:bg-primary-hover
text-white
px-5
py-2
rounded-xl
transition
"
>

Add

</button>

)
}



</div>



</div>


</div>


);


}