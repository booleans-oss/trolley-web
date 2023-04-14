import { useProgress } from "@/store/game";
import { FC, useMemo } from "react";
import IntroView from "./IntroView";
import gameTree from "@/data/chapters";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";

const GameView: FC = () => {
  const { state, id, toll, choice, setState, setChoice, nextId } =
    useProgress();

  const chapter = useMemo(() => {
    const chapter = gameTree.find((c) => c.id === id);
    if (!chapter) {
      return null;
    }
    return chapter;
  }, [id]);

  if (!chapter) {
    return <div>Something went wrong</div>;
  }

  if (state === "intro") {
    return <IntroView chapter={chapter} setState={setState} />;
  }

  if (state === "question") {
    return <QuestionView chapter={chapter} setChoice={setChoice} />;
  }

  if (state === "result") {
    return (
      <ResultView
        chapter={chapter}
        choice={choice}
        toll={toll}
        nextChapter={nextId}
      />
    );
  }

  return <div>Something went wrong</div>;
};

export default GameView;