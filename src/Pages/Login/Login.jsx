import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Login = () => {
  const { login, socialAuthentication } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const socialHandle = () => {
    const socialAuth = async () => {
      try {
        const result = await socialAuthentication(googleProvider);
        console.log(result.user);

        // ** creating the user as payload

        const currentUser = {
          email: result.user.email,
        };

        // ** sending the payload to the server

        const sendPayLoad = async () => {
          try {
            const response = await fetch(
              `https://genius-car-server-ruby.vercel.app/jwt`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(currentUser),
              }
            );

            const data = await response.json();

            const token = data.token;

            localStorage.setItem("geniusToken", token);
            navigate(from, { replace: true });
          } catch (error) {
            console.log(error);
          }
        };
        sendPayLoad();
      } catch (error) {
        console.log(error);
      }
    };
    socialAuth();
  };

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
        navigate(from, { replace: true });
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
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="mt-[30px] text-center text-lg  font-semibold">
                <small className="mb-[30px]"> Or Log In With</small>
                <div className="flex justify-center">
                  <FaFacebook className="w-[55px] h-[55px] mr-4 text-primary" />
                  <FaInstagram className="w-[55px] h-[55px] mr-4 text-blue-500" />
                  <FaGoogle
                    onClick={socialHandle}
                    className="w-[55px] h-[55px] text-success"
                  />
                </div>
              </div>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
