const newLine = () => console.log();
const print = (information) => console.log(information);

function Car(maxSpeed = 200, delta = 5) {
  // Private attributes
  let currentSpeed = 0;
  let acceleration = delta;

  // Public methods
  this.setCurrentSpeed = (maxSpeed) => {
    if (maxSpeed < 200) {
      currentSpeed = maxSpeed;
    }
  };
  this.getCurrentSpeed = () => {
    return currentSpeed;
  };

  this.setAcceleration = (delta) => {
    if (delta <= 100) {
      acceleration = delta;
    }
  };

  this.getAcceleration = () => {
    return acceleration;
  };

  this.accelerate = function () {
    if (currentSpeed + acceleration <= maxSpeed) {
      currentSpeed += acceleration;
    } else {
      currentSpeed = maxSpeed;
    }
  };
}

// Create a new car
let myCar = new Car();

myCar.setCurrentSpeed(100);

myCar.accelerate();

print(myCar.getCurrentSpeed());
print(myCar.getAcceleration());
