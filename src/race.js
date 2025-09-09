export class Race {
  #round = 5
  #cars

  constructor(cars) {
    this.#cars = cars
  }

  get round() {
    return this.#round
  }

  get cars() {
    return this.#cars
  }

  playTurn() {
    this.#cars.forEach(car => car.moveForward())
  }
}