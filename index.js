//Create a car class and add properties for: make, model, and year
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

//Add a method called getDescription to the Car prototype, which returns a string containing information about the car.
Car.prototype.getDescription = function () {
  return `Make: ${this.make}, Model ${this.model}, Year: ${this.year}`;
};
//Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the electric car in miles.
function ElectricCar(make, model, year, range) {
  Car.call(this, make, model, year);
  this.range = range;
}
//Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;
ElectricCar.prototype.getDescription = function () {
  return (
    Car.prototype.getDescription.call(this) +
    ", Range: " +
    this.range +
    " miles"
  );
};
//Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.
const teslaModelS = new ElectricCar("tesla", "Model S", 2019, 300);
console.log(teslaModelS.getDescription());
