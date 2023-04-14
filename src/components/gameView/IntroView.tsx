import { Chapter, Status } from "@/utils/types";
import { FC } from "react";
import Image from "next/image";
import { Button } from "../Button";

type IntroViewProps = {
  chapter: Chapter;
  setState: (state: Status) => void;
};

export const IntroView: FC<IntroViewProps> = ({ chapter, setState }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 text-gray-700 ">
      <h1 className="text-3xl md:text-6xl font-bold bg-white/50 p-4 rounded-xl border-2 border-gray-300">
        {chapter.introTitle}
      </h1>
      <div className="flex flex-col md:flex-row justify-around mx-[10vw] border-4 rounded-lg border-white p-10 gap-10 md:gap-0">
        <div className="flex justify-center items-center bg-white p-4 rounded-xl border-2 border-gray-300">
          <Image
            height={300}
            width={300}
            src={chapter.introImage}
            alt="intro Image"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 items-end">
          <p className="text-xl md:text-3xl leading-relaxed font-medium text-justify">
            {chapter.introDesc}
          </p>
          <Button
            className="uppercase text-xl tracking-wider"
            style={{ fontWeight: 700 }}
            size="xl"
            onClick={() => {
              setState("question");
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroView;