// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Smooth scroll for menu buttons
function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Optional alert for contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    alert('Your message is being sent...');
});
// Hours data
const hours = {
    Thursday: "8 am–4:30 pm",
    Friday: "8 am–4:30 pm",
    Saturday: "7 am–4:30 pm",
    Sunday: "7:30 am–3:30 pm",
    Monday: "8 am–4:30 pm",
    Tuesday: "6 am–3 pm",
    Wednesday: "8 am–4:30 pm"
};

// Display today's hours
function showTodayHours() {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[today.getDay()];
    document.getElementById("today-hours").innerText = hours[dayName];
}

showTodayHours();

// Toggle all hours
const showAllBtn = document.getElementById("show-all-hours-btn");
const allHoursDiv = document.getElementById("all-hours");

showAllBtn.addEventListener("click", () => {
    if(allHoursDiv.style.display === "none") {
        allHoursDiv.style.display = "block";
        showAllBtn.innerText = "Hide All Hours";
    } else {
        allHoursDiv.style.display = "none";
        showAllBtn.innerText = "Show All Hours";
    }
});
