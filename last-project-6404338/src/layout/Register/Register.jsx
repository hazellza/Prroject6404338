import React from "react";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../components/Logo/Logo";

function register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Register สำหรับการ submit ฟอร์ม
  };

  const handleGoogleLogin = () => {
    // Register สำหรับการล็อกอินผ่าน Google
    console.log("Register with Google");
  };
  return (
    <section
      id="register-page"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div>
        <Logo></Logo>
      </div>
      <div className="translucent-bg">
        <div className="text-center mb-14 font-bold text-4xl">
          <h1>Register</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div className="form-flname flex items-center justify-center gap-2">
            <label
              htmlFor="firstname"
              className="input input-bordered   flex items-center gap-2 w-40"
            >
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="grow"
                placeholder="First-Name"
                required
              />
            </label>
            <label
              htmlFor="lastname"
              className="input input-bordered   flex items-center gap-2 w-40 font"
            >
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="grow"
                placeholder="Last-Name"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="input input-bordered flex item-center gap-2 w-auto"
            >
              <input
                type="email"
                id="email"
                name="email"
                className="grow"
                placeholder="Email ( gmail , hotmail )"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label
              htmlFor="username"
              className="input input-bordered flex item-center gap-2 w-auto"
            >
              <input
                type="text"
                id="username"
                name="username"
                className="grow"
                placeholder="Username"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label
              htmlFor="password"
              className="input input-bordered flex item-center gap-2 w-auto"
            >
              <input
                type="password"
                id="password"
                name="password"
                className="grow"
                placeholder="Password"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label
              htmlFor="con-password"
              className="input input-bordered flex item-center gap-2 w-auto"
            >
              <input
                type="password"
                id="con-password"
                name="con-password"
                className="grow"
                placeholder="Confirm-Password"
                required
              />
            </label>
          </div>
          <div className="checkbox-confirm flex justify-end">
            <label className="label cursor-pointer gap-2 -mt-4">
              <span className="label text-sm">Confirm</span>
              <input type="checkbox" className="checkbox" required />
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-neutral w-64 text-white -mt-4"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center -mt-2">
          <label>Or Register With</label>
          <div className="icon-register flex items-center justify-center mt-4">
            <div
              className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center cursor-pointer "
              onClick={handleGoogleLogin}
            >
              <FontAwesomeIcon
                icon={faGoogle}
                size="2x"
                className="icon-google"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default register;
