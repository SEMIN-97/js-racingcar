import { readLineAsync } from './utils/readlineAsync.js'
import { Car } from './car.js'

class Game {
  #cars

  constructor() {}

  async start() {
    this.#cars = await this.getCars()
  }

  async getCars() {
    const inputNames = await readLineAsync('경주할 자동차 이름을 입력하세요. (구분 기호: 쉼표(,))\n')
    return inputNames.split(',').map(name => new Car(name))
  }
}

const game = new Game()
await game.start()