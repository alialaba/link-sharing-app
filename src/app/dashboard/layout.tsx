import Header from "@/components/Header";
import React from "react";
import SimulatorPreview from "./components/SimulatorPreview";


export default function DashboardLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <main className="min-h-screen h-full md:p-4 bg-background w-full overflow-x-hidden">
        <Header />
  
        <div className="lg:flex lg:flex-row lg:gap-4 md:mt-4 md:p-0 p-4">
          <div className="xl:basis-2/5 xl:block hidden">
            <SimulatorPreview />
          </div>
          <div className="xl:basis-3/5 lg:basis-1/2">{children}</div>
        </div>
      </main>
    );
  }