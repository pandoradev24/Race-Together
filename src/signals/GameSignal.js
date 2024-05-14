import { signal } from "@preact/signals-react"

const defaultGame = {
  character: {
    id: "hoang-1",
    name: "Hoang",
    image: "/assets/character/hoang-1.png",
  },
  map: 1, // 1 or 2
  raceTrack: "short", // short, medium or long 
  wager: {
    carId: "",
    place: 0,
    amount: 0,
  },
}

export const game = new signal(defaultGame)

export function getCharacter() {
  return game.value.character.image;
}

export function setCharacter(character) {
  game.value.character = character;
}

export function setWager(wager) {
  game.value.wager = wager;
}

export function setRaceTrack(track) {
  game.value.raceTrack = track;
}

export function setMap(map) {
  game.value.map = map;
}