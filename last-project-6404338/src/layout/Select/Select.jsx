import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Select.css";

function Select() {
  return (
    <section id="select-page" className="min-h-screen">
      <Navbar></Navbar>
      <div className="flex justify-center">
        <div className="container-pot translucents-bg rounded-box mt-12 flex items-center flex-col p-10">
          <div className="text-center font-bold text-4xl mb-4 -mt-2">
            <h1>Home</h1>
          </div>
          <div className="list-pot h-4/5 w-full bg-neutral rounded-box p-5 gap-2 space-y-2 text-white flex  flex-col">
            <div className="flex items-center justify-between mx-8">
              <div className="pot btn w-64 h-24">
                <label></label>
              </div>
              <div>
                <button className="btn btn-circle hover:bg-rose-500 hover:border-rose-500 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mx-8">
              <div className="pot btn w-64 h-24">
                <label></label>
              </div>
              <div>
                <button className="btn btn-circle hover:bg-rose-500 hover:border-rose-500 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-neutral w-64 text-white text-center mt-7 text-2xl">
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Select;
