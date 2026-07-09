export default function CheckoutLoading() {

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


        <div className="
          h-10
          w-56
          bg-card
          rounded-lg
          animate-pulse
          mb-10
        " />


        <div className="
          grid
          lg:grid-cols-[2fr_1fr]
          gap-8
        ">


          {/* Form Skeleton */}

          <div className="
            space-y-6
          ">


            <div className="
              h-72
              bg-card
              rounded-2xl
              animate-pulse
            " />


            <div className="
              h-80
              bg-card
              rounded-2xl
              animate-pulse
            " />


            <div className="
              h-48
              bg-card
              rounded-2xl
              animate-pulse
            " />


          </div>



          {/* Summary Skeleton */}

          <div className="
            h-96
            bg-card
            rounded-2xl
            animate-pulse
          " />


        </div>


      </div>


    </main>

  );

}