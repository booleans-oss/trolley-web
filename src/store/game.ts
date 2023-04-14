import gameTree from "@/data/chapters";
import { Status } from "@/utils/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ProgressState {
  id: string;
  state: Status;
  choice: 0 | 1;
  toll: Record<string, number>;
  setId: (id: string) => void;
  setState: (state: Status) => void;
  setChoice: (choice: 0 | 1) => void;
  setToll: (toll: [string, number]) => void;
  nextId: () => void;
}

export const useProgress = create<ProgressState>()(
  devtools(
    persist(
      (set) => ({
        id: "1.1.01",
        state: "intro",
        choice: 0,
        toll: {},
        setId: (id: string) => set({ id }),
        setState: (state: Status) => set({ state }),
        setChoice: (choice: 0 | 1) =>
          set((state) => {
            const chapter = gameTree.find((chapter) => chapter.id === state.id);
            if (!chapter) return { choice };
            return {
              state: "result",
              toll: {
                ...state.toll,
                [chapter.toll[choice][0]]:
                  (state.toll[chapter.toll[choice][0]] ?? 0) +
                  chapter.toll[choice][1],
              },
              choice,
            };
          }),
        setToll: (toll: [string, number]) =>
          set((state) => ({
            toll: {
              ...state.toll,
              [toll[0]]: (state.toll[toll[0]] ?? 0) + toll[1],
            },
          })),
        nextId: () =>
          set((state) => {
            const currentChapter = gameTree.find(
              (chapter) => chapter.id === state.id
            );
            const currentIndexChapter = currentChapter
              ? gameTree.indexOf(currentChapter)
              : -1;

            if (
              currentIndexChapter === gameTree.length - 1 ||
              currentIndexChapter < 0
            ) {
              return { id: state.id };
            }

            return { id: gameTree[currentIndexChapter + 1].id, state: "intro" };
          }),
      }),

      {
        name: "game-process",
      }
    )
  )
);
