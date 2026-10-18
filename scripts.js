// Welcome button on the homepage
const welcomeButton = document.querySelector("#welcomeButton");

if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        const message = document.querySelector("#welcomeMessage");

        message.textContent = "Hello! Thanks for visiting my homepage.";
        message.classList.add("text-success", "fw-bold");
    });
}


// Random facts on the hobbies page
const factButton = document.querySelector("#factButton");

if (factButton) {
    const facts = [
        "The first computer mouse was made of wood.",
        "HTML stands for HyperText Markup Language.",
        "JavaScript was created in 1995.",
        "CSS is used to style webpages.",
        "The internet and the World Wide Web are not the same thing."
    ];

    factButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * facts.length);

        document.querySelector("#fact").textContent =
            facts[randomIndex];
    });
}


// Contact form
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formMessage = document.querySelector("#formMessage");
        const name = document.querySelector("#name").value;

        formMessage.textContent =
            `Thanks, ${name}! Your message has been received.`;

        formMessage.classList.remove("d-none");
        formMessage.classList.add("alert-success");

        contactForm.reset();
    });
}
