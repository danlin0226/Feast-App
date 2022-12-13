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
  return `${weekday}, ${month} ${day}, ${date.getFullYear()}, ${hours}:${minutes}${ampm}`;
};

export const convertStringToDateLocal = (dateString) => {
  // Create a date object from the date string
  const date = new Date(dateString);

  // Get the year, month, and day from the date object
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month is zero-indexed, so add 1
  const day = date.getDate();

  // Get the hours and minutes from the date object
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Return the date in the format "YYYY-MM-DDTHH:MM"
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// const x = convertDate("2022-12-12T16:22");
// console.log(x);
