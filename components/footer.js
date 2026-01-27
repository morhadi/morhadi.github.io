class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1E293B;
                    color: white;
                    padding: 3rem 0;
                }
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                .footer-section h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #3B82F6;
                }
                .footer-section ul {
                    list-style: none;
                    padding: 0;
                }
                .footer-section ul li {
                    margin-bottom: 0.75rem;
                }
                .footer-section ul li a {
                    color: #CBD5E1;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .footer-section ul li a:hover {
                    color: #3B82F6;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .social-links a {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #334155;
                    border-radius: 50%;
                    transition: all 0.3s;
                }
                .social-links a:hover {
                    background-color: #3B82F6;
                    transform: translateY(-3px);
                }
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid #334155;
                    color: #94A3B8;
                }
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Mohammad Rabi Ul Hadi</h3>
                        <p>Computer Science Engineer with a passion for data science, algorithms, and building impactful solutions.</p>
                        <div class="social-links">
                            <a href="https://www.linkedin.com/in/mohammad-rabi-ul-hadi" target="_blank" rel="noopener noreferrer"><i data-feather="linkedin"></i></a>
                            <a href="https://github.com/morhadi" target="_blank" rel="noopener noreferrer"><i data-feather="github"></i></a>
                            <a href="mailto:muhdhadiezio@gmail.com"><i data-feather="mail"></i></a>
                            <a href="https://leetcode.com/u/morhadi/" target="_blank" rel="noopener noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" width="24" height="24">
                            </a>
                            <a href="https://codeforces.com/profile/morhadi" target="_blank" rel="noopener noreferrer">
                                <img src="https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png" alt="Codeforces" width="24" height="24">
                            </a>
                            <a href="https://www.codechef.com/users/morhadi" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.codechef.com/images/cc-logo.svg" alt="CodeChef" width="24" height="24">
                            </a>
                            <a href="https://codolio.com/profile/morhadi" target="_blank" rel="noopener noreferrer">
                                <img src="https://huggingface.co/spaces/morhadi/codecraft-portfolio-pro/resolve/main/images/codolio.svg" alt="Codolio" width="24" height="24">
                            </a>
                            <a href="https://clist.by/coder/morhadi/" target="_blank" rel="noopener noreferrer">
                                <img src="https://huggingface.co/spaces/morhadi/codecraft-portfolio-pro/resolve/main/images/clist%20logo-48.png" alt="Clist" width="24" height="24">
                            </a>
</div>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="mailto:muhdhadiezio@gmail.com">muhdhadiezio@gmail.com</a></li>
                            <li>Srinagar, Jammu & Kashmir</li>
</ul>
                    </div>
                </div>
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} Mohammad Rabi Ul Hadi. All rights reserved.
                </div>
            </footer>
        `;

        // Initialize feather icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);
