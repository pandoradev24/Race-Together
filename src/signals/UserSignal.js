import { signal } from "@preact/signals-react"

const defaultUser = {
  name: 'Guest',
  money: 50000,
}

export const user = new signal(defaultUser)

export function getMoney() {
  return parseInt(localStorage.getItem("money") || 0);
}

export function changeMoney(amount) {
  const currentMoney = parseInt(localStorage.getItem("money") || 0);
  localStorage.setItem("money", currentMoney + amount);
}