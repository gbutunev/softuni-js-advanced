function solve(w, h, color) {
    return {
        width: w,
        height: h,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea: function () {
            return this.width * this.height;
        }
    }
}

let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
