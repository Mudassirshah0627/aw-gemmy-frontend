import About from "@/components/home/about";
import CelebrateMoment from "@/components/home/celebrate-moment";
import Header from "@/components/home/header";
import ShopCategories from "@/components/home/shop-categories";
import React, { memo } from "react";

const page = memo(function page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <CelebrateMoment />
      <ShopCategories />
      <About />
    </div>
  );
});

export default page;
