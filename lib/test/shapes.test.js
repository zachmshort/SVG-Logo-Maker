const { Triangle, Circle, Square } = require("../generateLogo.js");

describe("Circle test", () => {
  test("test for a circle with a yellow background, see if it works?", () => {
    const shape = new Circle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="115" r="80" fill="yellow"/>`
    );
  });
});

describe("Square test", () => {
  test("test for a square with a blue background, see if it works?", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<rect x="73" y="40" width="160" height="160" fill="purple"/>`
    );
  });
});

describe("Triangle test", () => {
    test("test for a triangle with a red background, see if it works?", () => {
      const shape = new Triangle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill="red"/>`
      );
    });
  });
  