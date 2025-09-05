import { readLineAsync } from './utils/readlineAsync.js';
import { Car } from './car.js';

class Game {
  constructor() {}

  async start() {
    const name = await readLineAsync('경주할 자동차 이름을 입력하세요. \n');
    const car = new Car(name);
  }
}

const game = new Game();
await game.start();