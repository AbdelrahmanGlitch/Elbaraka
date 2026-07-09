import { MapPin } from "lucide-react";


const branches = [
  {
    name: "Sidi Beshr",
    address: "Alexandria, Egypt"
  },
  {
    name: "Smouha",
    address: "Alexandria, Egypt"
  },
  {
    name: "Ibrahimia",
    address: "Alexandria, Egypt"
  },
  {
    name: "Mandara",
    address: "Alexandria, Egypt"
  }
];


export default function FooterBranches() {

  return (

    <div>

      <h3 className="
        text-lg
        font-semibold
        mb-5
      ">
        Our Branches
      </h3>


      <ul className="space-y-4">


        {
          branches.map((branch)=>(
            
            <li
              key={branch.name}
              className="
                flex
                gap-3
                items-start
                text-sm
              "
            >

              <MapPin
                size={18}
                className="
                  mt-1
                  text-yellow-500
                  shrink-0
                "
              />


              <div>

                <p className="text-white">
                  {branch.name}
                </p>


                <p className="
                  text-gray-400
                  text-xs
                ">
                  {branch.address}
                </p>

              </div>


            </li>

          ))
        }


      </ul>


    </div>

  );
}