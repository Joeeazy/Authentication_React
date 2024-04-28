import gym2 from "../assets/gym2.jpg";
import gym1 from "../assets/gym1.jpg";

export default function Features() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Welcome To{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
            Fit spotter
          </span>
        </h1>
        <div>
          <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
            FitSpotter is Kenya's premier online platform connecting fitness
            enthusiasts with top gyms. Discover and book gym sessions, classes,
            and memberships seamlessly. Enjoy exclusive deals, community events,
            and responsive support. Your gateway to a healthier lifestyle
            awaits!
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r  from-red-600 to-red-400 py-3 px-4 mx-5 rounded-md"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-5 rounded-md border bg-black bg-opacity-50"
        >
          Learn More
        </a>
      </div>
      <div className="flex mt-10 justify-center w-1/2">
        <img
          className="rounded-lg shadow-orange-400 mx-2 my-4 p-2 w-full lg:w-1/2"
          src={gym2}
          alt="gym equipment"
        />
        <img
          className="rounded-lg shadow-orange-400 mx-2 my-4 p-2 w-full lg:w-1/2"
          src={gym1}
          alt="gym equipment"
        />
      </div>
    </div>
  );
}
