import Link from "next/link";
import { RandomPokemonLink } from "./(components)/RandomPokemonLink";

export default async function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-24">
      <RandomPokemonLink />
    </main>
  );
}
