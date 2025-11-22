//smooth scroll for nav bar
//scrolls down nicely to the section based on what nav bar link is pressed
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({behavior: "smooth"});
    });
});


//view my work button scrolls to projects
document.getElementById("viewProjectBtn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth"});
});


//fade in sections when you scroll

//typewriter effect for name or tagline
const typewriterElement = document.getElementById("typewriter");

const phrases = [
    "Front-End Developer",
    "Artist",
    "Designer",
    "Creative Problem Solver"
];

let currentPhrase = 0;
let currentChar = 0;
let deleting = false;

function type() {
    let phrase = phrases[currentPhrase];

    if (!deleting) {
        typewriterElement.textContent = phrase.substring(0, currentChar + 1);
        currentChar++;

        if (currentChar === phrase.length) {
            setTimeout(() => {
                deleting = true;
                type();
            }, 1000);
            return;
        }
    } else {
        typewriterElement.textContent = phrase.substring(0, currentChar - 1);
        currentChar--;

        if (currentChar === 0) {
            deleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
        }
    }


    
    let speed = deleting ? 80 : 120;
    setTimeout(type, speed); 
}

type();



//dark mode/light mode toggle
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme","light");
    }
});



//back to top button

//reveal projects animation
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
           // observer.unobserve(entry.target);
        }
    });
    }, {
        threshold: 0.2
});

projects.forEach(project => {
    observer.observe(project);
})

//auto load github projects

//random quote or fun fact generator

//floating sparkle
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

setInterval(createSparkle, 200);

//a collapsible mobile menu
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click',() => {
    navList.classList.toggle('active');
});
//smooth section highlight in the navbar

//save color theme in localstorage

//image gallery slideshow

//
