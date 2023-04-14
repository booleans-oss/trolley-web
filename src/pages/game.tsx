import Navbar from "@/components/Navbar";
import GameView from "@/components/gameView";
import gameTree from "@/data/chapters";
import { useProgress } from "@/store/game";
import { useMemo } from "react";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id, state } = useProgress();

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
  return (
    <main className="flex flex-col min-h-screen">
      {state !== "result" && <Navbar id={chapter.id} title={chapter.name} />}
      <div className="h-full flex flex-col items-center py-10">
        <GameView />
      </div>
    </main>
  );
}
