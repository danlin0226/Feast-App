export const convertDateLocalToString = (dateString) => {
  // Create a date object from the date string
  const date = new Date(dateString);

  // Create an array of weekday names
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the weekday name
  const weekday = weekdays[date.getDay()];

  // Create an array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month name
  const month = months[date.getMonth()];

  // Get the day of the month (e.g. 1, 2, 3, etc.)
  const day = date.getDate();

  // Get the hours and minutes
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert the hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Add leading zeros to the minutes if necessary
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Return the formatted date string
  // return `${weekday}, ${month} ${day}, ${hours}:${minutes}${ampm}`;
  return `${weekday}, ${month} ${day}, ${date.getFullYear()}, ${hours}:${minutes}${ampm}`;
};
