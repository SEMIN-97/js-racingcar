import { Race } from '../src/race.js'

describe('자동차 경주 관련 테스트', () => {
  it('자동차 경주는 5회로 고정하여 진행한다', () => {
    const race = new Race()
    expect(race.round).toBe(5)
  })
})