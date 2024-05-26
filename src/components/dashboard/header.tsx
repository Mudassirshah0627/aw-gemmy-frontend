"use client";
import { memo, useState } from "react";
import Icon from "../icon/icon";
import SearchInput from "../ui/search-input";
import { useRouter } from "next/router";
import Link from "next/link";

const AdminHeader = memo(function AdminHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeShowMenu() {
    setIsOpen(!isOpen);
  }

  function showMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-[15rem] lg:w-[20rem]">
      <div className="md:hidden absolute top-4 left-4 z-50">
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
          <Link href="/dashboard">
            <div
              className="flex items-center gap-x-4 cursor-pointer text-xl"
              onClick={closeShowMenu}
            >
              <Icon name="Home" />
              Dashboard
            </div>
          </Link>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <Link href="/listings">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="ListTodo" />
                Listings
              </div>
            </Link>
          </div>
          <Link href="">
            <div
              className="flex items-center gap-x-4 cursor-pointer text-xl"
              onClick={closeShowMenu}
            >
              <Icon name="Mail" />
              Messages
            </div>
          </Link>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <Link href="">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="Truck" />
                Orders & Shipping
              </div>
            </Link>
          </div>
          <Link href="">
            <div className="flex items-center gap-x-4 cursor-pointer text-xl ">
              <Icon name="Star" />
              Star Seller
            </div>
          </Link>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <Link href="">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="BarChart" />
                Stats
              </div>
            </Link>
          </div>
          <Link href="">
            <div
              className="flex items-center gap-x-4 cursor-pointer text-xl"
              onClick={closeShowMenu}
            >
              <Icon name="Landmark" />
              Finances
            </div>
          </Link>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <Link href="">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="Megaphone" />
                Marketing
              </div>
            </Link>
          </div>
          <Link href="">
            <div className="flex items-center gap-x-4 cursor-pointer text-xl ">
              <Icon name="Grip" />
              Integration
            </div>
          </Link>

          <div className="flex items-center justify-between  py-2   rounded-md ">
            <Link href="">
              <div
                className="flex items-center gap-x-4 cursor-pointer text-xl"
                onClick={closeShowMenu}
              >
                <Icon name="User" />
                Community & Help
              </div>
            </Link>
          </div>
          <Link href="">
            <div
              className="flex items-center gap-x-4 cursor-pointer text-xl"
              onClick={closeShowMenu}
            >
              <Icon name="Settings" />
              Settings
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default AdminHeader;
