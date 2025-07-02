// src/pages/Calendar.js
import React from 'react';

const calendar = [
  { month: "August", event: "Session Begins" },
  { month: "September", event: "PTM & Mid-Term Exams" },
  { month: "October", event: "Autumn Break" },
  { month: "November", event: "Sports Week" },
  { month: "December", event: "Winter Holidays" },
  { month: "January", event: "School Reopens" },
  { month: "February", event: "Final Revision" },
  { month: "March", event: "Final Exams" },
  { month: "April", event: "New Session Begins" },
  { month: "May", event: "Summer Camp (Optional)" },
  { month: "June-July", event: "Summer Holidays" }
];

const Calendar = () => {
  return (
    <div className="container">
      <h2>Academic Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((item, idx) => (
            <tr key={idx}>
              <td>{item.month}</td>
              <td>{item.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;



// function Calendar() {
//   return (
//     <>
//       <h1>Academic Calendar</h1>
//       <p>Details about the academic calendar will be available here.</p>
//     </>
//   );
// }


