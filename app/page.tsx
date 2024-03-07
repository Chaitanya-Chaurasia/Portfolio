"use client";
import Footer from "./components/homepage/footer";
import LeftContainer from "./components/homepage/left-container";
import Navbar from "./components/navbar";
import ParticlesContainer from "./components/particles";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-2 p-1 "
      style={{
        background: "linear-gradient(to right, #ff00cc, #333399)",
      }}
    >
      <ParticlesContainer />
      <div className=" flex text-white bg-black rounded-2xl">
        <Navbar />
      </div>
      <div className=" flex flex-[3_3_0%] flex-col gap-1">
        <div className="w-full flex flex-[3_3_0%] items-center justify-center p-1 g-2 bg-gray-300/10 text-white rounded-xl">
          <LeftContainer />
        </div>
        <div className="flex flex-1 p-1 text-white rounded-md items-center justify-center">
          <Footer/>
        </div>
      </div>
    </main>
  );
}
