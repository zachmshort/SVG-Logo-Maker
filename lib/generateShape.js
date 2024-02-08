const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

const generateShape = (data) => {
  const { logoShape } = data;
  switch (logoShape) {
    case "circle":
      const generateCircle = new Circle(data);
      return generateCircle;

    case "triangle":
      const generateTriangle = new Triangle(data);
      return generateTriangle;

    case "square":
      console.log(data);
      const generateSquare = new Square(data);
      return generateSquare;

    default:
      return `Try again.`;
  }
};

module.exports = { generateShape };