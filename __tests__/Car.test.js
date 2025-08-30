import { Car } from '../src/main.js'

describe('자동차 이름 관련 테스트', () => {
  let name = ''
  const INVALID_NAME_ERROR_MESSAGE = '자동차 이름을 입력해 주세요.'

  beforeEach(() => {
    name = '자동차'
  })

  it('자동차는 이름을 상태로 가질 수 있다', () => {
    const car = new Car(name)

    expect(car.name).toBe(name)
  })

  it('이름을 입력하지 않으면 에러가 발생한다', () => {
    const car = () => new Car()

    expect(car).toThrow(INVALID_NAME_ERROR_MESSAGE)
  })

  it('공백만 입력하면 에러가 발생한다', () => {
    const car = () => new Car('  ')

    expect(car).toThrow(INVALID_NAME_ERROR_MESSAGE)
  })
})

describe('자동차 위치 값 관련 테스트', () => {
  let name = '자동차'

  beforeEach(() => {
    name = '자동차'
  })

  it('자동차는 위치 값을 가지며, 초기 상태는 0이다', () => {
    const car = new Car(name)

    expect(car.position).toBe(0)
  })

  it('자동차는 전진할 수 있으며 한 번에 1만큼 전진한다', () => {
    const car = new Car(name)

    car.moveForward();

    expect(car.position).toBe(1)
  })
})