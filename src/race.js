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
    this.#cars.forEach(car => {
      const randomNumber = Math.floor(Math.random() * 10)
      car.moveForward(randomNumber)
    })
  }

  getWinnerNames() {
    const maxPosition = Math.max(...this.#cars.map(car => car.position))
    const winners = this.#cars.filter(car => car.position === maxPosition)
    return winners.map(winner => winner.name)
  }
}