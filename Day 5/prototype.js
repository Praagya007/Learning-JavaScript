const vehicle = { wheels: 4 };
const car = Object.create(vehicle);
car.brand = "G-Wagon";
console.log(car.wheels);
console.log(car.brand);

/*
Inheritance property of JS allows the children objects to access the parent objects' property,
without themselves having to have that property. It is super useful in cases like these,
most vehicles bar bikes, scooters, cycles, etc. are 4 wheelers and you can define the same
key for all of them like we did here - wheels:4.
*/
