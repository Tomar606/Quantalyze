"use client";
import { InfiniteMovingCardsDemo } from "@/components/ui/infinitemovingcards";
import Navbar from "@/components/ui/Navbar";
import Spline from "@splinetool/react-spline";
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-t from-[#ffea00] to-[#fff79a] text-white h-screen bg-[#ffea00]">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="top-80 flex flex-col absolute items-center justify-center flex-1 text-center text-[#333533] -mt-40">
          <h1 className="text-7xl bebas-neue">WE&apos;RE</h1>
          <h2
            className="text-7xl bebas-neue hover:bg-[#202020] hover:bg-cover hover:bg-no-repeat hover:text-[#ffea00] display:block z-40"
            onMouseEnter={() => {
              document.querySelector("main")?.classList.add("bg-marketers");
              document.querySelector("main")?.classList.add("hide-text");
            }}
            onMouseLeave={() => {
              document.querySelector("main")?.classList.remove("bg-marketers");
              document.querySelector("main")?.classList.remove("hide-text");
            }}
          >
            QUANTALYZE MARKETERS.
          </h2>
          <p className="text-7xl bebas-neue">
            WHERE CREATIVITY MEETS CALCULATED
          </p>
          <p className="text-7xl bebas-neue">SUCCESS.</p>
          <Spline
            className="w-[200px] h-[200px] -mt-52 z-30"
            scene="https://prod.spline.design/jwy-DeQRu96pr9Sa/scene.splinecode"
          />
          <div className="">
            <InfiniteMovingCardsDemo />
          </div>
        </div>
      </div>
    </main>
  );
}
