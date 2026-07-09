import { MenuCategory } from "../../types/menu";


interface Props {

categories:MenuCategory[];

activeCategory:number;

setActiveCategory:(id:number)=>void;

}



export default function MenuCategoryTabs({

categories,

activeCategory,

setActiveCategory

}:Props){



return (

<div className="
flex
gap-3
overflow-x-auto
mb-10
pb-2
">


{
categories.map((category)=>(


<button

key={category.id}

onClick={()=>
setActiveCategory(category.id)
}


className={`
px-5
py-2
rounded-full
whitespace-nowrap
transition

${
activeCategory===category.id

?
"bg-primary text-white"

:
"bg-card text-foreground border border-border"

}

`}

>

{category.title}


</button>


))

}



</div>

);


}