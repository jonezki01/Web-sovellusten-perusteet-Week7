import { Shape } from './Shape.js';

export class Square extends Shape {
    _sideLength;

    constructor(x, y, sideLength, lineWidth = 1) {
        super(x, y, lineWidth);
        this._sideLength = sideLength;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this._x, this._y, this._sideLength, this._sideLength);
        ctx.lineWidth = this._lineWidth;
        ctx.stroke();
    }
}