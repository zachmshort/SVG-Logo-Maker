class Shape {
    constructor() {
      this.color = "";
      this.textColor = ""
    }
    setColor(colorVar) {
      this.color = colorVar;
    }
    setTextColor(textColorVar) {
      this.textColor = textColorVar;
    }
  }
  //triangle
  class Triangle extends Shape {
    render() {
      return `<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>;<text x="150" y="120" font-family="Arial" font-size="40" fill="${this.textColor}" text-anchor="middle">${this.characters}</text></g></svg>`;
    }
  }
  //circle
  class Circle extends Shape {
    render() {
      return `<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><circle cx="150" cy="115" r="80" fill="${this.color}"/><text x="150" y="115" font-family="Arial" font-size="40" fill="${this.textColor}" text-anchor="middle">${this.characters}</text></g></svg>`;
    }
  }
  //square
  class Square extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g> <rect x="73" y="40" width="160" height="160" fill="${this.color}"/><text x="150" y="120" font-family="Arial" font-size="40" fill="${this.textColor}" text-anchor="middle">${this.characters}</text></g></svg>`;
    }
  }

  module.exports = { Triangle, Circle, Square };

  