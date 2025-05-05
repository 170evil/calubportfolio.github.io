document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');
    const menuLinks = document.querySelectorAll('.menu-link');

    async function loadContent(url) {
        try {
            console.log('Loading content from:', url); // Debug log
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            mainContent.innerHTML = html;
        } catch (error) {
            console.error('Error loading content:', error);
            mainContent.innerHTML = `
                <div class="page-title">
                    <h1>Error loading content</h1>
                </div>
                <div class="card">
                    <p>Could not load the page: ${error.message}</p>
                </div>`;
        }
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const page = link.getAttribute('data-page');
            if (page) {
                loadContent(page);
            }
        });
    });

    // Load default content (home page)
    loadContent('pages/home.html');
});
