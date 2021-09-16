import { MomentProps } from "../../utils/types";

export const buildCalendar = (currentDate: MomentProps) => {
  const firstDay = currentDate.clone().startOf("month").startOf("week");
  const lastDay = currentDate.clone().endOf("month").endOf("week");
  const day = firstDay.clone().subtract(1, "day");
  const calendar = [];
  while(day.isBefore(lastDay, "day")) {
    calendar.push(
    Array(7).fill(0).map(() => day.add(1, "day").clone())
  );
  }
  return calendar
}