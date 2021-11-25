import { calcAreaSquare, calcAreaTriangle, comparitor } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Comparitor', () => {
    expect(comparitor(2, 7)).toBe(7);
})