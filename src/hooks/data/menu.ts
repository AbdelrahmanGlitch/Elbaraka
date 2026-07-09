import {
  MenuCategory,
  MenuItem
} from "../../types/menu";



const rawMenuData:MenuCategory[] = [
    {
      "id": 1,
      "title": "Broasted Meals",
      "arabic": "وجبات البروستد",
      "items": [
        {
          "id": "broasted-1",
          "title": "Quarter Broasted Chicken Meal",
          "arabic": "ربع فرخة بروستد",
          "description": "Broasted chicken quarter (thigh) + fries + 1 bread + small garlic sauce + ketchup",
          "arabic_description": "ورك فرخة بروستد + بطاطس + 1 خبز + تومية صغيرة + كاتشب",
          "price_delivery": 140,
          "price_dine_in": 150,
          "currency": "EGP",
          "image": '/menu/broasted-1.png'
        },
        {
          "id": "broasted-2",
          "title": "Chicken Strips Meal (3 pcs)",
          "arabic": "وجبة سترپس (3 قطع)",
          "description": "3 chicken strips + fries + bread + garlic sauce + ketchup",
          "arabic_description": "بطاطس + خبز + تومية + كاتشب",
          "piece_count": 3,
          "price_delivery": 155,
          "price_dine_in": 165,
          "currency": "EGP",
          "image": '/menu/broasted-2.png'
        },
        {
          "id": "broasted-3",
          "title": "Chicken Strips Meal (5 pcs)",
          "arabic": "وجبة سترپس (5 قطع)",
          "description": "5 chicken strips + fries + bread + garlic sauce + ketchup",
          "arabic_description": "بطاطس + خبز + تومية + كاتشب",
          "piece_count": 5,
          "price_delivery": 215,
          "price_dine_in": 225,
          "currency": "EGP",
          "image": "/menu/broasted-2.png"
        },
        {
          "id": "broasted-4",
          "title": "Al Baraka Meal",
          "arabic": "وجبة البركة",
          "description": "Half broasted chicken + fries + 1 bread + garlic sauce + coleslaw cup + ketchup",
          "arabic_description": "نص فرخة بروستد + بطاطس + 1 خبز + تومية + علبة كول سلو + كاتشب",
          "price_delivery": 240,
          "price_dine_in": 255,
          "currency": "EGP",
          "image": "/menu/broasted-3.png"
        }
      ]
    },
    {
      "id": 2,
      "title": "Basmatio",
      "arabic": "بسمتيو",
      "items": [
        {
          "id": "basmatio-1",
          "title": "Basmatio",
          "arabic": "بسمتيو",
          "description": "Basmati rice bowl topped with chicken and your choice of sauce",
          "arabic_description": "اختار الصوص اللي تحبه",
          "sauce_options": [
            { "title": "BBQ + Garlic", "arabic": "باربيكيو + ثومية" },
            { "title": "Ranch", "arabic": "رانش" },
            { "title": "Sweet Chili", "arabic": "سويت تشيلي" },
            { "title": "Cheesy", "arabic": "تشيزي" }
          ],
          "price_delivery": 110,
          "price_dine_in": 115,
          "currency": "EGP",
          "image": "/menu/basmatio.png"
        }
      ]
    },
    {
      "id": 3,
      "title": "Fatta",
      "arabic": "الفتات",
      "items": [
        {
          "id": "fatta-1",
          "title": "Fatta",
          "arabic": "فتة",
          "description": "Basmati rice + sauce of your choice + chicken strips + coleslaw cup",
          "arabic_description": "رز بسمتي + صوص من اختيارك + سترپس + علبة كول سلو",
          "sauce_options": [
            { "title": "BBQ + Garlic", "arabic": "باربيكيو + ثومية" },
            { "title": "Ranch", "arabic": "رانش" },
            { "title": "Sweet Chili", "arabic": "سويت تشيلي" },
            { "title": "Cheesy", "arabic": "تشيزي" }
          ],
          "price_delivery": 165,
          "price_dine_in": 175,
          "currency": "EGP",
          "image": "/menu/fatta.png"
        }
      ]
    },
    {
      "id": 4,
      "title": "Extras",
      "arabic": "الإضافات",
      "items": [
        {
          "id": "extra-1",
          "title": "Sweet Chili Sauce",
          "arabic": "صوص سويت تشيلي",
          "price": 30,
          "currency": "EGP",
          "image": "/menu/Sweet Chili.png"
        },
        {
          "id": "extra-2",
          "title": "Ranch Sauce",
          "arabic": "صوص رانش",
          "price": 30,
          "currency": "EGP",
          "image": "/menu/Ranch Sauce.png"
        },
        {
          "id": "extra-3",
          "title": "Cheesy Fries",
          "arabic": "تشيزي فرايز",
          "price": 60,
          "currency": "EGP",
          "image": "/menu/Cheesy Fries.png"
        },
        {
          "id": "extra-4",
          "title": "Drink",
          "arabic": "مشروب",
          "price": 25,
          "currency": "EGP",
          "image": "/menu/Drink.png"
        },
        {
          "id": "extra-5",
          "title": "Coleslaw",
          "arabic": "كول سلو",
          "price": 20,
          "currency": "EGP",
          "image": "/menu/Coleslaw.png"
        },
        {
          "id": "extra-6",
          "title": "BBQ Sauce",
          "arabic": "صوص باربيكيو",
          "price": 5,
          "currency": "EGP",
          "image": "/menu/BBQ Sauce.png"
        },
        {
          "id": "extra-7",
          "title": "Cheddar Sauce",
          "arabic": "صوص شيدر",
          "price": 40,
          "currency": "EGP",
          "image": "/menu/Cheddar Sauce.png"
        },
        {
          "id": "extra-8",
          "title": "Water",
          "arabic": "مياه",
          "price": 10,
          "currency": "EGP",
          "image": "/menu/Water.png"
        },
        {
          "id": "extra-9",
          "title": "Large Garlic Sauce",
          "arabic": "تومية كبير",
          "price": 40,
          "currency": "EGP",
          "image": "/menu/Large Garlic Sauce.png"
        },
        {
          "id": "extra-10",
          "title": "Kaiser Bread (1 pc)",
          "arabic": "1 عيش كيزر",
          "price": 30,
          "currency": "EGP",
          "image": "/menu/Kaiser Bread (1 pc).png"
        },
        {
          "id": "extra-11",
          "title": "Chicken Strip (single pc)",
          "arabic": "قطعة سترپس",
          "price": 40,
          "currency": "EGP",
          "image": "/menu/Chicken Strip (single pc).png"
        },
        {
          "id": "extra-12",
          "title": "Basmati Rice",
          "arabic": "أرز بسمتي",
          "price": 30,
          "currency": "EGP",
          "image": "/menu/Basmati Rice.png"
        },
        {
          "id": "extra-13",
          "title": "Fries Pack",
          "arabic": "باكيت بطاطس",
          "price": 40,
          "currency": "EGP",
          "image": "/menu/Fries Pack.png"
        },
        {
          "id": "extra-14",
          "title": "Combo (Fries Pack + Drink)",
          "arabic": "كومبو",
          "description": "Fries pack + drink",
          "arabic_description": "باكت بطاطس + مشروب",
          "price": 55,
          "currency": "EGP",
          "note": "Doesn't fit a listed category cleanly — placed under Extras, flag if it should live elsewhere",
          "image": "/menu/Combo (Fries Pack + Drink).png"
        }
      ]
    }
]

const prepareMenuItems = (
  items: MenuItem[]
): MenuItem[] => {


  return items.flatMap((item) => {


    if (item.sauce_options) {


      return item.sauce_options.map((sauce, index) => {


        return {

          ...item,


          id: `${item.id}-${index}`,


          title:
          `${item.title} - ${sauce.title}`,


          arabic:
          `${item.arabic} - ${sauce.arabic}`,


          sauce_options: undefined,


        };


      });


    }


    return item;


  });


};




export const menuData:MenuCategory[] =

rawMenuData.map((category)=>({


  ...category,


  items:
  prepareMenuItems(category.items)


}));