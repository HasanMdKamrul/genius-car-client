import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Signup = () => {
  const { createUser, verifyEmail } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    //    ** user create

    const userCreation = async () => {
      try {
        const result = await createUser(email, password);
        console.log(result.user);
        console.log("user cretaed");
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
