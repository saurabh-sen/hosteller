import { Suspense } from "react";
import Navbar from "../frontendComponent/Navbar";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Navbar />
      </main>
    </Suspense>
  );
}
