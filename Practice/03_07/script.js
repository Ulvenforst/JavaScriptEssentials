/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cellphone = {
  owner: "Juan Camilo Narváez",
  number: "3182249713",
  operator: "Tigo",
  model: "iPhone SE 2022",
  space: 128, // GB
};

const laptop = {
  owner: "Juan Camilo Narváez",
  model: "Rog Zephyrus G14",
  space: 1000, // GB
  ram: 24,
  size: 14 // Inches
};

const suitcase = {
  primaryPocket: {
    bigPocket: laptop,
    smallPocket: cellphone
  },
  secundaryPocket: {
    isEmpty: true
  }
};
