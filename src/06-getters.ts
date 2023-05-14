// Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no modificarlos o mutarlos.

// Lo podemos acceder como si fuese una propiedad más de la instancia.

// Por definición, todos los getters tienen que retornar algo.

export class myDate {
  constructor(
    public year: number,
    public month: number,
    private _day: number
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
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
      this.month += amount;
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
}

const date = new myDate(2023, 3, 12);
console.log(date.printFormat());
console.log(date.day);
console.log('(2023)', date.isLeapYear);

const newDate = new myDate(2000, 7, 9);
console.log('(2000)', newDate.isLeapYear);
