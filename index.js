// 1. Transform array into an object
const data = [
  { key: "item", value: "Pencil" },
  { key: "price", value: 250 },
  { key: "inStock", value: true },
];

const result1 = data.reduce((acc, obj) => {
  acc[obj.key] = obj.value;
  return acc;
}, {});

console.log(result1);

// 2. Convert array of objects into an array of colors
const students = [
  { item: "Pen", color: "blue" },
  { item: "Pen", color: "black" },
  { item: "Pen", color: "red" },
];

const result2 = students.reduce((acc, obj) => {
  acc.push(obj.color);
  return acc;
}, []);

console.log(result2);

// 3. Convert array of objects into an array of cities
const countries = [
  { item: "Car", manufacturingCity: "New York" },
  { item: "Car", manufacturingCity: "Los Angeles" },
  { item: "Car", manufacturingCity: "Chicago" },
];

const result3 = countries.reduce((acc, obj) => {
  acc.push(obj.manufacturingCity);
  return acc;
}, []);

console.log(result3);

// 4. Convert array of objects into an array of fruits
const groceryItems = [
  { item: "Fruit", name: "Apple" },
  { item: "Fruit", name: "Banana" },
  { item: "Fruit", name: "Orange" },
];

const result4 = groceryItems.reduce((acc, obj) => {
  acc.push(obj.name);
  return acc;
}, []);

console.log(result4);

// 5. Transform array into an object
const details = [
  { key: "category", value: "Electronics" },
  { key: "rating", value: 4.5 },
  { key: "available", value: true },
];

const result5 = details.reduce((acc, obj) => {
  acc[obj.key] = obj.value;
  return acc;
}, {});

console.log(result5);
