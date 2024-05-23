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
    carOwner: "",
    place: 0,
    amount: 0,
  },
}

export const game = new signal(defaultGame)

export function getCharacterImg() {
  return game.value.character.image;
}

export function getCharacter() {
  return game.value.character;
}

export function setCharacter(character) {
  game.value.character = character;
}

export function setWager(wager) {
  game.value.wager = wager;
}

export function getWager() {
  return game.value.wager;
}

export function setRaceTrack(track) {
  game.value.raceTrack = track;
}

export function setMap(map) {
  localStorage.setItem("map", map);
  game.value.map = map;
}

export function getMap() {
  return parseInt(localStorage.getItem("map") || 1);
}

export function getRacingTime() {
  let time = 0;
  switch (game.value.raceTrack) {
    case "short":
      time = 20;
      break;
    case "medium":
      time = 30;
      break;
    case "long":
      time = 45;
      break;
    default:
      time = 15;
  }
  return time;
}

export function getCharacterImage(name) {
  switch(name) {
    case "Hoang":
      return "/assets/character/hoang-1.png";
    case "Son":
      return "/assets/character/son-1.png";
    case "Hue":
      return "/assets/character/hue-1.png";
    case "Huy":
      return "/assets/character/huy-1.png";
    case "Anh":
      return "/assets/character/anh-1.png";
    default:
      return "/assets/character/hoang-1.png";
  }
}