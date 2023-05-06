

function generateProjects(projects) {
  var current_page = window.location.pathname;
  const isIndexPage = current_page === '/index.php';
  const numProjectsHome = 6;
  const numProjects = isIndexPage ? numProjectsHome : projects.length;
  console.log(current_page);
    for (let  i = 0; i < numProjects ; i++){
        let projectsContainer = document.querySelector("#projects-container");

        let projectContainer = document.createElement("div");
        if (current_page == '/index.php') {
          projectContainer.classList.add("col-lg-6");
        }else{
          projectContainer.classList.add("col-lg-4");
        };
        

        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        let cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        let frontCard = document.createElement("div");
        frontCard.classList.add("front-card");

        let backCard = document.createElement("div");
        backCard.classList.add("back-card");

        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        let projectTitle = document.createElement("h4");
        projectTitle.innerText = projects[i].name;

        let projectLink = document.createElement("a");
        projectLink.href = projects[i].link;
        projectLink.target = "_blank";

        let eyeIcon = document.createElement("img");
        eyeIcon.src = "/images/home/projects/eyes.svg";
        eyeIcon.alt = "Visiter le site";

        let projectCategory = document.createElement("p");
        projectCategory.classList.add("category-container");
        projectCategory.innerText = projects[i].category;

        let imageCard = document.createElement("img");
        imageCard.src = projects[i].image;
        imageCard.alt = projects[i].imageAlt;

        let imageBackCard = document.createElement("img");
        imageBackCard.src = projects[i].image;
        imageBackCard.alt = projects[i].imageAlt;

        let descriptionContainer = document.createElement("p");
        descriptionContainer.classList.add("description-container");
        descriptionContainer.innerText = projects[i].description;

        if(projects[i].category == "Professionnel"){
          projectContainer.classList.add("professionnel-category")
        };

        if(projects[i].category == "Personnel"){
          projectContainer.classList.add("personnel-category")
        };

        if(projects[i].category == "Formation"){
          projectContainer.classList.add("formation-category")
        };

        backCard.appendChild(imageBackCard);
        backCard.appendChild(cardContent);
        
        frontCard.appendChild(imageCard);
        cardContent.appendChild(projectTitle);
        cardContent.appendChild(projectLink);
        cardContent.appendChild(descriptionContainer);
        cardContent.appendChild(projectCategory);
        projectLink.appendChild(eyeIcon);
        cardInner.appendChild(frontCard);
        cardInner.appendChild(backCard);
        cardContainer.appendChild(cardInner);
        projectContainer.appendChild(cardContainer);
        projectsContainer.appendChild(projectContainer);
    }
}

function showProjectsCategory() {
  const btnNavPro = document.getElementById("nav-btn-pro");
  const btnNavPerso = document.getElementById("nav-btn-perso");
  const btnNavForma = document.getElementById("nav-btn-forma");
  const btnNavAll = document.getElementById("nav-btn-all");
  const btnNavProjects = document.querySelectorAll("#nav-projects-container ul li a");
  const projectsContainer = document.querySelectorAll("#projects-container > .col-lg-4");
  
  btnNavAll.addEventListener("click", function(e){
    e.preventDefault();
    for (let i = 0; i < btnNavProjects.length; i++) {
      btnNavProjects[i].classList.remove("active");
    } 
    btnNavAll.classList.add("active");
    for (let i = 0; i < projectsContainer.length; i++) {
      projectsContainer[i].style.display = "block";
    }
  })

  btnNavPro.addEventListener("click", function(e) {
    e.preventDefault();
    for (let i = 0; i < btnNavProjects.length; i++) {
      btnNavProjects[i].classList.remove("active");
    }
    btnNavPro.classList.add("active");
    for (let i = 0; i < projectsContainer.length; i++) {
      projectsContainer[i].style.display = "none";
      
    }
    const proProjectsName = document.querySelectorAll(".professionnel-category");
    for (let i = 0; i < proProjectsName.length; i++) {
      proProjectsName[i].style.display = "block";
      
      
    }
    console.log(projectsContainer, proProjectsName);
  });

  btnNavPerso.addEventListener("click", function(e) {
    e.preventDefault();
    for (let i = 0; i < btnNavProjects.length; i++) {
      btnNavProjects[i].classList.remove("active");
    }
    btnNavPerso.classList.add("active");
    for (let i = 0; i < projectsContainer.length; i++) {
      projectsContainer[i].style.display = "none";
      
      
    }
    const persoProjectsName = document.querySelectorAll(".personnel-category");
    for (let i = 0; i < persoProjectsName.length; i++) {
      persoProjectsName[i].style.display = "block";
      
    }
    console.log(projectsContainer, persoProjectsName);
  });

  btnNavForma.addEventListener("click", function(e) {
    e.preventDefault();
    for (let i = 0; i < btnNavProjects.length; i++) {
      btnNavProjects[i].classList.remove("active");
    }
    btnNavForma.classList.add("active");
    for (let i = 0; i < projectsContainer.length; i++) {
      projectsContainer[i].style.display = "none";
      
    }
    const formaProjectsName = document.querySelectorAll(".formation-category");
    for (let i = 0; i < formaProjectsName.length; i++) {
      formaProjectsName[i].style.display = "block";
    }
    console.log(projectsContainer, formaProjectsName);
  });
}

document.addEventListener("DOMContentLoaded", function(){
    fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    // Use the data to generate HTML elements
    generateProjects(projects);
    showProjectsCategory();
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  });
})
















