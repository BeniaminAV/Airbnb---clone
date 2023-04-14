"use client";

import React from "react";
import Container from "../Container";
import TitleFooter from "./TitleFooter";

const Footer = () => {
  return (
    <div className="fixed w-full bottom-0 bg-white z-10 shadow-sm">
      <div className="py-4 border-t-[1px] hidden md:flex">
        <Container>
          <div className="flex flex-row items-start justify-center gap-3 md:gap-0">
            <TitleFooter title="© 2023 Airbnb, Inc." />
            <TitleFooter title="Terms" />
            <TitleFooter title="Sitemap" />
            <TitleFooter title="Privacy" />
            <TitleFooter title="Your Privacy Choices" />
            <TitleFooter title="Destinations" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
