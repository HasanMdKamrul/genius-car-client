import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import sendPayLoad from "../../Utilities/AuthToken";
// ** signup
const Signup = () => {
  const { createUser, verifyEmail, socialAuthentication } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const socialHandle = () => {
    const socialAuth = async () => {
      try {
        const result = await socialAuthentication(googleProvider);
        console.log(result.user);
        // ** creating the user as payload
        const currentUser = {
          email: result.user.email,
        };

        sendPayLoad(currentUser);
        navigate(from, { replace: true });
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

    //    ** user create

    const userCreation = async () => {
      try {
        const result = await createUser(email, password);
        console.log(result.user);
        console.log("user cretaed");
        const currentUser = {
          email: result.user.email,
        };
        console.log("User Logged in");
        sendPayLoad(currentUser);
        navigate(from, { replace: true });
        // ** verification email send
        const emailVerification = async () => {
          try {
            await verifyEmail();
            alert("Check email for verification");
          } catch (error) {
            console.log(error);
          }
        };
        emailVerification();
      } catch (error) {
        console.log(error.message);
      }
    };
    userCreation();
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
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
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
              Already have an account?{" "}
              <Link
                onClick={socialHandle}
                className="text-lg text-orange-600 font-bold"
                to="/login"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
