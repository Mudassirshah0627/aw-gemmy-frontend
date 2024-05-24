import { memo } from "react";

const About = memo(function About() {
  return (
    <div className="mt-12">
      <h1 className="text-xl md:text-4xl italic font-semibold text-center">
        What is OrderGem?
      </h1>

      <div className=" px-12 gap-x-8 mt-7 justify-between grid md:grid-cols-2 lg:grid-cols-3 py-4 gap-14">
        <div className="lg:w-[30vw]">
          <h1 className="text-xl md:text-2xl font-semibold italic text-center mb-2">
            A community doing good
          </h1>

          <p className="text-lg font-sans text-center">
            Etsy is a global online marketplace, where people come together to
            make, sell, buy and collect unique items. We’re also a community
            pushing for positive change for small businesses, people, and the
            planet. Here are some of the ways we’re making a positive impact,
            together.
          </p>
        </div>

        <div className="lg:w-[30vw] ">
          <h1 className="text-2xl font-semibold italic text-center mb-2">
            Support independent creators
          </h1>

          <p className="text-lg font-sans text-center">
            There’s no Etsy warehouse – just millions of people selling the
            things they love. We make the whole process easy, helping you
            connect directly with makers to find something extraordinary.
          </p>
        </div>

        <div className="lg:w-[30vw]">
          <h1 className="text-2xl font-semibold italic text-center mb-2">
            Peace of mind
          </h1>

          <p className="text-lg font-sans text-center">
            Your privacy is the highest priority of our dedicated team. And if
            you ever need assistance, we are always ready to step in for
            support.
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
