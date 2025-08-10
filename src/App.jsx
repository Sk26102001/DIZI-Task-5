import React from "react";
import AboutSection from "./components/AboutSection";
import FounderSection from "./components/FounderSection";
import Teamsection from "./components/Teamsection";
import MileStonesSection from "./components/MileStonesSection";
import ContactFooter from "./components/ContactFooter";
import ContactUs from "./components/ContactUs"
import CopyRight from "./components/CopyRight"

export default function App() {
  return (
    <>
      <AboutSection />
      <FounderSection />
      <Teamsection />
      <MileStonesSection />
      <ContactUs />
      <ContactFooter />
      <CopyRight />
    </>
  );
}
