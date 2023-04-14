"use client";

import React from "react";
import { BsDot } from "react-icons/bs";

interface TitleFooterProps {
  title: string;
}

const TitleFooter: React.FC<TitleFooterProps> = ({ title }) => {
  return (
    <div className="text-neutral-600 text-sm hover:underline flex items-center justify-center text-center cursor-pointer">
      <BsDot size={16} />
      {title}
    </div>
  );
};

export default TitleFooter;
