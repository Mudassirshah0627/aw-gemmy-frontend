import React, { memo } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Icon from "../icon/icon";

const Products = memo(function Products() {
  return (
    <div>
      <div className="w-full md:w-[70%]">
        {/* buttons  */}
        <div className="flex items-center">
          <Button className="rounded-none border-r-2 px-4">Renew</Button>
          <Button className="rounded-none border-r-2 px-4">Renew</Button>
          <Button className="rounded-none border-r-2 px-4">Renew</Button>
          <Button className="rounded-none border-r-2 px-4">Renew</Button>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {/* card */}
          <div className=" shadow-md ">
            <a href="/product-details">
              <Image
                src="/assets/images/dimond.jpg"
                height={32}
                width={500}
                alt=""
                className="h-[8rem] w-full"
              />
            </a>
            <div className="flex flex-col gap-y-6">
              <div className="p-2">
                <p className="font-semibold text-lg">4.Carats Natural</p>
                <p>
                  lot: <span>777</span>
                </p>
                <p>1 in stock</p>
                <p>
                  $<span>999.00</span>
                </p>
                <p>
                  Auto renews <span>May 7 2024</span>
                </p>
              </div>
              <div className="p-2 flex flex-col gap-y-2">
                <div>
                  <p className="font-semibold text-lg">Last 30 Days</p>
                  <p className="flex gap-x-2 items-center">
                    3 visits{" "}
                    <span className="pl-2 border-l-2">0 favorites</span>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-lg">ALL TIME</p>
                  <p className="flex gap-x-2 items-center">
                    0 sales <span className="pl-2 border-l-2">50 reviews</span>
                  </p>
                </div>
                <div className="flex items-center justify-between p-2 border-t-2">
                  <Icon name="Square" />
                  <Icon name="Star" />
                  <Icon name="Settings" />
                </div>
              </div>
            </div>
          </div>

          {/* card */}
          <div className=" shadow-md ">
            <a href="/product-details">
              <Image
                src="/assets/images/dimond.jpg"
                height={32}
                width={500}
                alt=""
                className="h-[8rem] w-full"
              />
            </a>
            <div className="flex flex-col gap-y-6">
              <div className="p-2">
                <p className="font-semibold text-lg">4.Carats Natural</p>
                <p>
                  lot: <span>777</span>
                </p>
                <p>1 in stock</p>
                <p>
                  $<span>999.00</span>
                </p>
                <p>
                  Auto renews <span>May 7 2024</span>
                </p>
              </div>
              <div className="p-2 flex flex-col gap-y-2">
                <div>
                  <p className="font-semibold text-lg">Last 30 Days</p>
                  <p className="flex gap-x-2 items-center">
                    3 visits{" "}
                    <span className="pl-2 border-l-2">0 favorites</span>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-lg">ALL TIME</p>
                  <p className="flex gap-x-2 items-center">
                    0 sales <span className="pl-2 border-l-2">50 reviews</span>
                  </p>
                </div>
                <div className="flex items-center justify-between p-2 border-t-2">
                  <Icon name="Square" />
                  <Icon name="Star" />
                  <Icon name="Settings" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Products;
