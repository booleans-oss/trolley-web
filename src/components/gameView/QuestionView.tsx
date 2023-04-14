import { FC } from "react";
import { Button } from "../Button";
import { Chapter } from "@/utils/types";
import Image from "next/image";

type QuestionViewProps = {
  chapter: Chapter;
  setChoice: (choice: 0 | 1) => void;
};

const QuestionView: FC<QuestionViewProps> = ({ chapter, setChoice }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 text-gray-700 mx-[20vw]">
      <p className="text-xl md:text-3xl leading-relaxed font-medium text-justify whitespace-pre-line">
        {chapter.desc}
      </p>
      <div className="flex gap-4">
        {chapter.choices.map((choice, index) => (
          <Button
            key={choice}
            className="uppercase text-sm md:text-xl tracking-wider"
            style={{ fontWeight: 700 }}
            size="xl"
            variant={index === 0 ? "yellow" : "red"}
            onClick={() => {
              setChoice(index as 0 | 1);
            }}
          >
            {choice}
          </Button>
        ))}
      </div>
      <Image
        src={`/assets/${chapter.id}.png`}
        alt={chapter.name}
        width={1000}
        height={300}
      />
    </div>
  );
};

export default QuestionView;
