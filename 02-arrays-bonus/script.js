const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers)

// for (let i = 0; i < teachers.length; i++){
//   // console.log(i)
//   const currentElement = teachers [i]
//   // console.log(i, currentElement)
//   const reversedTeachers = teachers.reverse()
//   console.log(currentElement, reversedTeachers)
// }

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = null;

// 3. Rimuovi 'Ed' dall'array teachers
const removeEd = teachers.splice(1, 1, "Ed")
console.log(removeEd)