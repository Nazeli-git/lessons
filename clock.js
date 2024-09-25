const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');


function clock() {
   const date= new Date();

   hours.textContent= date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
   minutes.textContent = date.getMinutes() < 10 ? "0" + date.getMinutes: date.getMinutes();
   seconds.textContent = date.getSeconds() < 10 ? "0" + date.getSeconds(): date.getSeconds();
}
setInterval(clock, 1000)