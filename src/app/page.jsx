import Image from "next/image";

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

      {/* <div className="flex">
        <svg
          width="320"
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
      </div> */}
    </div>
  );
}
