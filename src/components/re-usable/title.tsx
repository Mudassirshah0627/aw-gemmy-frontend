"use client";
import { memo } from "react";
type Tprops = {
  name: string;
};
const Title = memo(function Title(Props: Tprops) {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl  font-semibold">{Props.name}</h1>
    </div>
  );
});

export default Title;
