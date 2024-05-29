import { ArchiveHeaders } from "../types/ArchiveHeaderType";
import { Post } from "../types/PostType";
import {Months} from '../enums/MonthsEnum'

export const getYearsAndMonths = (x: Post[]): ArchiveHeaders[] => {
  let y = [] as ArchiveHeaders[];
  x.forEach((entry) => {
    if (!y.some((e) => e.year === new Date(entry.createdAt).getFullYear())) {
      y.push({
        year: new Date(entry.createdAt).getFullYear(),
        months: getMonths(entry),
      });
    }
  });
  return y;
};

const getMonths = (x: Post): string[] => {
  let y = [] as string[];
  if (!y.includes(Months[new Date(x.createdAt).getMonth()])) {
    y.push(Months[new Date(x.createdAt).getMonth()]);
  }
  return y;
};
