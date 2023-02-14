import React from "react";
import Images from "../assets/images";
import WorkLoad from "../components/home/WorkLoad";

function HomePage() {
  return (
    <div className="flex flex-col z-[800]">
      <div className="bg-blue mt-10">
        <div className="container px-14 flex flex-row m-auto h-screen items-center justify-between">
          <div className="flex flex-col max-w-[50rem]">
            <p className="uppercase text-pink mb-10 tracking-[2px]">
              Modern studio
            </p>
            <h1 className="capitalize text-8xl tracking-[-4px] font-bold">
              We're help <br /> to build your <br /> dream project
            </h1>
            <p className=" text-gray text-xl my-10">
              Agency Providers a full service range including technical <br />{" "}
              skills, design, business understanding.
            </p>
            <div className="flex flex-row gap-14 items-center">
              <div className="uppercase cursor-pointer bg-pink py-4 px-5 font-bold">
                <p>How we work</p>
              </div>
              <div className="text-xl cursor-pointer">Contact Us</div>
            </div>
          </div>
          <div className="flex flex-col max-w-xl">
            <img src={Images.HeroImg} alt="hero img" />
          </div>
        </div>
      </div>
      <div className="container px-14 m-auto w-full h-[12rem]">
        <div className="flex flex-row items-center justify-between h-full border-b border-line_color">
          <img src={Images.Cm1} alt="" />
          <img src={Images.Cm2} alt="" />
          <img src={Images.Cm3} alt="" />
          <img src={Images.Cm4} alt="" />
          <img src={Images.Cm5} alt="" />
          <img src={Images.Cm3} alt="" />
        </div>
      </div>
      <div className="container px-14 flex flex-row m-auto h-screen items-center justify-between">
        <div className="flex flex-col max-w-xl">
          <img src={Images.HomeAboutImg} alt="hero img" />
        </div>
        <div className="flex flex-col max-w-[35rem]">
          <p className="uppercase text-pink mb-10 tracking-[2px]">About</p>
          <h1 className="capitalize text-5xl font-bold text-text_dark">
            An Experience <br /> Design Agency
          </h1>
          <p className=" text-gray text-xl mt-10 text-text_dark">
            Provides a full service range
          </p>
          <p className=" text-light_dark text-[17px] my-10">
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </p>
          <div className="flex flex-row gap-14 items-center">
            <div className="uppercase cursor-pointer bg-pink py-4 px-7 font-bold">
              <p>About US</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-14 m-auto w-full h-[14rem]">
        <div className="flex flex-row items-center justify-between h-full ">
          <WorkLoad title="72%" description="Years of experience" />
          <WorkLoad title="73+" description="Agency members" />
          <WorkLoad title="875" description="Projects complete" />
        </div>
      </div>
      <div className="container px-14 flex flex-row m-auto mt-[20rem] items-center justify-between">
        <div className="flex flex-col max-w-[35rem]">
          <p className="uppercase text-pink mb-10 tracking-[2px]">
            How we work
          </p>
          <h1 className="capitalize text-5xl font-bold text-text_dark">
            Making Your Projects <br />
            Look Awesome
          </h1>

          <p className=" text-light_dark text-[17px] my-10">
            Technical skills, design, business understanding, ability to put
            themselves in the merchant's shoes.
          </p>
          <div className="flex flex-row gap-14 items-center">
            <div className="uppercase cursor-pointer bg-pink py-4 px-7 font-bold">
              <p>read more</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-14">
            <p className="text-7xl font-bold text-text_dark">1</p>
            <p className="text-text_dark font-bold text-2xl">
              Full service range including
            </p>
          </div>
          <div className="flex flex-row items-center gap-14">
            <p className="text-7xl font-bold text-text_dark">2</p>
            <p className="text-text_dark font-bold text-2xl">
              Technical skills, design, business
            </p>
          </div>
          <div className="flex flex-row items-center gap-14">
            <p className="text-7xl font-bold text-text_dark">3</p>
            <p className="text-text_dark font-bold text-2xl">
              Themselves in the merchant's
            </p>
          </div>
        </div>
      </div>
      <div className="container px-14 flex flex-row m-auto mt-[20rem] items-center justify-between">
        <div className="flex flex-col max-w-xl bg-gray w-[600px] h-[388px]">
          <img src={Images.VideoImg} alt="" />
        </div>
        <div className="flex flex-col max-w-[35rem]">
          <p className="uppercase text-pink mb-10 tracking-[2px]">Video Reel</p>
          <h1 className="capitalize text-5xl font-bold text-text_dark">
            Unlock The Greatest <br />
            Value Possible
          </h1>
          <p className=" text-light_dark text-[17px] my-10">
            Design, business understanding, ability to put themselves in the
            merchant's shoes meant to partner.
          </p>
        </div>
      </div>
      <div className="container px-14 flex flex-row m-auto h-[30rem]"></div>
    </div>
  );
}

export default HomePage;
