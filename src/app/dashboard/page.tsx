import Header from "@/components/dashboard/header";
import Icon from "@/components/icon/icon";
import React, { memo } from "react";

const Dashboard = memo(function Dashboard() {
  return (
    <div className="mt-10 w-full md:w-[70vw] px-4">
      {/* title  */}
      <div className="sm:flex items-center justify-between ">
        <div className="w-1/2">
          <h1 className=" text-xl lg:text-3xl font-semibold italic">
            Whats new PreciousGemPort
          </h1>
          <p className="flex items-center gap-x-1">
            171 orders | Create a new Listings
            <span className="mt-1 cursor-pointer">
              <Icon name="ArrowRight" />
            </span>
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <h1 className="text-base">PreciousGemPort.etsy.com </h1>
          <span className="text-sm">
            <Icon name="Link" />
          </span>
        </div>
      </div>

      {/* state for reviews  */}
      <div className="mt-24">
        <div className="sm:flex items-center justify-between ">
          <h1 className="sm:flex items-center justify-center flex-row">
            <span>Stats ourview for</span>
            <span className="border-2 flex items-center py-1 px-4 ml-2 my-2">
              1 days <Icon name="ChevronDown" />
            </span>
          </h1>
          <p>View deleted stats</p>
        </div>
        {/* cards  */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {/* card  */}
          <div className="flex flex-col gap-y-1 shadow-md items-center border-t-2 py-6">
            <h1 className="text-xl italic"> TOTAL VIEWS</h1>
            <h1 className="text-xl font-semibold">36</h1>

            <p className="flex items-center gap-x-2">
              <Icon name="ArrowDownIcon" />
              just now
            </p>
          </div>
          <div className="flex flex-col gap-y-1 shadow-md items-center border-t-2 py-6">
            <h1 className="text-xl italic"> TOTAL VIEWS</h1>
            <h1 className="text-xl font-semibold">36</h1>

            <p className="flex items-center gap-x-2">
              <Icon name="ArrowDownIcon" />
              just now
            </p>
          </div>
          <div className="flex flex-col gap-y-1 shadow-md items-center border-t-2 py-6">
            <h1 className="text-xl italic"> TOTAL VIEWS</h1>
            <h1 className="text-xl font-semibold">36</h1>

            <p className="flex items-center gap-x-2">
              <Icon name="ArrowDownIcon" />
              just now
            </p>
          </div>
          <div className="flex flex-col gap-y-1 shadow-md items-center border-t-2 py-6">
            <h1 className="text-xl italic"> TOTAL VIEWS</h1>
            <h1 className="text-xl font-semibold">36</h1>

            <p className="flex items-center gap-x-2">
              <Icon name="ArrowDownIcon" />
              just now
            </p>
          </div>
        </div>
      </div>
      {/* shop Checklist  */}
      <div className="mt-12">
        <h1 className="text-xl md:text-4xl font-semibold italic">
          Your Shop Checklist
        </h1>
        <div className="flex items-center justify-center h-[15rem] border-b-2 mb-2">
          <h1 className="sm:text-xl font-semibold px-2">
            Nice! Theres nothing you need to do right now.
          </h1>
        </div>
      </div>

      {/* Listings*/}
      <div className="my-12 border-2 flex flex-col  px-4">
        <div className="py-4 flex items-center border-b-2">
          <h1 className="text-2xl sm:text-4xl font-semibold italic">
            Active Listings:
          </h1>
        </div>
        <div className="py-4 flex justify-between items-center border-b-2">
          <h1 className="sm:text-xl font-semibold italic">Expired:</h1>
          <p>143</p>
        </div>
        <div className="py-4 flex justify-between items-center border-b-2">
          <h1 className="sm:text-xl font-semibold italic">Sold out:</h1>
          <p>0</p>
        </div>
        <div className="py-4 flex justify-between items-center">
          <h1 className="sm:text-xl font-semibold italic">Listings:</h1>
          <p>143</p>
        </div>
      </div>
    </div>
  );
});
export default Dashboard;
