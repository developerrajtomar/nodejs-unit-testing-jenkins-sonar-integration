export class Calculator {
    static Sum(first: number, second: number): number {
        return first + second
    }


    static Difference(first: number, second: number): number {
        return first - second
    }


    static Multiply(first: number, second: number): number {
        return first * second
    }


    static Divide(first: number, second: number): number {
        if (second === 0) {
            throw new Error(`Second argument can not be 0`)
        }
        if (!second) {
            throw new Error(`Second argument can not be 0`)
        }
        return first / second
    }
}