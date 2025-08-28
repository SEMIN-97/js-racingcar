export class Car {
  name = ''
  position = 0

  constructor(name) {
    if (!name?.trim().length) {
      throw new Error('자동차 이름을 입력해 주세요.')
    }

    this.name = name.trim()
  }

  moveForward() {
    this.position += 1
  }
}