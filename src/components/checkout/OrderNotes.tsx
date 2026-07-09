"use client";

export default function OrderNotes({
register,
language,
}:any){

return(

<div className="bg-card rounded-2xl border border-border p-6 mt-6">

<h2 className="text-2xl font-bold mb-5">

{language==="ar"
?"ملاحظات"
:"Order Notes"}

</h2>

<textarea

rows={5}

{...register("notes")}

placeholder={
language==="ar"
?"أي ملاحظات على الطلب..."
:"Any special instructions..."
}

className="w-full rounded-xl border border-border bg-background p-4"

/>

</div>

)

}