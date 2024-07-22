import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-14">
        <span className="text-[#F3B739]">
          Discover Your Next Adventure with AI:
        </span>{" "}
        Personalized Itineraries At Your Fingertips
      </h1>

      <p className="text-center text-xl text-gray-500 w-[600px]">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>

      <Link to={"/create-trip"}>
        <Button>Get Started. It&apos;s Free!</Button>
      </Link>
    </div>
  );
};

export default Hero;
