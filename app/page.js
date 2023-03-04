
import Landing_page from "@/frontendComponent/Landing_page/Landing_page"
import Footer from "@/frontendComponent/Footer/Footer"
import { Suspense } from "react";
import Navbar from "../frontendComponent/Navbar";
import Loading from "./loading";

export default function Home() {
  
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Navbar />
        <Landing_page/>
        <Footer/>
      </main>
    </Suspense>
  );
}
