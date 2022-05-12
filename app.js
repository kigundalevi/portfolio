window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",() =>{
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
})
 document.querySelectorAll(".nav-menu a").forEach(n =>{
   n.addEventListener("click",()=>{
     hamburger.classList.remove("active");
     navmenu.classList.remove("active");
   })
 })
  
 const link= document.querySelectorAll(".nav-menu a");
 link.forEach(element => {
   element.addEventListener("click",()=>{
     link.classList.add("active");
   })
   
 });