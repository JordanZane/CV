var current_page = window.location.pathname;
console.log(current_page);


function generateProjects(projects) {
    for (let  i = 0; i < 6 ; i++){
        let projectsContainer = document.querySelector("#projects-container");

        let projectContainer = document.createElement("div");
        if (current_page == '/') {
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


document.addEventListener("DOMContentLoaded", function(){
    fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    // Use the data to generate HTML elements or do whatever you want
    generateProjects(projects);
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  });
})













