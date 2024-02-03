import { format } from "date-fns";

export function formatDate(inputDate) {
  // Parse the input date
  const parsedDate = new Date(inputDate);

  // Format the date as "dd-MM-yyyy"
  return format(parsedDate, "dd-MM-yyyy");
}