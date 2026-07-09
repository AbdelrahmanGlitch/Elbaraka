"use client";

export default function PromoCode({
register,
language,
}:any){

return(

<div className="bg-card rounded-2xl border border-border p-6 mt-6">

<h2 className="text-2xl font-bold mb-5">

{language==="ar"
?"كود الخصم"
:"Promo Code"}

</h2>

<input

{...register("promoCode")}

placeholder={
language==="ar"
?"أدخل الكود"
:"Enter Promo Code"
}

className="w-full rounded-xl border border-border bg-background p-4"

/>

</div>

)

}