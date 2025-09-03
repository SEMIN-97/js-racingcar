export class Car {
  static INITIAL_POSITION = 0
  static MOVE_DISTANCE = 1

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
      throw new Error('자동차 이름을 입력해 주세요.')
    }

    this.#name = name.trim()
  }

  moveForward() {
    this.#position += Car.MOVE_DISTANCE
  }
}