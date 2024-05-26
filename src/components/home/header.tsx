"use client";
import { memo, useState } from "react";
import { Button } from "../ui/button";
import Icon from "../icon/icon";
import OurMenu from "./our-menu";
import SearchInput from "../ui/search-input";
import SignIn from "../auth/user-login";

const Header = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  function showLoginPopup() {
    setIsOpenLogin(true);
  }
  function showMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="py-6 md:py-0 px-4 md:px-0">
      <div className="py-4  md:flex items-center flex-col shadow-md w-[100vw] gap-y-4 hidden">
        {/* top header  */}
        <div className="flex items-center gap-x-4 ">
          <div className="flex items-center w-[80vw] gap-x-4 px-20 xl:px-12 ">
            <div>
              <h1 className="text-3xl italic font-semibold text-orange-color">
                OrderGem
              </h1>
            </div>
            <div
              className="flex items-center gap-x-4 relative cursor-pointer"
              onClick={showMenu}
            >
              {isOpen ? <Icon name="X" /> : <Icon name="Menu" />}
              Category
              {isOpen && <OurMenu />}
            </div>

            <div className="text-black w-1/2 lg:w-full flex items-center relative">
              <SearchInput
                name=""
                type="text"
                placeholder="Search for anything"
              />
              <p className="lg:bg-orange-color lg:text-white-color p-2 absolute top-1 right-1 lg:right-4 rounded-full">
                <Icon name="Search" />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 mr-20 xl:mr-12">
            <div onClick={showLoginPopup}>
              <Button className="bg-transparent text-black-color hover:bg-transparent border-2 border-orange-color">
                Sign in
              </Button>
            </div>
            <div className="flex items-center gap-x-4 text-xl">
              <Icon name="Heart" />
              <Icon name="Gift" />
              <Icon name="ShoppingBag" />
            </div>
          </div>
        </div>

        {/* bottom header  */}
        <div className="flex justify-center gap-x-8">
          <p className=" font-semibold cursor-pointer flex items-center gap-x-2">
            <Icon name="Gift" /> Gift Mode
          </p>
          <p className=" font-semibold cursor-pointer">Mathers Day Markdowns</p>
          <p className=" font-semibold cursor-pointer">Home Favorites </p>
          <p className=" font-semibold cursor-pointer">Fashion Finds</p>
          <p className=" font-semibold cursor-pointer">Registry</p>
        </div>
      </div>
      {/* our menu  */}
      <div
        className="flex items-center gap-x-4 relative cursor-pointer md:hidden"
        onClick={showMenu}
      >
        {isOpen ? <Icon name="X" /> : <Icon name="Menu" />}
        Category
        {isOpen && <OurMenu />}
      </div>

      {/* login ? */}
      {isOpenLogin && (
        <SignIn toggle={isOpenLogin} setToggle={setIsOpenLogin} />
      )}
    </div>
  );
});

export default Header;
