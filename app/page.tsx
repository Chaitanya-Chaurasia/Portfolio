"use client";
import Footer from "./components/homepage/footer";
import LeftContainer from "./components/homepage/left-container";
import Navbar from "./components/navbar";
import ParticlesContainer from "./components/particles";
import "./styles/home.css";

export default function Home() {
  return (
    <main
      id="background"
      className="flex min-h-screen flex-col items-center justify-center gap-2 p-1 overflow-auto "
    >
      <ParticlesContainer />
      <div className=" flex flex-[0.1_0.1_0%] text-white rounded-2xl">
        <Navbar />
      </div>
      <div className="flex flex-[3_3_0%] justify-center p-10 g-2 text-white rounded-2xl">
        <LeftContainer />
      </div>
      <div className="flex flex-[0.1_0.1_0%] p-5 m-1 text-white rounded-md items-center justify-center">
        <Footer />
      </div>
    </main>
  );
}
