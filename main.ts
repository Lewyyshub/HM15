
interface Rectangle {
  width: number;
  height: number;
}

interface Circle {
  radius: number;
}


class RectangleShape implements Rectangle {
  constructor(public width: number, public height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class CircleShape implements Circle {
  constructor(public radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}



function addNumbers(a: number, b: number): number {
  return a + b;
}

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

function isPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}



const rectangle = new RectangleShape(5, 8);
const circle = new CircleShape(3);

console.log(
  `Rectangle Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`
);

console.log(
  `Circle Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`
);

console.log(`Sum: ${addNumbers(5, 3)}`);
console.log(`Multiplication: ${multiplyNumbers(4, 7)}`);
console.log(`Capitalized String: ${capitalizeString("javascript is fun")}`);
console.log(`Even Numbers: ${filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]).join(", ")}`);

console.log(`Max Number: ${findMax([23, 56, 12, 89, 43])}`);
console.log(`Is Palindrome: ${isPalindrome("A man, a plan, a canal, Panama")}`);
console.log(`Factorial: ${calculateFactorial(5)}`);
