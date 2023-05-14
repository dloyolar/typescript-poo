// Es parecido a un get, solo que este no retorna nada,es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.

// A set lo podemos usar para tener reglas de modificación para nuestros parámetros.

export class myDate {
  constructor(
    public year: number,
    private _month: number,
    private _day: number
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue < 1 || newValue > 12) {
      throw new Error('The month needs to be a number between 1 and 12');
    }
    this._month = newValue;
  }
}

const date = new myDate(2023, 3, 12);
console.log(date.printFormat());
date.month = 78;
console.log(date.month);
