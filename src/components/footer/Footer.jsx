import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">VALERO</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer_link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/kayro-valero/" className="footer_social-link" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/kayro-svg" className="footer_social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="https://dribbble.com/KayroV" className="footer_social-link" target="_blank">
                        <i class="uil uil-dribbble"></i>
                    </a>
                </div>

                <span className='footer_copy'>&#169; Kayro Valero - Portfolio. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer