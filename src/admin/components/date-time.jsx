import React from 'react';

const DateTimeDisplay = ({ isoString }) => {
  const convertToDateAndTime = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();
    const isYesterday = date.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString();

    let day;
    if (isToday) {
      day = 'Today';
    } else if (isYesterday) {
      day = 'Yesterday';
    } else {
      day = 'Old';
    }

    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    return { day, formattedDate, formattedTime };
  };

  const { day, formattedDate, formattedTime } = convertToDateAndTime(isoString);

  return (
    <div>
      {/* <p>Day: {day}</p>
      <p>Date: {formattedDate}</p>
      <p>Time: {formattedTime}</p> */}
      <p className="time">{formattedDate} | {formattedTime} | {day}</p>
    </div>
  );
};

export default DateTimeDisplay;
