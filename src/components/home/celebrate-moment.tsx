import { memo } from "react";
import Image from "next/image";

const CelebrateMoment = memo(function CelebrateMoment() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="bg-gray-color h-[12rem]  absolute z-20 opacity-10 w-full"></div>
      <div>
        <h1 className="text-xl px-12 text-center lg:text-4xl font-semibold mt-4">
          Celebrate EVERY moment with gifts from small shops!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center  gap-4 mt-12">
        {/* card */}
        <div className="flex flex-col items-center text-wrap w-[10rem] text-center hover:scale-[1.1] hover:blur-[2px] cursor-pointer duration-300">
          <Image
            width={128}
            height={128}
            src="/assets/images/dimond.jpg"
            alt=""
            className="rounded-full w-[8rem] h-[8rem]"
          />
          <h1 className="mt-2 text-lg font-semibold italic">Gifts for Mum</h1>
        </div>
        <div className="flex flex-col items-center text-wrap w-[10rem] text-center hover:scale-[1.1] hover:blur-[2px] cursor-pointer duration-300">
          <Image
            width={128}
            height={128}
            src="/assets/images/dimond.jpg"
            alt=""
            className="rounded-full w-[8rem] h-[8rem]"
          />
          <h1 className="mt-2 text-lg font-semibold italic">Fine Jewellery</h1>
        </div>
        <div className="flex flex-col items-center text-wrap w-[10rem] text-center hover:scale-[1.1] hover:blur-[2px] cursor-pointer duration-300">
          <Image
            width={128}
            height={128}
            src="/assets/images/dimond.jpg"
            alt=""
            className="rounded-full w-[8rem] h-[8rem]"
          />
          <h1 className="mt-2 text-lg font-semibold italic">
            Garden & Floral Gifts
          </h1>
        </div>
        <div className="flex flex-col items-center text-wrap w-[10rem] text-center hover:scale-[1.1] hover:blur-[2px] cursor-pointer duration-300">
          <Image
            width={128}
            height={128}
            src="/assets/images/dimond.jpg"
            alt=""
            className="rounded-full w-[8rem] h-[8rem]"
          />
          <h1 className="mt-2 text-lg font-semibold italic">
            Graduation Gifts{" "}
          </h1>
        </div>
        <div className="flex flex-col items-center text-wrap w-[10rem] text-center hover:scale-[1.1] hover:blur-[2px] cursor-pointer duration-300">
          <Image
            width={128}
            height={128}
            src="/assets/images/dimond.jpg"
            alt=""
            className="rounded-full w-[8rem] h-[8rem]"
          />
          <h1 className="mt-2 text-lg font-semibold italic">Griting Cards</h1>
        </div>
        <div className="flex flex-col items-center text-wrap w-[10rem] text-center hover:scale-[1.1] hover:blur-[2px] cursor-pointer duration-300">
          <Image
            width={128}
            height={128}
            src="/assets/images/dimond.jpg"
            alt=""
            className="rounded-full w-[8rem] h-[8rem]"
          />
          <h1 className="mt-2 text-lg font-semibold italic">
            Up to 30% Off Terms apply
          </h1>
        </div>
      </div>
    </div>
  );
});

export default CelebrateMoment;
