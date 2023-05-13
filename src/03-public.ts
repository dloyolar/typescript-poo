export class myDate {
  public year: number;
  public month: number;
  readonly day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const date = new myDate(2023, 3, 12);

console.log(date.printFormat());

date.add(3, 'days');

console.log(date.printFormat());
console.log(date.day);
console.log(date.month);
console.log(date.year);
