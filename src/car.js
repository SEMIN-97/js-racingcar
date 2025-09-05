export class Car {
  static INITIAL_POSITION = 0
  static MOVE_DISTANCE = 1
  static CAR_NAME_MAX_LENGTH = 5

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

    if (name.trim().length > Car.CAR_NAME_MAX_LENGTH) {
      throw new Error('자동차 이름은 5자 이하만 가능합니다.')
    }

    this.#name = name.trim()
  }

  moveForward() {
    this.#position += Car.MOVE_DISTANCE
  }
}