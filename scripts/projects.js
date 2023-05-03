
function generateProjects(projects) {
    for (let  i = 0; i < projects.length; i++){
        let projectsContainer = document.querySelector("#projects-container");

        let projectContainer = document.createElement("div");
        projectContainer.classList.add("col-lg-6");

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
        projectCategory.innerText = projects[i].category;

        let imageCard = document.createElement("img");
        imageCard.src = projects[i].image;
        imageCard.alt = projects[i].imageAlt;

        

        backCard.appendChild(imageCard);
        backCard.appendChild(cardContent);

        frontCard.appendChild(imageCard);

        cardContent.appendChild(projectTitle);
        cardContent.appendChild(projectLink);

        cardInner.appendChild(frontCard);
        cardInner.appendChild(backCard);

        

        cardContainer.appendChild(cardInner);

        projectContainer.appendChild(cardContainer);
        projectsContainer.appendChild(projectContainer);
    }
}


document.addEventListener("DOMContentLoaded", function(){
    fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    // Use the data to generate HTML elements or do whatever you want
    generateProjects(projects);
    console.log(projects);
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  });
})













/*
function generateProjetcs(projects){
    for (let  i = 0; i < projects.lenght; i++){
        let projectsContainer = document.querySelector("#projects-container");

        let projectContainer = document.createElement("div");
        projectContainer.classList.add("col-lg-6");

        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        let cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        let frontCard = document.createElement("div");
        frontCard.classList.add("front-card");

        let backCard = document.createElement("div");
        backCard.classList.add("back");

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
        projectCategory.innerText = projects[i].category;

        let imageCard = document.createElement("img");
        imageCard.src = projects[i].image;
        imageCard.alt = projects[i].imageAlt;

        frontCard.appendChild(imageCard);
        backCard.appendChild(imageCard);
    }
}*/