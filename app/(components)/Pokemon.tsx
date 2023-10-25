"use client";
import { FunctionComponent, use } from "react";
import { fetchPokemon } from "../(pokemon)/client";
import Image from "next/image";

export const Pokemon: FunctionComponent<{ id: string }> = ({ id }) => {
  const pokemon = use(fetchPokemon(id));

  return (
    <div className="flex flex-col items-center">
      <Image
        height={200}
        width={200}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div>
        Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </div>
      <div>Weight: {pokemon.weight}</div>
    </div>
  );
};
