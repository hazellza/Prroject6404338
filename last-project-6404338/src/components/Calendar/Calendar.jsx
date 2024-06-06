import * as React from "react";
import { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDay, setActiveDay] = useState(currentDate.getDate());
  const [selectedDay, setSelectedDay] = useState(null);
  const [days, setDays] = useState([]);
  const currYear = currentDate.getFullYear();
  const currMonth = currentDate.getMonth();

  useEffect(() => {
    renderCalendar();
  }, [currentDate]);

  const renderCalendar = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    document.querySelector(
      ".current-date"
    ).innerText = `${monthNames[currMonth]} ${currYear}`;
    
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let newDays = [];

    // Days from previous month
    for (let i = firstDayOfMonth; i > 0; i--) {
      newDays.push({
        day: lastDateofLastMonth - i + 1,
        class: "inactive"
      });
    }

    // Days of current month
    for (let i = 1; i <= lastDateofMonth; i++) {
      newDays.push({
        day: i,
        class: i === activeDay && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear() ? "active" : ""
      });
    }

    // Days from next month to complete the last week
    for (let i = lastDayofMonth + 1; i < 7; i++) {
      newDays.push({
        day: i - lastDayofMonth,
        class: "inactive"
      });
    }

    setDays(newDays);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currYear, currMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currYear, currMonth + 1));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <section id="calendar">
    <div className="wrapper">
      <header>
        <p className="current-date"></p>
        <div className="icons">
          <span className="left" onClick={handlePrevMonth}>
            <ChevronLeftIcon />
          </span>
          <span className="right" onClick={handleNextMonth}>
            <ChevronRightIcon />
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {days.map((day, index) => (
            <li key={index} className={day.class} onClick={() => handleDayClick(day.day)}>
              {day.day}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </section>
  );
}

export default Calendar;

{/* {selectedDay && (
  <div className="selected-day-details">
    <h3>Activities on {selectedDay}/{currMonth + 1}/{currYear}</h3>
    <p>No activities scheduled for this day.</p>
  </div>
)} */}