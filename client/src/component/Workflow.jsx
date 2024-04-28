import gym3 from "../assets/gym3.jpg";
import { features } from "../constraints/Index";

export default function Workflow() {
  return (
    <div className="relative bg-transparent min-h-[400px]">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
          Workout Sessions.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap mt-10 lg:mt-20 bg-gradient-to-r from-red-500 to-transparent">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
