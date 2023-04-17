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
 function showPage() {
    let hideElts = document.getElementsByClassName("hide");
    document.getElementById("loading-page-container").style.display = "none";
    document.getElementById("icons-container").style.display = "none";
    for (i=0; i < hideElts.length; i++){
      hideElts[i].classList.remove("hide");
    }
 }

 window.addEventListener('load',function(){
    showPage();
 })
 
 /*Change active link nav on click*/
 const homeLink = document.getElementById("home-link");
 const projectsLink = document.getElementById("projects-link");

homeLink.addEventListener('click', function(){
  projectsLink.classList.remove("active");
  homeLink.classList.add("active");
});

projectsLink.addEventListener('click', function(){
  homeLink.classList.remove("active");
  projectsLink.classList.add("active");
});
