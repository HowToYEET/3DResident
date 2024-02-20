import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaHouseChimney } from "react-icons/fa6";
import { FaHourglassStart } from "react-icons/fa";
import { PiSelectionBackground } from "react-icons/pi";
import { RxBorderSplit } from "react-icons/rx";
import { GrMoney } from "react-icons/gr";
import map from '../public/map1.png';
import { useNavigate } from "react-router-dom";


export default function SelectApartments() {


  const location = useLocation(); //use location.state to get information
  const [slide, Setslide] = useState(0);
  const listOfImages = location.state.images;

  let navigate = useNavigate();
  function ToShowroom(apartment){
    navigate("/Home", apartment)
  }
  const previousslide = () => {
    Setslide(slide === 0 ? listOfImages.length - 1 : slide - 1);
  }

  const nextslide = () => {
    Setslide(slide === listOfImages.length - 1 ? 0 : slide + 1);
  }
  return (
    <div>
      <div className="w-[55%] m-auto  ">

        <div className="relative top-20 overflow-hidden">

          <div className='flex transistion ease-out duration-300 object-fill' style={{ transform: `translateX(-${slide * 100}%)` }}>
            {listOfImages.map((im, index) => {
              return <img className="rounded-lg w-full" src={im} alt={`apartment image ${index + 1}`} />
            })}

          </div>
          <div className="absolute top-0 h-full w-full justify-between items-center flex px-10 text-3xl text-black ">
            <button onClick={previousslide}>
              <FaArrowLeft />
            </button>
            <button onClick={nextslide} >
              <FaArrowRight />
            </button>
          </div>
          <h1 className="text-xl absolute bottom-5 text-black p-5">{location.state.RoadName} </h1>
          <h1 className="text-md opacity-80 absolute bottom-0 text-black p-5">{location.state.ZipCode}, {location.state.city} </h1>

        </div>
        <button onClick={ToShowroom(location.state)} className="relative top-20 overflow-hidden bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2" type="button">See in 3D</button>
        <div className="relative top-20 m-5 overflow-hidden block border-4 border-sky-500 rounded-sm grid lg:grid-cols-2 gap-2 sm:grid-cols-1 md:grid-cols-1">
          <div className="flex m-5">
            <GrMoney className=" place-content-center text-3xl pt-2" /> <h2 className="text-3xl">{formatter.format(location.state.price)}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 gap-y-6 sm:grid-cols-1 m-2">
            <div className="flex">
              <FaHouseChimney className="place-content-center text-2xl pt-2" /> <h2 className="text-xl">{location.state.sqm}m² </h2>
            </div>
            <div className="flex">
              <FaHourglassStart className="place-content-center text-2xl pt-2" /> <h2 className="text-xl">{location.state.year} </h2>
            </div>
            <div className="flex">
              <PiSelectionBackground className="place-content-center text-2xl pt-2" /> <h2 className="sticky flex text-md">ground Area: {location.state.sqm * 2}m² </h2>
            </div>
            <div className="flex">
              <RxBorderSplit className="place-content-center text-2xl pt-2" /> <h2 className="sticky flex text-md">5 rooms </h2>
            </div>
          </div>
          <div className="col-span-2 m-5">
            <h1 className="text-3xl">Description:</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, harum placeat. Voluptas dolor eius saepe odit cum adipisci totam quae ratione tempore possimus harum quas explicabo, vel qui dolore ad!</p>
          </div>
          <div className="col-span-2 m-5">
            <h1 className="text-3xl">Map:</h1>
            <img src={map} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
const formatter = new Intl.NumberFormat("dk-DK", {
  style: "currency",
  currency: "DKK",
});