{
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      const currentYear: number = new Date().getFullYear();
      const carAge: number = currentYear - this.year;
      return carAge;
    }
  }

  const car1 = new Car("Honda", "Civic", 2005);
  console.log(car1.getCarAge());
}
