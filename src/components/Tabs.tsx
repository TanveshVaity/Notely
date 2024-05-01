// "use client";
// import { useState } from 'react';

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const tabNames = ['all', 'personal', 'home', 'business'];

//   const handleTabChange = (event: any) => {
//     setActiveTab(event.target.id);
//   };

//   return (
//     <div className="flex flex-wrap text-base">
//       {tabNames.map((tab) => (
//         <div key={tab} className="relative">
//           <input
//             className="appearance-none"
//             type="radio"
//             name="tab"
//             id={tab}
//             checked={activeTab === tab}
//             onChange={handleTabChange}
//           />
//           <label
//             htmlFor={tab}
//             className={`cursor-pointer border-b-2 px-7 py-2 w-full ${activeTab === tab ? 'text-blue-400 border-b border-blue-400' : 'border-b border-b-gray-900 text-gray-900 opacity-80'}`}
//           >
//             {tab.toUpperCase()}
//           </label>
//           {activeTab === tab && (
//             <div className="absolute left-0 mt-5">
//               <p>nnote</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Tabs;
