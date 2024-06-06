import React from "react";
import "./Setting.css";
import Navbar from "../../components/Navbar/Navbar";

function Setting() {
  return (
    <section id="setting-page" className="min-h-screen">
      <Navbar></Navbar>
      <div className="flex justify-center ">
        <div className="container-setting-form mt-10 rounded-box">
          <div className="text-center font-bold text-4xl mt-4 mb-4">
            <h1>Setting</h1>
          </div>
          <div className="flex justify-center items-center p-4 ">
            <form class="flex justify-center flex-col items-center space-y-2">
              <div className="avatar-form flex items-center space-x-6 mb-4">
                <div class="shrink-0">
                  <img
                    class="h-16 w-16 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                    alt="Current profile photo"
                  />
                </div>
                <label class="block">
                  <span class="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-slate-50 file:text-neutral
                    hover:file:bg-slate-200
                    "
                  />
                </label>
              </div>
              <div className="form-group space-y-5">
                <div className="change-username flex items-center space-x-4">
                  <div className="w-24 font-semibold">
                    <h1>Username :</h1>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                  </label>
                </div>
                <div className="change-email flex items-center space-x-4">
                  <div className="w-24 font-semibold">
                    <h1>Email :</h1>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Username"
                    />
                  </label>
                </div>
                <div className="change-password flex items-center space-x-4">
                  <div className="w-24 font-semibold">
                    <h1>Password :</h1>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
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
                      className="grow"
                      placeholder="password"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center ">
                <button
                  type="submit"
                  className="btn btn-neutral w-64 text-white mt-6"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Setting;
