import { MenuItem } from "../../types/menu";

import MenuCard from "./MenuCard";


interface Props{

items:MenuItem[];

}



export default function MenuGrid({
items
}:Props){


return (

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
">


{
items.map(item=>(

<MenuCard

key={item.id}

item={item}

/>

))

}


</div>

);


}