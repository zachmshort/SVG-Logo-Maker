const { Triangle, Circle, Square } = require("../generateLogo.js");

describe("Circle test", () => {
  test("test for a circle with a blue background, and undefined in red letters ", () => {
    const shape = new Circle();
    shape.setColor("blue");
    shape.setTextColor("red");
    expect(shape.render()).toEqual(
      `<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><circle cx="150" cy="115" r="80" fill="blue"/><text x="150" y="115" font-family="Arial" font-size="40" fill="red" text-anchor="middle">undefined</text></g></svg>`
    );
  });
});

describe("Square test", () => {
  test("test for a yellow square with undefined in green letters", () => {
    const shape = new Square();
    shape.setColor("yellow");
    shape.setTextColor("green");
    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g> <rect x="73" y="40" width="160" height="160" fill="yellow"/><text x="150" y="120" font-family="Arial" font-size="40" fill="green" text-anchor="middle">undefined</text></g></svg>`
    );
  });
});

describe("Triangle test", () => {
    test("test for a purple triangle with undefined in black letters", () => {
      const shape = new Triangle();
      shape.setColor("purple");
      shape.setTextColor("black");
      expect(shape.render()).toEqual(
        `<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 18 244, 182 56, 182" fill="purple"/>;<text x="150" y="120" font-family="Arial" font-size="40" fill="black" text-anchor="middle">undefined</text></g></svg>`
      );
    });
  });
  