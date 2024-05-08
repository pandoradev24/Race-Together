import { signal } from "@preact/signals-react"

const defaultGame = {
  character: {
    id: "hoang-1",
    name: "Hoang",
    image: "/assets/character/hoang-1.png",
  },
  map: "",
}

export const game = new signal(defaultGame)

export function getCharacter() {
  return game.value.character.image;
}