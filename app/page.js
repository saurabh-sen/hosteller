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

  return (
      <Suspense fallback={<Loading />}>
        <main>
          {/* login as student or admin or messincharge */}
          <Navbar login={""} />
          {/* <Alert /> */}
          <LandingPage />
          <Gallery />
          <Footer footerbg1={"gray-700"} footerbg2={"gray-800"} />
        </main>
      </Suspense>
  );
}
