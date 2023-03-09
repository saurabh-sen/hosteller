
import LandingPage from "@/frontendComponent/LandingPage"
import Footer from "@/frontendComponent/Footer"
import { Suspense } from "react";
import Navbar from "../frontendComponent/Navbar";
import Gallery from "../frontendComponent/Gallery";
import Loading from "./loading";

export default function Home() {
  
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Navbar />
        <LandingPage/>
        <Gallery />
        <Footer footerbg1={"gray-700"} footerbg2={"gray-800"}/>
      </main>
    </Suspense>
  );
}
