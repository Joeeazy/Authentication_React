import React, { useState } from "react";
import { Link } from "react-router-dom";
import HttpClient from "../HttpClient";

export default function Register() {
  const [signUpData, setSignUpData] = useState({});

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,

      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await HttpClient.post(
        "http://127.0.0.1:5000/register",
        signUpData
      );
      if (res.status === 200) {
        window.location.href = "/login";
      }
    } catch (error) {}
  };
  return (
    <div className="loginpage">
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Create an account</h1>
              <p className="py-6">
                Join the fitness revolution! Sign up today to discover top gyms,
                book workouts, and connect with fellow enthusiasts. Start
                sweating!
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
                    className="input input-bordered  bg-black bg-opacity-80"
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
                    className="input input-bordered  bg-black bg-opacity-80"
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
                    className="btn btn-primary  bg-black bg-opacity-80 text-white"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="flex justify-between items-center mb-5 text-1xl">
                <p className="ml-3">Already have an account?</p>
                <Link to={"/login"}>
                  <span className="text-blue-700 mr-10 ">Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
