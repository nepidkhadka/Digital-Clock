const myhours = document.querySelector("#hours p");
const myminutes = document.querySelector("#mins p");
const myseconds = document.querySelector("#sec p");
const colon = document.querySelectorAll("span");


const mytime = setInterval(function time() {

    colon.forEach((item)=>{
        item.classList.toggle("hide");
    });
    

  const date = new Date();
  hrs = date.getHours();
  mins = date.getMinutes();
  sec = date.getSeconds();

  hrs = hrs % 12;
  hrs = hrs || 12;
  
  hrs = hrs.toString().padStart(2, "0");
  mins = mins.toString().padStart(2, "0");
  sec = sec.toString().padStart(2, "0");

  myhours.textContent = hrs;
  myminutes.textContent = mins;
  myseconds.textContent = sec;
}, 1000);
