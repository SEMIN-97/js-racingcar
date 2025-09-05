import { readLineAsync } from './utils/readlineAsync.js'
import { Car } from './car.js'

class Game {
  static RACING_COUNT = 5

  constructor() {}

  async start() {
    const name = await readLineAsync('경주할 자동차 이름을 입력하세요. \n')
    const car = new Car(name)

    for (let i = 1; i <= Game.RACING_COUNT; i++) {
      car.moveForward()
      console.log(`${car.name} : ${'-'.repeat(car.position)}`)
    }
  }
}

const game = new Game()
await game.start()