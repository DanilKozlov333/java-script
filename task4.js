class Shape {
    getArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

const shapes = [
    new Rectangle(10, 5),
    new Circle(7),
    new Triangle(8, 6),
    new Rectangle(3, 4),
    new Circle(2)
];

console.log("Площади фигур:");
for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    const area = shape.getArea().toFixed(2);
    console.log(`Фигура ${i + 1}: площадь = ${area}`);
}