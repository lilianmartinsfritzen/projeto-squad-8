import { MomentProps } from "../../utils/types";

function isSelected(day: MomentProps, currentDate: MomentProps) {
  return currentDate.isSame(day, "day");
}

export function beforeToday(day: MomentProps) {
  return day.isBefore(new Date(), "day");
}

function isToday(day: MomentProps) {
  return day.isSame(new Date(), "day");
}

export function dayStyles(day: MomentProps, currentDate: MomentProps) {
  if (beforeToday(day)) return "before"
  if (isSelected(day, currentDate)) return "selected"
  if (isToday(day)) return "today"
  return ""
}