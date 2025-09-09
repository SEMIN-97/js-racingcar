import { Race } from '../src/race.js'
import { Car } from '../src/car.js'

describe('자동차 경주 관련 테스트', () => {
  let cars

  beforeEach(() => {
    cars = [new Car('자동차 1'), new Car('자동차 2')]
  })

  it('자동차 경주는 5회로 고정하여 진행한다', () => {
    const race = new Race()
    expect(race.round).toBe(5)
  })

  it('여러 자동차를 등록하여 관리한다', () => {
    const race = new Race(cars)

    expect(race.cars).toEqual(cars)
  })

  it('한 턴이 지나면 모든 자동차는 1칸 전진한다', () => {
    const race = new Race(cars)

    race.playTurn()

    cars.forEach(({ position }) => {
      expect(position).toBe(1)
    })
  })
})