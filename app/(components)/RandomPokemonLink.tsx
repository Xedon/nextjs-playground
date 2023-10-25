import Link from "next/link";
import { FunctionComponent } from "react";

export const RandomPokemonLink: FunctionComponent = () => (
  <Link href={`/pokemon/${(Math.random() * 1000).toFixed()}`}>
    Random Pokemon
  </Link>
);
