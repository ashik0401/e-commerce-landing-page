import Image from "next/image";
import Preheader from "./Components/Preheader";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ContactInfo from "./Components/ContactInfo";
import Overview from "./Components/Overview";
import Companies from "./Components/Companies";
import Banner from "./Components/Banner";

export default function Home() {
  return (
    <div>
      <Preheader />
      <Navbar />
      <div className="pt-32">
        <Hero />
      </div>
      <ContactInfo/>
      <Overview/>
      <Companies/>
      <Banner/>
    </div>
  );
}
