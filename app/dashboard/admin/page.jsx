import Footer from "@/frontendComponent/Footer";
import NavBar from "@/frontendComponent/Navbar";
import Overview from "@/frontendComponent/Overview/admin/index.jsx";
import AdminEase from "@/frontendComponent/Ease/admin/index.jsx";
import React from "react";

const Page = () => {
  return (
    <div className="mess_incharge__dashboard">
      {/* login as student or admin or messincharge */}
      <NavBar login={"student"} />
      <Overview />
      <AdminEase />
      <Footer footerbg1="gray-700" footerbg2="gray-800" />
    </div>
  );
};

export default Page;
