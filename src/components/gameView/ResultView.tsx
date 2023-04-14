import { FC, useMemo } from "react";
import { Button } from "../Button";
import { Chapter } from "@/utils/types";

type ResultViewProps = {
  chapter: Chapter;
  choice: 0 | 1;
  nextChapter: () => void;
  toll: Record<string, number>;
};

const plurals = {
  "killed-persons": (value: number) =>
    `Personne${value > 1 ? "s" : ""} tuée${value > 1 ? "s" : ""}`,
  "killed-children": (value: number) =>
    `Enfant${value > 1 ? "s" : ""} tué${value > 1 ? "s" : ""}`,
  "dead-dogs": (value: number) =>
    `Chien${value > 1 ? "s" : ""} mort${value > 1 ? "s" : ""}`,
  "alive-against-will": (value: number) =>
    `Personne${value > 1 ? "s" : ""} vivante${
      value > 1 ? "s" : ""
    } contre son gré`,
  assassinated: (value: number) =>
    `Personne${value > 1 ? "s" : ""} assassinée${value > 1 ? "s" : ""}`,
  "sick-children": (value: number) =>
    `Enfant${value > 1 ? "s" : ""} malade${value > 1 ? "s" : ""}`,
  "cancelled-research": (value: number) =>
    `Recherche${value > 1 ? "s" : ""} médicale${value > 1 ? "s" : ""} annulée${
      value > 1 ? "s" : ""
    }`,
  "estimed-clients": (value: number) =>
    `Client${value > 1 ? "s" : ""} estimé${value > 1 ? "s" : ""}`,
  "evaluated-lives": (value: number) =>
    `Vie${value > 1 ? "s" : ""} évaluée${value > 1 ? "s" : ""}`,
  "saved-murderers": (value: number) =>
    `Meurtrier${value > 1 ? "s" : ""} sauvé${value > 1 ? "s" : ""}`,
  "privacy-invasion": (value: number) =>
    `Invasion${value > 1 ? "s" : ""} de la vie privée`,
  "prototype-lost": (value: number) =>
    `Prototype${value > 1 ? "s" : ""} perdu${value > 1 ? "s" : ""}`,
  abonnement: (value: number) => `Abonnement${value > 1 ? "s" : ""}`,
  "failed-projects": (value: number) => `
    Echec de${value > 1 ? "s" : ""} projet${value > 1 ? "s" : ""}`,
  "lost-jobs": (value: number) => `
  Emploi${value > 1 ? "s" : ""} perdu${value > 1 ? "s" : ""}`,
  "missed-opportunities": (value: number) => `
    Opportunité${value > 1 ? "s" : ""} ratée${value > 1 ? "s" : ""}
  `,
  "controlled-minds": (value: number) => `
    Esprit${value > 1 ? "s" : ""} contrôlé${value > 1 ? "s" : ""}`,
  "attemp-love": (value: number) => `
    Tente d'acheter de l'amour`,
};

const ResultView: FC<ResultViewProps> = ({
  chapter,
  choice,
  toll,
  nextChapter,
}) => {
  const { choiceKey, value } = useMemo(() => {
    const choiceKey = chapter.toll[choice]?.[0] as keyof typeof plurals;
    const value = chapter.toll[choice]?.[1];
    return { choiceKey, value };
  }, [chapter, choice]);

  return (
    <div className="flex flex-col items-center justify-center space-y-10 text-gray-700 w-full">
      <div className="flex flex-col md:flex-row-reverse justify-between mx-[10vw] border-4 rounded-lg border-white p-10 px-4 md:px-10 gap-10 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-1/3 bg-white p-4 rounded-xl border-2 border-gray-300 h-fit">
          <h1 className="text-black uppercase font-black text-2xl">
            {chapter.name}
          </h1>
          <hr />
          <div>
            <h2 className="text-lg font-bold uppercase">Aujourd&apos;hui</h2>
            <p className="ml-4">
              <span className="text-black font-black">
                {plurals[choiceKey]?.(value)}:
              </span>{" "}
              {value.toString()}
            </p>
          </div>
          <hr />
          <div>
            <h2 className="text-lg font-bold uppercase">Total</h2>
            {Object.entries(toll).map(([key, value]) => (
              <p key={key} className="ml-4">
                <span className="text-black font-black">
                  {plurals[key as keyof typeof plurals]?.(value)}:
                </span>{" "}
                {value.toString()}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-xl leading-relaxed font-medium text-justify">
            {chapter.results[choice]}
          </p>
          <Button
            className="uppercase text-xl tracking-wider w-fit"
            style={{ fontWeight: 700 }}
            size="xl"
            onClick={nextChapter}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
