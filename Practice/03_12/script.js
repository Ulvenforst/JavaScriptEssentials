/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Book from "./Book.js";

const don_Quijote_de_la_Mancha = new Book (
  "Don Quijote de la Mancha",
  "Miguel de Cervantez",
  "Alfaguara",
  1248,
  "Classic literature",
  true,
  10
);

const ensayo_Sobre_la_Ceguera = new Book (
  "Ensayo Sobre la Ceguera",
  "José Saramago",
  "DeBolsillo",
  374,
  "Classic literature",
  false
);

const trilogia_de_la_Fundacion = new Book (
  "Trilogía de la Fundación",
  "Isaac Asimov",
  "DeBolsillo",
  899,
  "Science Fiction",
  true,
  10
);

const linea_de_Fuego = new Book (
  "Línea de Fuego",
  "Arturo Pérez-Reverte",
  "Alfaguara",
  682,
  "Universal Literature",
  false
);

const cien_Años_de_Soledad = new Book (
  "Cien Años de Soledad",
  "Gabriel Garcia Márquez",
  "Alfaguara",
  547,
  "Colombian literature",
  false
);

console.log(don_Quijote_de_la_Mancha);
console.log(ensayo_Sobre_la_Ceguera);
console.log(trilogia_de_la_Fundacion);
console.log(linea_de_Fuego);
console.log(cien_Años_de_Soledad);
