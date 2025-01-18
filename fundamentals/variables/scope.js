
// This code is the whole universe

const speedOfLight = '299 792 458 m/s' // Global Scope (variable initialized)

var gravity // Global Scope (variable declared)
gravity = 0 // Global Scope (variable initialized)

console.log('SPACE(speed0fLight):', speed0fLight) // 299 792 458 m/s

console.log('SPACE (gravity): ', gravity) // 0

function earth() { // Function Scope
  var gravity = '9.8 m/s2' // Function Scope (initialize a new variable that only applies to the funct
  var temperature = '24C'

  console.log('EARTH (gravity): ', gravity) // 9.8 m/s2

  { // Block Scope (Image this is your house scope)
    let houseSize = '240m2' // Block Scope

    console.log('HOUSE(speed0fLight):', speed0fLight) // 299 792 458 m/s
    console.log('HOUSE (houseSize):', houseSize) // 240m2

  }

  console.log('EARTH(gravity): ', gravity) // 9.8 m/s2
  console.log('EARTH (houseSize):', houseSize) // ERROR

}

earth()

console.log('SPACE (speed0fLight):', speed0fLight) // 299 792 458 m/s
console.log('SPACE (gravity): ', gravity) // 0
console.log('SPACE (temperature): ', temperature) // ERROR
console.log('SPACE (houseSize): ', houseSize) // ERROR
