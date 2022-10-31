import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={image} alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex w-full max-w-sm shadow-2xl bg-base-100"
        >
          <h1 className="text-5xl font-bold mt-5 text-center">Sign Up</h1>

          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <p className="text-center p-5">
                Already have an account?{" "}
                <Link className="text-lg text-orange-600 font-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
