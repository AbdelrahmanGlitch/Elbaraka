"use client";

export default function AddressForm({
register,
language,
}:any){

return(

<div className="bg-card rounded-2xl border border-border p-6 mt-6">

<h2 className="text-2xl font-bold mb-6">

{language==="ar"
?"عنوان التوصيل"
:"Delivery Address"}

</h2>

<div className="grid md:grid-cols-2 gap-4">

<input
{...register("area")}
placeholder={language==="ar"?"المنطقة":"Area"}
className="p-4 rounded-xl border border-border bg-background"
/>

<input
{...register("street")}
placeholder={language==="ar"?"الشارع":"Street"}
className="p-4 rounded-xl border border-border bg-background"
/>

<input
{...register("building")}
placeholder={language==="ar"?"رقم العقار":"Building"}
className="p-4 rounded-xl border border-border bg-background"
/>

<input
{...register("floor")}
placeholder={language==="ar"?"الدور":"Floor"}
className="p-4 rounded-xl border border-border bg-background"
/>

<input
{...register("apartment")}
placeholder={language==="ar"?"الشقة":"Apartment"}
className="p-4 rounded-xl border border-border bg-background"
/>

<input
{...register("landmark")}
placeholder={language==="ar"?"علامة مميزة":"Nearby Landmark"}
className="p-4 rounded-xl border border-border bg-background"
/>

</div>

</div>

)

}