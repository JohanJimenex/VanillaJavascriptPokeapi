class Utilities {
  static capitalize(cadena) {
    let primerCaracter = cadena[0];
    primerCaracter = primerCaracter.toUpperCase();
    return primerCaracter + cadena.slice(1);
  }
}

export default Utilities;
