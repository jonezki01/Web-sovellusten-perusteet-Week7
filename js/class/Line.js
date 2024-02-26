import { Shape } from './Shape.js';

export class Line extends Shape {
    _x2;
    _y2;

    constructor(x, y, x2, y2, lineWidth = 1) {
        super(x, y, lineWidth);
        this._x2 = x2;
        this._y2 = y2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this._x, this._y);
        ctx.lineTo(this._x2, this._y2);
        ctx.lineWidth = this._lineWidth;
        ctx.stroke();
    }
}