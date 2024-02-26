import { Shape } from './Shape.js';

export class Rectangle extends Shape {
    _width;
    _height;

    constructor(x, y, width, height, lineWidth = 1) {
        super(x, y, lineWidth);
        this._width = width;
        this._height = height;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this._x, this._y, this._width, this._height);
        ctx.lineWidth = this._lineWidth;
        ctx.stroke();
    }
}