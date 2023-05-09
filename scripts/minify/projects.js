function generateProjects(e){var t=window.location.pathname;let l="/index.php"===t?6:e.length;console.log(t);for(let a=0;a<l;a++){let n=document.querySelector("#projects-container"),r=document.createElement("div");"/index.php"==t?r.classList.add("col-lg-6"):r.classList.add("col-lg-4");let s=document.createElement("div");s.classList.add("card-container");let c=document.createElement("div");c.classList.add("card-inner");let i=document.createElement("div");i.classList.add("front-card");let o=document.createElement("div");o.classList.add("back-card");let d=document.createElement("div");d.classList.add("card-content");let p=document.createElement("h4");p.innerText=e[a].name;let g=document.createElement("a");g.href=e[a].link,g.target="_blank";let y=document.createElement("img");y.src="/images/home/projects/eyes.svg",y.alt="Visiter le site";let h=document.createElement("p");h.classList.add("category-container"),h.innerText=e[a].category;let m=document.createElement("img");m.src=e[a].image,m.alt=e[a].imageAlt;let v=document.createElement("img");v.src=e[a].image,v.alt=e[a].imageAlt;let f=document.createElement("p");f.classList.add("description-container"),f.innerText=e[a].description,"Professionnel"==e[a].category&&r.classList.add("professionnel-category"),"Personnel"==e[a].category&&r.classList.add("personnel-category"),"Formation"==e[a].category&&r.classList.add("formation-category"),o.appendChild(v),o.appendChild(d),i.appendChild(m),d.appendChild(p),d.appendChild(g),d.appendChild(f),d.appendChild(h),g.appendChild(y),c.appendChild(i),c.appendChild(o),s.appendChild(c),r.appendChild(s),n.appendChild(r)}}function showProjectsCategory(){let e=document.getElementById("nav-btn-pro"),t=document.getElementById("nav-btn-perso"),l=document.getElementById("nav-btn-forma"),a=document.getElementById("nav-btn-all"),n=document.querySelectorAll("#nav-projects-container ul li a"),r=document.querySelectorAll("#projects-container > .col-lg-4");a.addEventListener("click",function(e){e.preventDefault();for(let t=0;t<n.length;t++)n[t].classList.remove("active");a.classList.add("active");for(let l=0;l<r.length;l++)r[l].style.display="block"}),e.addEventListener("click",function(t){t.preventDefault();for(let l=0;l<n.length;l++)n[l].classList.remove("active");e.classList.add("active");for(let a=0;a<r.length;a++)r[a].style.display="none";let s=document.querySelectorAll(".professionnel-category");for(let c=0;c<s.length;c++)s[c].style.display="block";console.log(r,s)}),t.addEventListener("click",function(e){e.preventDefault();for(let l=0;l<n.length;l++)n[l].classList.remove("active");t.classList.add("active");for(let a=0;a<r.length;a++)r[a].style.display="none";let s=document.querySelectorAll(".personnel-category");for(let c=0;c<s.length;c++)s[c].style.display="block";console.log(r,s)}),l.addEventListener("click",function(e){e.preventDefault();for(let t=0;t<n.length;t++)n[t].classList.remove("active");l.classList.add("active");for(let a=0;a<r.length;a++)r[a].style.display="none";let s=document.querySelectorAll(".formation-category");for(let c=0;c<s.length;c++)s[c].style.display="block";console.log(r,s)})}document.addEventListener("DOMContentLoaded",function(){fetch("data/projects.json").then(e=>e.json()).then(e=>{generateProjects(e),showProjectsCategory()}).catch(e=>{console.error("Error fetching projects:",e)})});
