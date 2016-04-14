var Car = function (model, noise) {
  this.model = model;
  this.noise = noise;
};

Car.prototype.wheels = 4;

Car.prototype.makeNoise = function () {
  console.log(this.noise);
};

Car.prototype.printModel = function () {
  console.log(this.model);
};

var hondaCivic = new Car("civic", "vroom");
var hondaAccord = new Car("accord", "vroom");
hondaCivic.makeNoise();
hondaCivic.printModel();
console.log(hondaCivic.wheels);
