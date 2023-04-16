/*Reveal on scroll*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  window.addEventListener("scroll", reveal);


 /*Loading page*/
 let load;

 function loadPage() {
   load = setTimeout(showPage, 1500);
 }
 
 function showPage() {
   document.getElementById("loading-page-container").style.display = "none";
   document.getElementById("icons-container").style.display = "none";
   document.getElementById("header").style.display = "block";
   document.getElementById("main").style.display = "block";
   document.getElementById("footer").style.display = "block";
   document.getElementById("back-to-top-container").style.display = "block";
   document.getElementById("aside").style.display = "flex";
 }
 
 loadPage();

 