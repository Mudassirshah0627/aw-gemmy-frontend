import { memo } from "react";
import Image from "next/image";

const ShopCategories = memo(function ShopCategories() {
  return (
    <div className="my-12 px-12 w-[100vw]">
      <h1 className="text-4xl font-semibold italic">
        Shop our popular gift categories
      </h1>
      {/* cards  */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="shadow-md w-full md:w-[28vw] lg:w-[22vw] rounded-m hover:shadow-xl">
          <Image
            width={200}
            height={192}
            src="/assets/images/dimond.jpg"
            alt=""
            className="w-full h-[12rem] rounded-md"
          />
          <h1 className="text-xl font-semibold text-center my-6">
            Anniversary gifts
          </h1>
        </div>
        <div className="shadow-md w-full md:w-[28vw] lg:w-[22vw] rounded-m hover:shadow-xl">
          <Image
            width={200}
            height={192}
            src="/assets/images/dimond.jpg"
            alt=""
            className="w-full h-[12rem] rounded-md"
          />
          <h1 className="text-xl font-semibold text-center my-6">
            Gift for him
          </h1>
        </div>
        <div className="shadow-md w-full md:w-[28vw] lg:w-[22vw] rounded-m hover:shadow-xl">
          <Image
            width={200}
            height={192}
            src="/assets/images/dimond.jpg"
            alt=""
            className="w-full h-[12rem] rounded-md"
          />
          <h1 className="text-xl font-semibold text-center my-6">
            Gift for her
          </h1>
        </div>
        <div className="shadow-md w-full md:w-[28vw] lg:w-[22vw] rounded-m hover:shadow-xl">
          <Image
            width={200}
            height={192}
            src="/assets/images/dimond.jpg"
            alt=""
            className="w-full h-[12rem] rounded-md"
          />
          <h1 className="text-xl font-semibold text-center my-6">
            Wedding Gift
          </h1>
        </div>
      </div>
    </div>
  );
});

export default ShopCategories;
