export type Status = "intro" | "question" | "result";

export type Chapter = {
  id: string;
  name: string;
  introTitle: string;
  introDesc: string;
  introImage: string;
  desc: string;
  choices: string[];
  results: string[];
  toll: [string, number][];
};
