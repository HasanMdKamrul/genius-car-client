import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Login = () => {
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const userLogin = async () => {
      try {
        const result = await login(email, password);
        console.log(result.user);
        console.log("User Logged in");
      } catch (error) {
        console.log(error.message);
      }
    };
    userLogin();
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
          <h1 className="text-5xl font-bold mt-5 text-center">Login</h1>

          <div className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-center p-5">
                New to genius car?{" "}
                <Link
                  className="text-lg text-orange-600 font-bold"
                  to="/signup"
                >
                  Sign Up
                </Link>{" "}
              </p>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
