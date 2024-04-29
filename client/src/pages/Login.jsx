import React, { useState } from "react";
import HttpClient from "../HttpClient";

import { Link } from "react-router-dom";

export default function Login() {
  const [signUpData, setSignUpData] = useState({});

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,

      [e.target.id]: e.target.value,
    });
  };
  // Assuming handleSubmit is within a component or another function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to login endpoint with user input data
      const res = await HttpClient.post(
        "http://127.0.0.1:5000/login",
        signUpData
      );

      // Log the response data
      // console.log(res.data);
      window.location.href = "/";
    } catch (error) {
      // Handle any errors
      if (error.response.status === 401) {
        alert("Invalid Email/password");
      }
      //console.error("Error occurred:", error);
    }
  };
  return (
    <div className="loginpage">
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now</h1>
              <p className="py-6">
                Ready to sweat? Log in now for access to premier gyms, exclusive
                deals, and community events. Let's get moving!
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-b from-red-500 to-transparent-800">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-black bg-opacity-80"
                    required
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered bg-black bg-opacity-80"
                    required
                    id="password"
                    onChange={handleChange}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary bg-black bg-opacity-80 text-white"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="flex justify-between items-center mb-5 text-1xl">
                <p className="ml-3">Don't have an account?</p>
                <Link to={"/register"}>
                  <span className="text-blue-700 mr-3">Create an Account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//<div
//     className="hero min-h-screen"
//     style={{
//       backgroundImage:
//         "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
//     }}
//   >
//     <div className="hero-overlay bg-opacity-60"></div>
//     <div className="hero-content text-center text-neutral-content">
//       <div className="max-w-md">
//         <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//         <p className="mb-5">
//           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//           excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//           et a id nisi.
//         </p>
//         <button className="btn btn-primary">Get Started</button>
//       </div>
//     </div>
//   </div>
