class InvalidCarNameError extends Error {
  constructor() {
    super('자동차 이름을 입력해 주세요.')
    this.name = 'InvalidCarNameError'
  }
}

class CarNameTooLongError extends Error {
  constructor() {
    super('자동차 이름은 5자 이하만 가능합니다.')
    this.name = 'CarNameTooLongError'
  }
}

export const CarError = {
  InvalidName: InvalidCarNameError,
  NameTooLong: CarNameTooLongError,
}