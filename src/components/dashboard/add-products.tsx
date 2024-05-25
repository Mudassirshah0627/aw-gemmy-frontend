import { Button } from "../ui/button";
import { memo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AddProducts = memo(function AddProducts(props) {
  function cancelPopup() {
    props.setToggle(!props.toggle);
  }

  return (
    <div className="">
      <div className="px-4 absolute top-6  md:top-[10%] left-[5vw]  sm:left-[20vw] md:left-[30vw] rounded-2xl z-20 bg-white pb-12 w-[350px]  sm:w-[400px] md:w-[600px] shadow-md ">
        <h1 className="text-center mt-4 text-2xl font-semibold">
          First, tell us about your listin
        </h1>
        <p className="text-lg my-4 text-center">
          This basic info helps us understand your listing and how it meets our
          policies. Next you can dive into the full listing form to add all the
          details the make your item special
        </p>

        <div className="flex flex-col gap-y-4">
          <div className="mt-8">
            <h1 className=" mt-4 text-xl font-semibold">
              What type of is it?*
            </h1>

            <div className="mt-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label htmlFor="">Physical Item</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label htmlFor="">Digital files</label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="mt-8">
            <h1 className=" mt-4 text-xl font-semibold">What made it?*</h1>

            <div className="mt-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label htmlFor="">I did</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label htmlFor="">A member of my shop</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label htmlFor="">Another company or person</label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="mt-8">
            <h1 className=" mt-4 text-xl font-semibold">What is it?*</h1>

            <div className="mt-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label htmlFor="">A finish product</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label htmlFor="">A supply or tool to make thongs</label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="mt-8">
            <h1 className=" mt-4 text-xl font-semibold">What is it?*</h1>
            <input
              type="text"
              className="py-3 shadow-md w-full outline-none px-4 "
              placeholder="When did you make  it?"
            />
          </div>
        </div>
        {/*buttons  */}
        <div className="flex items-center justify-center gap-x-4 mt-6">
          <Button onClick={cancelPopup}>Cancel</Button>
          <Button> Submit</Button>
        </div>
        {/* cloe button  */}
      </div>
    </div>
  );
});

export default AddProducts;
