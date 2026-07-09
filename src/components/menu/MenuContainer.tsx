"use client";


import {
 useState
} from "react";


import {
 menuData
} from "../../hooks/data/menu";


import MenuCategoryTabs from "./MenuCategoryTabs";

import MenuGrid from "./MenuGrid";



export default function MenuContainer(){


const [activeCategory,setActiveCategory] = useState<number>(menuData[0].id);



const category =
menuData.find(
(item)=>
item.id===activeCategory
);



return (

<div className="
container
mx-auto
px-5
">


<h1 className="
text-4xl
font-bold
text-center
mb-10
">

Our Menu

</h1>



<MenuCategoryTabs

categories={menuData}

activeCategory={activeCategory}

setActiveCategory={setActiveCategory}

/>



{
category &&

<MenuGrid

items={category.items}

/>

}



</div>

);


}