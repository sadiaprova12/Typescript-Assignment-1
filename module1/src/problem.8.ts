class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    putOnShow() {
        return `Your car model is: ${this.year} ${this.brand} ${this.model}`;
    }
}

           const itsMyCar = new Car("Toyota", "Corolla", 2020);
               const carDetails = itsMyCar.putOnShow();
                   console.log(carDetails);
