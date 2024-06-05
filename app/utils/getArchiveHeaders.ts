import { Post } from "../types/PostType";
import { Key } from "react";

type Header = {
  id: number,
  title: string,
  tags: string[]
}

export const getArchiveHeaders = (headers: Post[]) => {
  const lookup = {} as Record<string, Record<number, Header[]>>;
  headers.forEach((x) => {
    const currDate = new Date(x.createdAt);
    const year = currDate.getFullYear();
    const month = currDate.getMonth();
    if (!(year in lookup)) {
      lookup[year] = {};
    }
    if (!(month in lookup[year])) {
      lookup[year][month] = [];
    }
    lookup[year][month].push({
      id: x.id,
      title: x.title,
      tags: x.tags
    });
  });

  return lookup;
};
