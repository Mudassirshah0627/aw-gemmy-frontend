"use client";
import { memo, useState } from "react";
import Icon from "../icon/icon";
import SearchInput from "../ui/search-input";
import { useRouter } from "next/router";

const Header = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeShowMenu() {
    setIsOpen(!isOpen);
  }

  function showMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="md:w-[15rem] lg:w-[20rem] z-50">
      <div className="md:hidden absolute top-4 left-4 z-50 ">
        {isOpen ? (
          <div onClick={closeShowMenu} className="cursor-pointer ">
            <Icon name="X" />
          </div>
        ) : (
          <div onClick={showMenu} className="cursor-pointer">
            <Icon name="Menu" />
          </div>
        )}
      </div>
      <div
        className={`shadow-md bg-white-color  w-[15rem] lg:w-[20rem] overflow-y-scroll h-screen md:left-0 fixed top-0 ${
          isOpen ? "left-[0]" : "left-[-20rem]"
        } px-6 pt-6`}
      >
        {/* profile  */}
        <div className="flex items-center gap-x-4  py-2">
          <div className="flex items-center gap-x-4 p-2 bg-black text-white-color rounded-full">
            <Icon name="Store" />
          </div>
          <div className="">
            <p className="text-2xl font-semibold">Shop Manager</p>
          </div>
        </div>

        {/* search bar  */}
        <div className="w-full flex items-center gap-x-4 relative">
          <p className="absolute left-2">
            <Icon name="Search" />
          </p>

          <SearchInput placeholder="Search" name="" type="text" />
        </div>

        {/* navigation  */}
        <div className="flex flex-col gap-y-4 my-6 transition-all ease-in duration-1000">
          <a href="/dashboard">
            <div
              className="flex items-center gap-x-4 cursor-pointer text-xl"
              onClick={closeShowMenu}
            >
              <Icon name="Home" />
              Dashboard
            </div>
          </a>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <a href="/listings">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="ListTodo" />
                Listings
              </div>
            </a>
          </div>
          <a href="">
            <div
              className="flex items-center gap-x-4 cursor-pointer text-xl"
              onClick={closeShowMenu}
            >
              <Icon name="Mail" />
              Messages
            </div>
          </a>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <a href="">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="Truck" />
                Orders & Shipping
              </div>
            </a>
          </div>
          <a href="">
            <div className="flex items-center gap-x-4 cursor-pointer text-xl ">
              <Icon name="Star" />
              Star Seller
            </div>
          </a>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <a href="">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="BarChart" />
                Stats
              </div>
            </a>
          </div>
          <a href="">
            <div
              className="flex items-center gap-x-4 cursor-pointer text-xl"
              onClick={closeShowMenu}
            >
              <Icon name="Landmark" />
              Finances
            </div>
          </a>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <a href="">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="Megaphone" />
                Marketing
              </div>
            </a>
          </div>
          <a href="">
            <div className="flex items-center gap-x-4 cursor-pointer text-xl ">
              <Icon name="Grip" />
              Integration
            </div>
          </a>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <a href="">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="User" />
                Community & Help
              </div>
            </a>
          </div>
          <a href="">
            <div
              className="flex items-center gap-x-4 cursor-pointer text-xl"
              onClick={closeShowMenu}
            >
              <Icon name="Settings" />
              Settings
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Header;

// export const HeaderWrapper = memo(function HeaderWrapper() {
//   const router = useRouter();

//   return router.pathname !== "/" ? <Header /> : null;
// });
