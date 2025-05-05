const sidebar = document.querySelector(".sidebar");
const sidebarToggleBtn = document.querySelector(".sidebar-toggle");
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");
const searchForm = document.querySelector(".search-form");

const updateThemeIcon = () => {
    const isDark = document.body.classList.contains("dark-theme");
    themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "light_mode" : "dark_mode") : (isDark ? "light_mode" : "dark_mode");
}

/* APPLY DARK THEME BASED ON USER PREFERENCE */
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
updateThemeIcon();

/* TOGGLE SIDEBAR COLLAPSE */
sidebarToggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    updateThemeIcon();
});

/* EXPAND SIDEBAR ON SEARCH FORM CLICK */
searchForm.addEventListener("click", () => {
    if (sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
        searchForm.querySelector("input").focus();
        updateThemeIcon();
    }
});

/* TOGGLE BETWEEN MODES ON THEME ON-CLICK*/
themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark? "dark" : "light");
    updateThemeIcon();
});

/* SMOOTH SCROLL TO SECTIONS */
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Remove active class from all links
        document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

/* CONTACT FORM HANDLING */
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const subject = document.getElementById('subjectInput').value;
    const message = document.getElementById('messageInput').value;
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, subject, message });
    
    // Clear form
    this.reset();
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
});

/* PORTRAIT EASTER EGG */
const portraitContainer = document.querySelector('.portrait-container');
let easterEggTimeout;

if (portraitContainer) {
    portraitContainer.addEventListener('click', () => {
        if (!portraitContainer.classList.contains('active')) {
            portraitContainer.classList.add('active');
            
            // Reset after 4 seconds
            clearTimeout(easterEggTimeout);
            easterEggTimeout = setTimeout(() => {
                portraitContainer.classList.remove('active');
            }, 4000);
        }
    });
}