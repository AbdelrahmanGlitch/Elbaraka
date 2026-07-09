"use client";

export default function CustomerInfo({
  register,
  errors,
  language,
}: any) {

  return (

    <div className="bg-card rounded-2xl border border-border p-6">

      <h2 className="text-2xl font-bold mb-6">

        {language==="ar"
        ? "بيانات العميل"
        : "Customer Information"}

      </h2>

      <div className="space-y-5">

        <input
          {...register("fullName")}
          placeholder={
            language==="ar"
            ? "الاسم بالكامل"
            : "Full Name"
          }
          className="w-full p-4 rounded-xl border border-border bg-background"
        />

        <input
          {...register("phone")}
          placeholder={
            language==="ar"
            ? "رقم الهاتف"
            : "Phone Number"
          }
          className="w-full p-4 rounded-xl border border-border bg-background"
        />

        <input
          {...register("secondaryPhone")}
          placeholder={
            language==="ar"
            ? "رقم آخر (اختياري)"
            : "Secondary Phone (Optional)"
          }
          className="w-full p-4 rounded-xl border border-border bg-background"
        />

      </div>

    </div>

  );

}