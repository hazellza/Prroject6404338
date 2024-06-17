import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import Navbar from "../../components/Navbar/Navbar";

import "./History.css";
function History() {
  return (
    <section id="history-page" className="min-h-screen">
      <Navbar></Navbar>
      <div className="mt-40">
        <Calendar></Calendar>
      </div>
    </section>
  );
}

export default History;
