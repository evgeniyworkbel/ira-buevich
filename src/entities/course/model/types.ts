type Level = "Beginner" | "Elementary" | "Pre-intermediate" | "Intermediate" | "Upper-intermediate";

export type Course = {
  level: Level;
  lessonsCount: number;
  description: string;
  listItems: string[];
};
