export function tomorrow() {
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);
  const tomorrowDateString = tomorrowDate.toISOString().split("T")[0];
  return tomorrowDateString;
}

export function today() {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
}

export function getWeekday(date) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = date.getDay();
  return weekdays[dayIndex];
}

export function getTomorrow() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}
