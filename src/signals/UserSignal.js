import { signal } from "@preact/signals-react"

const defaultUser = {
  name: 'Guest',
  money: 50000,
}

export const user = new signal(defaultUser)