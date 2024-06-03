document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    }
});

document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li a");

    let currentSection = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute("id");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(currentSection)) {
            li.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    }

    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            formFeedback.textContent = "Thank you for your message!";
            formFeedback.style.display = "block";
            formFeedback.style.color = "green";
        } else {
            formFeedback.textContent = "Please fill out all fields.";
            formFeedback.style.display = "block";
            formFeedback.style.color = "red";
        }
    });

    document.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("nav ul li a");
        
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute("id");
            }
        });

        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.getAttribute("href").includes(currentSection)) {
                li.classList.add("active");
            }
        });
    });
});
