import { memo } from "react";

const OurMenu = memo(function OurMenu() {
  return (
    <div className=" shadow-md w-[20rem] h-[80vh] overflow-y-scroll z-50 border-2 pb-12 absolute top-12 bg-white-color  ">
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Accessories</h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">
          Art & Collectibles
        </h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Bags & Purses</h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Bath & Beauty</h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">
          Books, Films, & Music
        </h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Clothings</h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">
          Craft Supplies & Tools
        </h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">
          Electronic & Accessories
        </h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Gifts </h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Home & Living</h1>
      </div>

      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Jewellery</h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">
          Paper & Party Supplies
        </h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Toys & Games</h1>
      </div>
      <div className="hover:bg-gray-400 px-4 py-2 cursor-pointer">
        <h1 className="text-lg font-semibold cursor-pointer">Weddings</h1>
      </div>
    </div>
  );
});

export default OurMenu;
