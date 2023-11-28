import { NavLink, useParams } from "react-router-dom";

export default function SelectHouses() {
    const someHouses = [new House(1,"Hobrovej 1341", 103, "./placeholder.jpg", 1200000)]

     let itemList = someHouses.map((item, index) => {
       return (
         <>
         <NavLink to={`${item.id}`}>
           <div className=" bg-sky-500 hover:bg-sky-700 flex justify-center rounded-lg" >
             <div>
               <h2 className="text-lg">{item.RoadName}</h2>
               <h2 className="">Area: {item.sqm}m²</h2>
               <h2 className="">{formatter.format(item.price)}</h2>
               <img className="object-cover h-auto w-80 rounded-lg place-content-center" src={item.image} alt="placeholder"/>
             </div>
           </div>
           </NavLink>
         </>
       );
     });
     return (
       <>
         <main className=" mx-5 bg-sky-100 relative top-40 grid grid-cols-3 gap-5">{itemList}</main>
       </>
     );
   }
   const formatter = new Intl.NumberFormat('dk-DK', {
     style: 'currency',
     currency: 'DKK',
   });
   class House{
     constructor(id, RoadName, sqm, image, price){
        this.id = id
         this.RoadName = RoadName;
         this.sqm = sqm;
         this.image = image
         this.price = price
     }
   }