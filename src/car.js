import { CarError } from './errors/carError.js'

export class Car {
  static INITIAL_POSITION = 0
  static MOVE_DISTANCE = 1
  static NAME_MAX_LENGTH = 5

  #name = ''
  #position = Car.INITIAL_POSITION

  get name() {
    return this.#name
  }

  get position() {
    return this.#position
  }

  constructor(name) {
    if (!name?.trim().length) {
      throw new CarError.InvalidName()
    }

    if (name.trim().length > Car.NAME_MAX_LENGTH) {
      throw new CarError.NameTooLong()
    }

    this.#name = name.trim()
  }

  moveForward() {
    this.#position += Car.MOVE_DISTANCE
  }
}