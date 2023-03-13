import Footer from "@/frontendComponent/Footer";
import NavBar from "@/frontendComponent/Navbar";
import Overview from "@/frontendComponent/Overview/messincharge/index.jsx";
import MessInchargeEase from "@/frontendComponent/Ease/messincharge/index.jsx";
import React from "react";

const Page = () => {
  return (
    <div className="mess_incharge__dashboard">
      <NavBar login={true} />
      <Overview />
      <MessInchargeEase />
      <Footer footerbg1="gray-700" footerbg2="gray-800" />
    </div>
  );
};

export default Page;
