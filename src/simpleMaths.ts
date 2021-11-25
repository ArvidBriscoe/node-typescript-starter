export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}

export function comparitor(a: number, b: number): number {
    if (a > b) {
      return a
    }
    else if (a = b) {
      return a
    }
    else {
      return b
    }
  }
  