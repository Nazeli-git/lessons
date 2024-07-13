"use strict";

const firstName = prompt("Ինչ է՞ ձեր անունը");
const lastName = prompt("Ինչ է՞ ձեր ազգանունը");
const age = +prompt("Քանի՞ տարեկան եք");
const profession = prompt("Ի՞նչ մասնագիտություն ունեք")

 const user = {
  name: firstName,
  lastname: lastName,
  age: age,
  profession: profession,
};

console.log(user);