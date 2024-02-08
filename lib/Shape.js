const isCss3Color = require("is-css3-color");

class Shape {
  constructor({ logoText, textColor, logoColor, Shape }) {
    this.Shape = Shape;

    this.validateTextResponse(logoText);
    this.logoText = logoText;

    this.validateColorResponse(textColor);
    this.textColor = textColor;

    this.validateColorResponse(logoColor);
    this.logoColor = logoColor;
  }

  ifResponseEmpty(input) {
    if (!input) throw new Error("Input cannot be empty");
  }

  validateTextResponse(input) {
    this.ifResponseEmpty(input);

    if (input.length > 3) {
      throw new Error("Text must be 3 characters");
    }
  }

  validateColorResponse(input) {
    this.ifResponseEmpty(input);

    input = input.toLowerCase();

    if (!isCss3Color(input)) {
      throw new Error("Please enter a vaild css color keyword");
    }
  }

  render() {
    throw new Error("Child shapes must incorporate a render() method");
  }
}
module.exports = Shape;