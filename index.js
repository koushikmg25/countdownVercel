// Set the actual start and end dates for the countdown
// const startDate = new Date("01 sep, 2025 00:00:00").getTime(); // start time of countdown
// const endDate = new Date("29 sep, 2025 23:51:00").getTime(); // end time of countdown

const startDate = new Date("sep 1, 2025 08:00:00 AM").getTime();
const endDate = new Date("sep 28, 2025 12:00:00 PM").getTime();

// Function to add a leading zero to single-digit numbers (e.g., 4 → 04)
function padZero(num) {
  return num < 10 ? "0" + num : num;
}

// Set an interval to update the countdown every second (1000 ms)
let x = setInterval(function updateTimer() {
  const now = new Date().getTime(); // get current time in milliseconds 

  const distanceCovered = now - startDate; // time passed since start
  const distancePending = endDate - now; // time left until end

  // Time conversions in milliseconds
  const oneDayInMillis = 24 * 60 * 60 * 1000; // ms in a day
  const oneHourInMillis = 60 * 60 * 1000; // ms in an hour
  const oneMinInMillis = 60 * 1000; // ms in a minute
  const oneSecondInMillis = 1000; // ms in a second

  // Check if countdown has expired
  if (distancePending < 0) {
    clearInterval(x); // stop the interval (no more updates)
    document.getElementById("countdown").innerHTML = "EXPIRED"; // show expired message
    document.getElementById("progress-bar").style.width = "100%"; // fill progress bar
    return; // exit the function
  }

  // Calculate remaining time
  const days = Math.floor(distancePending / oneDayInMillis); // full days left
  const hrs = Math.floor((distancePending % oneDayInMillis) / oneHourInMillis); // hours left
  const mins = Math.floor((distancePending % oneHourInMillis) / oneMinInMillis); // minutes left
  const secs = Math.floor(
    (distancePending % oneMinInMillis) / oneSecondInMillis
  ); // seconds left

  // Display the countdown numbers in the HTML, padded with zero
  document.getElementById("days").innerHTML = padZero(days);
  document.getElementById("hours").innerHTML = padZero(hrs);
  document.getElementById("minutes").innerHTML = padZero(mins);
  document.getElementById("seconds").innerHTML = padZero(secs);

  // Calculate total time of the countdown
  const totalDistance = endDate - startDate;

  // Calculate percentage of time passed
  const percentageDistance = (distanceCovered / totalDistance) * 100;

  // Update the progress bar width based on percentage completed
  document.getElementById("progress-bar").style.width =
    percentageDistance + "%";
}, 1000); // repeat every 1000 ms (1 second)
