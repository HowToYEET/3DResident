import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../public/placeholder.jpg";
import ListOfApartments from './GETApartments.js'
export default function Apartments() {

  let itemList = ListOfApartments.map((item, index) => {
    const navigate = useNavigate();

    const toSpecificApartment = (Apartment) => {
      navigate(`${index}`, { state: Apartment });
    }
    return (
      <a>
        <div onClick={() => toSpecificApartment(item)}>
          <div className=" hover:bg-blue-300 flex justify-center rounded-lg grid grid-cols-2 gap-5 p-2">
            <div className="">
              <h2 className="text-lg">{item.RoadName} &nbsp;&nbsp;&nbsp; </h2>
              <p className="text-sm opacity-50">{item.ZipCode} &nbsp; {item.city}</p> 
              <h2 className="">Area: {item.sqm}m²</h2>
              <h2 className="">{formatter.format(item.price)}</h2>
            </div>
            <img
              className="hover:bg-blue-300 h-auto w-100 rounded-lg "
              src={item.images[0]}
              alt="placeholder"
            />

          </div>
        </div></a>
    );
  });
  return (
    <div>
      <div className=" relative top-20 p-4">
        <h1 className="text-3xl mx-5">{ListOfApartments.length.toString()} Apartments in Aalborg district</h1>
      </div>
      <main className="relative mx-5  top-20 pb-5 grid grid-cols-2 gap-5">
        {itemList}
      </main>
    </div>
  );
}

const formatter = new Intl.NumberFormat("dk-DK", {
  style: "currency",
  currency: "DKK",
});

