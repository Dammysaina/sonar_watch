// import React from "react";
// import HomeIcon from "../assets/images/home.svg";


// const SampleView = () => {
//   return (
//     <div>
//        <button className="flex items-center focus:outline-none focus:bg focus:bg-textLightGreen focus:text focus:text-textGreen focus:span focus:span-textGreen" >
//           <span className="mr-2">
//             <img src={HomeIcon} alt="homeicon" className="w-5" />
//           </span>
//           Discover Protocols
//         </button>
//         <ul>
//       <li tabIndex="0" className="my-4 text-black flex items-center font-medium text-base focus:outline-none focus:bg-textLightGreen focus:text-textGreen">
//         <span className="mr-2">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M3 9.24L12 2l9 7.24V20a2 2 0 01-2 2h-5v-5H10v5H5a2 2 0 01-2-2V9.24z" />
//           </svg>
//         </span>
//         Discover Protocols
//       </li>
//     </ul>
//     </div>
//   );
// };

// export default SampleView;

import React from 'react';

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-current"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M3 9.24L12 2l9 7.24V20a2 2 0 01-2 2h-5v-5H10v5H5a2 2 0 01-2-2V9.24z" />
  </svg>
);

function SampleView() {
  return (
    <button>
      <li
        tabIndex="0"
        className="my-4 text-black flex items-center font-medium text-base focus:outline-none focus:bg-textLightGreen focus:text-textGreen"
      >
        <span className="mr-2">
          <HomeIcon />
        </span>
        Discover Protocols
      </li>
    </button>
  );
}

export default SampleView;

