class MyMath {
  static PI = 3.14

  static max(...numbers: number[]) {
    return numbers.reduce((max, curr) => max >= curr ? max: curr)
  }
}


console.log(MyMath.PI)
console.log(MyMath.max(1,2,3,4,5,6,7));
