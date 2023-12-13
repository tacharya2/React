class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return 'My car brand is ' + this.brand;
  }
}

const myCar = new Car("Volvo");
myCar.present();