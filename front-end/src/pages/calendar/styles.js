function isSelected(day, currentDate) {
  return currentDate.isSame(day, "day");
}

export function beforeToday(day) {
  return day.isBefore(new Date(), "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

export function dayStyles(day, currentDate) {
  if (beforeToday(day)) return "before"
  if (isSelected(day, currentDate)) return "selected"
  if (isToday(day)) return "today"
  return ""
}