import React from "react";
import HomePageApartment from './hompageApartment.jsx'
export default function HomePage() {
  return (
    <div className="relative top-20">
      <div className="grid grid-cols-2 gap-20 relative auto-cols-auto m-5">
        <h1 className="text-3xl p-6">𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝚁𝚎𝚜𝚒𝚍𝚎𝚗𝚝 3𝙳. 𝙰𝚗 𝙰𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝 𝚛𝚎𝚜𝚒𝚍𝚎𝚗𝚝 𝚠𝚎𝚋𝚜𝚒𝚝𝚎</h1>
        <div className="bg-black">
            <HomePageApartment />
        </div>
        
      </div>
      <button type="button" className="fixed m-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
    </div>
  );
}