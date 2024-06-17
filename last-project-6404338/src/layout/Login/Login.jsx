import React, { useState } from "react";
import "./Login.css";
import Logo from "../../components/Logo/Logo";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showError = () => {
    document.querySelector(".error-message").classList.remove("hidden");
  };
  const delError = () => {
    document.querySelector(".error-message").classList.add("hidden");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      showError();
    } else if (username || password) {
      delError();
    }
  };

  return (
    <section
      id="login-page"
      className="min-h-screen flex flex-col items-center justify-center "
    >
      <div>
        <Logo></Logo>
      </div>
      <div className="translucent-bg">
        <div className="text-center mb-14 font-bold text-4xl">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div className="form-group">
            <label
              htmlFor="username"
              className="input input-bordered flex items-center gap-2 w-auto "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16  16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                id="username"
                name="username"
                className="grow"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label
              htmlFor="password"
              className="input input-bordered flex items-center gap-2 w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                className="grow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-4 w-4 cursor-pointer opacity-70"
                onClick={() => {
                  const passwordInput = document.getElementById("password");
                  const type =
                    passwordInput.getAttribute("type") === "password"
                      ? "text"
                      : "password";
                  passwordInput.setAttribute("type", type);
                  const eyeIcon = document.getElementById("eye-icon");
                  if (type === "password") {
                    eyeIcon.setAttribute(
                      "d",
                      "M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z"
                    );
                  } else {
                    eyeIcon.setAttribute(
                      "d",
                      "M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"
                    );
                  }
                }}
              >
                <path
                  id="eye-icon"
                  d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z"
                />
              </svg>
            </label>
          </div>
          <div className="error-message text-red-700 grid justify-items-end hidden">
            <label className="text-xs flex items-center gap-1 font-semibold">
              Please Input username or password
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </label>
          </div>
          <div className="text-end">
            <label className="text-xs">
              Don't have an account?
              <a href={"/register"} className="font-bold ml-1">
                Sign up
              </a>
            </label>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-neutral w-64 text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
