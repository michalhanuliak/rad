import { format } from 'date-fns';

export function getReadableDate(date: Date) {
  return format(date, 'dd MMM yyyy');
}
