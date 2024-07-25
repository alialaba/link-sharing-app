import React from "react";
import { AddLink } from "../components/AddLink";
import SimulatorPreview from "../components/SimulatorPreview";

const LinksPage = () => {
  return (
    <div className="lg:flex lg:flex-row lg:gap-4 md:mt-4 md:p-0 p-4 w-full">
      <div className="xl:basis-2/5 lg:block hidden">
        <SimulatorPreview />
      </div>

      <div className="xl:basis-3/5 lg:basis-1/2">
        <AddLink />
      </div>
    </div>
  );
};

export default LinksPage;

