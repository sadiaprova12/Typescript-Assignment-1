var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.putOnShow = function () {
        return "Your car model is: ".concat(this.year, " ").concat(this.brand, " ").concat(this.model);
    };
    return Car;
}());
var itsMyCar = new Car("Toyota", "Corolla", 2020);
var carDetails = itsMyCar.putOnShow();
console.log(carDetails);
