export interface SauceOption {

  title:string;

  arabic:string;

}



export interface MenuItem {


  id:string;


  title:string;

  arabic:string;



  description?:string;

  arabic_description?:string;



  image?:string;



  piece_count?:number;



  sauce_options?:SauceOption[];



  price?:number;



  price_delivery?:number;


  price_dine_in?:number;



  currency:string;



  note?:string;


}



export interface MenuCategory {


  id:number;


  title:string;


  arabic:string;


  items:MenuItem[];


}