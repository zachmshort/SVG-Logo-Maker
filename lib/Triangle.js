const Shape = require("./Shape.js");

class Triangle extends Shape {
  constructor(data) {
    super(data);
  }
  render() {
    return `<polygon points="125 0, 0 ,0 50, 125" fill="${this.logoColor}" />`;
  }
}

module.exports = Triangle;