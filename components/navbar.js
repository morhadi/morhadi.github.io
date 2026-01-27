class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: white;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #3B82F6;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                .nav-links a {
                    color: #1E293B;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                .nav-links a:hover {
                    color: #3B82F6;
                }
                .nav-links a.active {
                    color: #3B82F6;
                }
                .nav-links a.active::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #3B82F6;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        background-color: white;
                        padding: 1rem;
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                    }
                    .nav-links.show {
                        display: flex;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="#" class="logo">Hadi</a>
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                    <div class="nav-links">
                        <a href="#hero">Home</a>
                        <a href="#about">About</a>
                        <a href="#education">Education</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#achievements">Achievements</a>
                    </div>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

        // Close mobile menu when clicking a link
        this.shadowRoot.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });

        // Initialize feather icons
        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);