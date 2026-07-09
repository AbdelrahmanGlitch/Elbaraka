import {
  Phone,
  MessageCircle,
  Clock
} from "lucide-react";


export default function FooterContact(){

  return (

    <div>


      <h3 className="
        text-lg
        font-semibold
        mb-5
      ">
        Contact Us
      </h3>



      <ul className="space-y-4">


        <li className="
          flex
          gap-3
          items-center
          text-sm
        ">

          <Phone
            size={18}
            className="text-yellow-500"
          />

          <span className="text-gray-400">
            01234567890
          </span>

        </li>



        <li className="
          flex
          gap-3
          items-center
          text-sm
        ">

          <MessageCircle
            size={18}
            className="text-yellow-500"
          />


          <span className="text-gray-400">
            WhatsApp Available
          </span>


        </li>




        <li className="
          flex
          gap-3
          items-center
          text-sm
        ">


          <Clock
            size={18}
            className="text-yellow-500"
          />


          <span className="text-gray-400">
            Daily: 12 PM - 2 AM
          </span>


        </li>



      </ul>



    </div>

  );
}