"use strict"
const ul= document.querySelector('ul');
const current = document.querySelector('#current');

const img = document.createElement('img');
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDnxktEinji5BanSBQM28TY1uTj5fEIK-gg&s";

ul.insertAdjacentElement("beforebegin", img)

//ul.insertAdjacentElement("afterbegin", img);

//ul.insertAdjacentHTML("afterbegin", `<span>SPAN</span>`);
//ul.insertAdjacentHTML("afterend", `<span>SPAN</span>`)
//ul.insertAdjacentHTML("beforebegin", `<span>SPAN</span>`)
//ul.insertAdjacentHTML("beforeend", `<span>SPAN</span>`)


// const div= document.createElement("div");
// document.body.prepend(div);
// div.textContent= 'Hello world';
// div.innerHTML= `
//  <h1>Hello Armenia</h1>
//  <p>Armenia is the most beautiful country in the world</p>
// `

// div.style.cssText=`
//  color: red;
//  border: 3px solid yellow;
//  padding: 10px;
//  margin: 30px;
  
// `;

// const text = document.querySelector('#text');
// console.log(text.innerHTML);
// console.log(text.textContent);

// document.body.append(div);
// //div.id='wrapper';

// div.classList.add("a", "b", "c");
// div.classList.remove('c');
// console.log(div.classList.contains('a'));


// const _box = document.getElementById("box");


// const box= document.querySelector('#box');
// const circleWrapper= document.querySelector(".circle_wrapper")
// const btns= document.querySelectorAll("button")
// const circle = document.querySelectorAll('.circle');

// const style = `
//    padding: 7px;
//    margin: 5px;
//    background-color: rgb(187, 144, 228);
//    border: none;
//    cursor: pointer;
//    border-radius: 5px;
// `;

// btns.forEach(item => item.style.cssText= style)

// // for(let i = 0; i < btns.length; i ++){
// //   btns[i].style.cssText= `
// //    padding: 7px;
// //    margin: 5px;
// //    background-color: rgb(187, 144, 228);
// //    border: none;
// //    cursor: pointer;
// //    border-radius: 5px;
// // `
// // }

// for(let i = 0; i < circle.length; i++){
//   circle[i].style.cssText= `
//   width: 150px;
//   height: 150px;
//   background: darkmagenta;
//   border-radius: 100%; */
//   border:1px solid black;
// `

// }
// box.style.width= "200px";
// box.style.height= "200px";
// box.style.backgroundColor= "magenta";
// box.style.marginBottom = "32px";




