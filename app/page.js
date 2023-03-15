import LandingPage from "@/frontendComponent/LandingPage";
import Footer from "@/frontendComponent/Footer";
import { Suspense } from "react";
import Navbar from "@/frontendComponent/Navbar";
import Gallery from "@/frontendComponent/Gallery";
import Loading from "./loading";
// import Alert from "@/frontendComponent/Alert";
import { connectFunction } from "@/backendComponent/helperfunctions/connecttodb";


export default async function Home() {
  const data = await connectFunction();
  if (!data.isConnected)
    return <h1>Something broke at backend related to mongodb {data.error}</h1>;

    {/*cookies se data nikal k props pass krna hai like:- isSession="student"/"admin"/"messincharge" */}
  let isSession = "";
  return (
      <Suspense fallback={<Loading />}>
        <main>
          <Navbar isSession={isSession} />
          <LandingPage />
          <Gallery />
          <Footer footerbg1={"gray-700"} footerbg2={"gray-800"} />
        </main>
      </Suspense>
  );
}
