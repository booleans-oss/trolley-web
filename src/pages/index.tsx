import Link from "next/link";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 text-gray-700">
      <div className="flex flex-col items-center justify-center space-y-10">
        <h1 className="text-6xl font-bold bg-white/50 p-4 rounded-xl border-2 border-gray-300 text-center">
          Bienvenue sur les{" "}
          <span
            style={{
              background: "url(http://i.imgur.com/HlfA2is.gif) bottom repeat-x",
            }}
          >
            Problèmes du chariot
          </span>
          !
        </h1>
        <div className="w-3/4 text-3xl text-center leading-relaxed font-medium">
          <p>
            Ce jeu aborde des thèmes destinés aux adultes. Il ne continet aucun
            langage explicite, élément à caractère sexuel ou horrifique, ni
            aucune représentation de violence.
          </p>
          <p>
            Vos décisions sont importantes, alors prenez votre temps. Ces
            informations sont laissées à votre discrétion. Prenez en compte les
            informations precedentes avant de continuer.
          </p>
          <p>Vous assumez donc la responsabilité de vos actions.</p>
        </div>
        <Link href="/game" passHref>
          <Button
            className="uppercase text-2xl tracking-wider"
            style={{ fontWeight: 700 }}
            size="xl"
          >
            Continue
          </Button>
        </Link>
      </div>
    </main>
  );
}
