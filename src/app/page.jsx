import Image from "next/image";
import Card from "./components/Card";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="px-16">
      <div className="w-full flex items-center justify-between gap-80">
        {/* Kiri */}
        <div className="flex w-1/2 flex-col gap-6">
          <div className="flex w-full items-center gap-4">
            <h1 className="text-9xl font-bold leading-tight">EXPLORE</h1>
            <Image
              src="/line1.png"
              alt="decorative line"
              width={500}
              height={300}
              className="w-36 h-20 mt-2"
            />
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-orange-500 text-white px-10 py-4 rounded-t-full rounded-br-full shadow hover:bg-orange-600 transition">
              <img
                src="/white-arrow.png"
                alt=""
                className="w-20 h-10 fill-white"
              />
            </button>
            <h2 className="text-9xl font-semibold">WORLD</h2>
          </div>
          <div className="flex items-center gap-4 max-w-2xl">
            <img src="/clover.svg" alt="clover" className="w-12 h-12" />
            <img src="/spikes.svg" alt="clover" className="w-12 h-12" />
            <p>
              Travel is the movement of people between distant geographical
              locations. Travel can be done by foot or bycicle
            </p>
          </div>
        </div>

        {/* Kanan */}
        <div className="relative w-1/2 flex items-center justify-center h-[42rem]">
          {/* SVG Setengah Lingkaran Kiri */}
          <svg viewBox="0 0 400 400" className="absolute w-[42rem] h-[42rem]">
            <defs>
              <path id="leftHalfCircle" d="M 200,350 A 150,150 0 0,1 200,50" />
            </defs>
            <text fill="#333" fontSize="15" fontWeight="500" letterSpacing="4">
              <textPath
                href="#leftHalfCircle"
                startOffset="50%"
                textAnchor="middle"
              >
                FIND THE BEST PLACE TO TRAVEL AND RELAX YOURSELF
              </textPath>
            </text>
          </svg>

          {/* Hero Image dalam Lingkaran Kiri */}
          <div className="relative w-[28rem] h-[28rem] rounded-t-full rounded-bl-full overflow-hidden shadow-xl z-10">
            <Image src="/hero.jpg" alt="Beach" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <div className="flex items-center gap-48">
          <div className="flex items-center">
            <svg
              width="220"
              height="200"
              viewBox="0 0 320 200"
              className="relative"
            >
              <defs>
                <clipPath id="circleLeft">
                  <circle cx="100" cy="100" r="80" />
                </clipPath>
                <clipPath id="circleRight">
                  <circle cx="180" cy="100" r="80" />
                </clipPath>
              </defs>

              <image
                href="/hero.jpg"
                width="200"
                height="200"
                clipPath="url(#circleRight)"
                x="80"
                y="0"
              />

              <path
                d="M140,25
             A80,80 0 0,1 140,175"
                stroke="white"
                strokeWidth="10"
                fill="none"
              />

              <image
                href="/hero.jpg"
                width="200"
                height="200"
                clipPath="url(#circleLeft)"
                x="0"
                y="0"
              />
            </svg>

            <div className="">
              <h2 className="text-4xl">10,000+</h2>
              <p className="font-light text-slate-500">Travel Places</p>
            </div>
          </div>

          <div className="flex items-center bg-white pl-8 pr-1 py-1 rounded-full">
            <div className="">
              <h3 className="text-sm">Features</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">
                Places people love to visit more and more time
              </p>
            </div>
            <Image
              src="/hero.jpg"
              width={100}
              height={100}
              alt="..."
              className="rounded-full"
            />
          </div>

          <div className="flex items-center px-6">
            <div className="">
              <h2 className="text-xl">Our Story</h2>
              <p className="text-sm text-slate-500 max-w-[250px]">
                Travel is the movement of people between distant geographical
                locations
              </p>
            </div>
            <button className="h-full bg-orange-500 p-4 py-9 shadow-lg flex items-center justify-center gap-2 cursor-pointer rounded-t-full rounded-br-full">
              <Image
                src="/white-arrow.png"
                width={28}
                height={8}
                alt="white arrow"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <Card />
      </div>

      {/* Landing Page 3 */}
      <div className="flex justify-center py-20 bg-[#f5f4ef] px-4">
        <div className="flex gap-8">
          {/* Item 1 */}
          <div className="relative z-10 w-64 h-64 flex flex-col justify-center items-center text-center bg-white rounded-full shadow-md">
            <span className="text-gray-400 text-lg mb-2">01</span>
            <h2 className="text-xl font-bold">Tour guide</h2>
            <p className="text-gray-600 text-sm mt-2">
              Our best feature
              <br />
              for the customer who believe
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative z-10 w-64 h-64 flex flex-col justify-center items-center text-center bg-white rounded-full shadow-md">
            <span className="text-gray-400 text-lg mb-2">02</span>
            <h2 className="text-xl font-bold">Reliable tour</h2>
            <p className="text-gray-600 text-sm mt-2">
              Our best feature
              <br />
              for the customer who believe
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative z-10 w-64 h-64 flex flex-col justify-center items-center text-center bg-white rounded-full shadow-md">
            <span className="text-gray-400 text-lg mb-2">03</span>
            <h2 className="text-xl font-bold">Friendly price</h2>
            <p className="text-gray-600 text-sm mt-2">
              Our best feature
              <br />
              for the customer who believe
            </p>
          </div>
        </div>
      </div>

      {/* Landing page 4 */}
      <div className="flex flex-col gap-4 py-12">
        <h1 className="text-6xl font-semibold">ADVENTURES CAN FILL</h1>

        <div className="flex gap-16 items-center">
          <h1 className="text-6xl font-semibold">YOUR SOUL</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Travel is the movement of people between distant geographical
            locations. Travel can be done by foot, bycicle. Travel is the
            movement of people
          </p>
        </div>

        <div className="flex justify-end gap-8">
          <div className="flex bg-[#f5f4ef]">
            <div className="relative w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-md">
              {/* SVG Circular Rotating Text */}
              <svg
                className="absolute w-full h-full animate-spin-slow"
                viewBox="0 0 112 112"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 56, 56
                 m -50, 0
                 a 50,50 0 1,1 100,0
                 a 50,50 0 1,1 -100,0"
                  />
                </defs>
                <text
                  fill="black"
                  fontSize="7"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  <textPath
                    href="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    — DEMO VIDEO • DEMO VIDEO • DEMO VIDEO • DEMO VIDEO • DEMO
                    VIDEO —
                  </textPath>
                </text>
              </svg>

              {/* Orange Play Button */}
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center z-10">
                <svg
                  className="w-4 h-4 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/holiday1.jpg"
              width={200}
              height={300}
              alt="..."
              className="w-[960px] h-[280px] rounded-t-full rounded-br-full object-cover"
            />
            <p className="text-lg max-w-4xl text-gray-600 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              odit sequi amet, aspernatur ducimus provident ab nisi
              necessitatibus autem? Quis, illum cum! Labore illo minima
              mollitia.
            </p>
          </div>
        </div>
      </div>

      {/* Landing Page 5 */}
      <div className="flex items-center justify-center gap-20">
        <div className="relative flex items-center justify-center h-[32rem]">
          {/* SVG Setengah Lingkaran Kiri */}
          <svg viewBox="0 0 400 400" className="absolute w-[32rem] h-[32rem]">
            <defs>
              <path id="leftHalfCircle" d="M 200,350 A 150,150 0 0,1 200,50" />
            </defs>
            <text fill="#333" fontSize="15" fontWeight="500" letterSpacing="4">
              <textPath
                href="#leftHalfCircle"
                startOffset="50%"
                textAnchor="middle"
              >
                FIND THE BEST PLACE TO TRAVEL AND RELAX YOURSELF
              </textPath>
            </text>
          </svg>

          {/* Hero Image dalam Lingkaran Kiri */}
          <div className="relative w-[22rem] h-[22rem] rounded-t-full rounded-bl-full overflow-hidden shadow-xl z-10">
            <Image src="/hero.jpg" alt="Beach" fill className="object-cover" />
          </div>
        </div>

        <div className="max-w-3xl flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            sapiente?
          </h1>
          <p className="max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            vel inventore repellat rem corrupti eum repellendus commodi tempora
            magnam, laborum, expedita incidunt id alias maxime necessitatibus
            nisi magni at dolores ut enim veniam quidem obcaecati dolorum.
            Mollitia assumenda soluta deleniti aspernatur debitis facilis nam
            repellat distinctio voluptas. Dolorem, doloremque nostrum. Ullam,
            voluptatum.
          </p>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore
            obcaecati fuga, quia ipsa cupiditate natus, distinctio consectetur
            explicabo dolores aliquam. Labore, quidem harum? Quisquam.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded w-32 flex justify-center rounded-t-full rounded-br-full shadow hover:bg-orange-600 transition cursor-pointer">
            <MoveRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
