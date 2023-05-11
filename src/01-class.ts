class myDate {
  year: number
  month: number 
  day: number

  constructor(year:number, month: number, day: number){
    this.year = year
    this.month = month
    this.day = day
  }

}


const date = new myDate(2023, 3,12)

console.log(date)