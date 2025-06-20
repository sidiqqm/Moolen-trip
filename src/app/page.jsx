import Image from "next/image";
import Card from "../components/Card";
import { MoveRight } from "lucide-react";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className=" px-8 lg:px-16">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-80">
        {/* Kiri */}
        <div className="flex w-full flex-col gap-4 justify-center lg:w-1/2 lg:flex-col lg:gap-6">
          <div className="flex gap-2 lg:w-full items-center lg:gap-4">
            <h1 className="text-6xl lg:text-9xl font-bold leading-tight">
              EXPLORE
            </h1>
            <Image
              src="/line1.png"
              alt="decorative line"
              width={500}
              height={300}
              className="w-24 h-12 lg:w-36 lg:h-20 mt-2"
            />
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-orange-500 text-white px-8 py-2 lg:px-10 lg:py-4 rounded-t-full rounded-br-full shadow hover:bg-orange-600 transition">
              <MoveRight className="w-8 h-8 lg:w-20 lg:h-10" />
            </button>
            <h2 className="text-6xl lg:text-9xl font-semibold">WORLD</h2>
          </div>
          <div className="flex lg:items-center gap-4 max-w-2xl">
            <img
              src="/clover.svg"
              alt="clover"
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <img
              src="/spikes.svg"
              alt="clover"
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <p className="text-lg lg:text-base text-gray-600 max-w-3xl">
              Travel is the movement of people between distant geographical
              locations. Travel can be done by foot or bycicle
            </p>
          </div>
        </div>

        {/* Kanan */}
        <div className="relative lg:w-1/2 flex items-center justify-center h-[22rem] lg:h-[40rem]">
          {/* SVG Setengah Lingkaran Kiri */}
          <svg
            viewBox="0 0 400 400"
            className="absolute w-[22rem] h-[22rem] lg:w-[40rem] lg:h-[40rem]"
          >
            <defs>
              <path id="leftHalfCircle" d="M 200,350 A 150,150 0 0,1 200,50" />
            </defs>
            <text fill="#333" fontSize="15" fontWeight="500" letterSpacing="4">
              <textPath
                href="#leftHalfCircle"
                startOffset="50%"
                textAnchor="middle"
              >
                FIND THE BEST PLACE TO TRAVEL AND RELAX
              </textPath>
            </text>
          </svg>

          {/* Hero Image dalam Lingkaran Kiri */}
          <div className="relative w-[16rem] h-[16rem] lg:w-[25rem] lg:h-[25rem] rounded-t-full rounded-bl-full overflow-hidden shadow-xl z-10">
            <Image src="/hero.jpg" alt="Beach" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 max-w-screen-xl w-full">
          {/* Bagian Kiri */}
          <div className="flex flex-col sm:flex-row items-center">
            <div className="relative">
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
                  d="M140,25 A80,80 0 0,1 140,175"
                  stroke="white"
                  strokeWidth="10"
                  fill="none"
                />

                <image
                  href="/holiday4.jpg"
                  width="200"
                  height="200"
                  clipPath="url(#circleLeft)"
                  x="0"
                  y="0"
                />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold">10,000+</h2>
              <p className="font-light text-slate-500">Travel Places</p>
            </div>
          </div>

          {/* Fitur */}
          <div className="flex items-center bg-white pl-6 pr-3 py-3 rounded-full w-full sm:w-auto max-w-md shadow">
            <div className="mr-4">
              <h3 className="text-lg font-semibold">Features</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">
                Places people love to visit more and more time
              </p>
            </div>
            <img
              src="/holiday4.jpg"
              alt="feature"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          {/* Our Story */}
          <div className="flex items-center justify-between gap-4 px-6 w-full sm:w-auto max-w-md">
            <div>
              <h2 className="text-xl font-semibold">Our Story</h2>
              <p className="text-sm text-slate-500 max-w-[250px]">
                Travel is the movement of people between distant geographical
                locations
              </p>
            </div>
            <button className="h-full bg-orange-500 p-4 py-9 shadow-lg flex items-center justify-center gap-2 cursor-pointer rounded-t-full rounded-br-full">
              <img
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
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full lg:justify-center items-center">
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
        <h1 className="text-5xl lg:text-6xl font-semibold">ADVENTURES CAN FILL</h1>

        <div className="flex gap-8 lg:gap-16 items-center">
          <h1 className="text-4xl lg:text-6xl font-semibold">YOUR SOUL</h1>
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
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        <div className="relative flex items-center justify-center h-[28rem] lg:h-[32rem]">
          {/* SVG Setengah Lingkaran Kiri */}
          <svg viewBox="0 0 400 400" className="absolute w-[28rem] lg:w-[32rem] h-[28rem] lg:h-[32rem]">
            <defs>
              <path id="leftHalfCircle" d="M 200,350 A 150,150 0 0,1 200,50" />
            </defs>
            <text fill="#333" fontSize="15" fontWeight="500" letterSpacing="4">
              <textPath
                href="#leftHalfCircle"
                startOffset="50%"
                textAnchor="middle"
              >
                FIND THE BEST PLACE TO TRAVEL AND RELAX
              </textPath>
            </text>
          </svg>

          {/* Hero Image dalam Lingkaran Kiri */}
          <div className="relative w-[18rem] lg:w-[22rem] h-[18rem] lg:h-[22rem] rounded-t-full rounded-bl-full overflow-hidden shadow-xl z-10">
            <Image src="/hero.jpg" alt="Beach" fill className="object-cover" />
          </div>
        </div>

        <div className="max-w-3xl flex flex-col justify-center gap-4">
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

      <Testimonial />
      <Gallery />
    </div>
  );
}
