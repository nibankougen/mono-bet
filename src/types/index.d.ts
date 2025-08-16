export interface User {
  id: string
  name: string
  iconImage: number
  iconColor: number
}

export interface Turn {
  score: number
  betUsers: User[]
}
