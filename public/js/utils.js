// define your functions like this so they're testable

function reservationFormFilled(date, time, firstName, lastName, email, guests) {
  if ((Boolean(date) && date !== "Pick from Calendar") &&
    (Boolean(time) && time !== "Click for Availability") &&
    (Boolean(firstName) && Boolean(lastName)) &&
    Boolean(email) && Boolean(guests)) {
    return true;
  } else {
    return false;
  }
}

function dateFormatter(date, time) {
  let splitDate, splitTime, militaryHour, militaryMins, newTime, newDate, finalDate;
  splitDate = date.split(" ");
  splitTime = time.split(":")
  militaryHour = (parseInt(splitTime[0]) + 12).toString();
  militaryMins = splitTime[1];
  newTime = militaryHour + ":" + militaryMins + ":00"
  newDate = [
    splitDate[2],
    splitDate[1],
    splitDate[3],
    newTime,
    splitDate[5]
  ];
  finalDate = newDate.join(" ");
  return finalDate;
} 