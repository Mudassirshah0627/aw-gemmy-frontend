"use client";
import AddProducts from "@/components/dashboard/add-products";
import Header from "@/components/dashboard/header";
import Products from "@/components/dashboard/products";
import Icon from "@/components/icon/icon";
import SearchInput from "@/components/re-usable/search-input";
import Title from "@/components/re-usable/title";
import { useState } from "react";

function Listings() {
  const [addItemPopup, setAddItemPopup] = useState(false);
  function AddProductsItem() {
    setAddItemPopup(!addItemPopup);
  }
  return (
    <div className="flex gap-12 absolute right-0 top-0">
      <div>
        <div className="mt-4 w-full md:w-[70vw] px-4 pt-4 md:pt-0 z-0">
          {/* title and search bar  */}
          <div className="hidden md:flex justify-between items-center border-b-2 pb-4">
            <div className="">
              <Title name="Listings" />
            </div>
            <div className=" flex items-center gap-x-4 relative">
              <div>
                <p className="absolute left-2 top-3">
                  <Icon name="Search" />
                </p>
                <SearchInput placeholder="Search" name="" type="text" />
              </div>
              <div
                className="py-2 cursor-pointer px-2 lg:px-5 text-white-color rounded-md bg-black-color"
                onClick={AddProductsItem}
              >
                <h1 className="flex items-center gap-x-1 text-sm">
                  <Icon name="Plus" /> Add a Listing
                </h1>
              </div>
            </div>
          </div>

          {/* Products and editing  */}
          <div className="flex gap-x-6 justify-between mt-6">
            {/* Products  */}
            <Products />

            {/* editign here  */}
            {/* <ListingEdit /> */}
          </div>

          {/* add item  */}
          {addItemPopup && (
            <AddProducts toggle={addItemPopup} setToggle={setAddItemPopup} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Listings;
