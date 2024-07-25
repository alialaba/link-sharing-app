// import Header from "@/components/Header";
// import React from "react";

// import SimulatorPreview from "@/app/dashboard/components/SimulatorPreview";

// const DashboardPage = () => {
//   return (
//     <div className="min-h-screen bg-[#FAFAFA] h-full md:p-4  w-full overflow-x-hidden">
//       <Header />
//       <div className="lg:flex lg:flex-row lg:gap-4 md:mt-4 md:p-0 p-4">
//         <div className="xl:basis-2/5 xl:block ">
//         <SimulatorPreview/>
//         </div>
//           <div className="xl:basis-3/5 lg:basis-1/2"> </div>
//         </div>
//     </div>
//   );
// };

// export default DashboardPage;


// "use client";
// import React from "react";
// import LinkTab from "./links/page";




// const Dashboard = () => {
//   return (
//     <>
//       <h1>Not found</h1>
//     </>
//   );
// };

// export default Dashboard;

// src/app/dashboard/page.tsx
import { redirect } from 'next/navigation';

export default function Dashboard() {
  redirect('/dashboard/links');
}