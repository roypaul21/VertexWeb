
import { HashLink } from "react-router-hash-link"

export default function HeroSection() {
    return(
        <section className="hero-section">
            <div className="hero-section-container">
                <div className="hero-section-left-container">
                    <div className="hero-section-header-container">
                        <div className="hero-section-header">
                            <h1 data-aos="fade-down">VERTEX</h1>
                            <div className="hero-section-header-shadow" data-aos="fade-down" data-aos-delay="200">
                                <h1>VERTEX</h1>
                            </div>
                        </div>
                        <div className="hero-section-text" data-aos="fade-down">
                            <p>EQUIPMENT</p>
                            <p>MEDICAL</p>    
                        </div>
                    </div>
                    <div className="hero-section-btn">
                        <button data-aos="fade-right" data-aos-delay="400">About Us</button>
                        <HashLink to="#footerSection" smooth>
                            <button id="home-section-git" data-aos="fade-left" data-aos-delay="400">Get in Touch</button>
                        </HashLink>
                    </div>
                </div>
                <div className="hero-section-right-container">
                    <div className="hero-section-vid-column">
                        <div className="hero-section-vid-container container-vid-big" data-aos="fade-down" data-aos-delay="700">
                                <video src="./videos/vertex-vid1.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="850">
                                <video src="./videos/vertex-vid2.mp4" autoPlay loop muted />
                        </div>
                    </div>
                    
                    <div className="hero-section-vid-column">
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="900">
                            <video src="./videos/vertex-vid3.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="1050">
                                <video src="./videos/vertex-vid4.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="1200">
                                <video src="./videos/vertex-vid5.mp4" autoPlay loop muted />
                        </div>
                    </div>

                    <div className="hero-section-vid-column">
                        <div className="hero-section-vid-container container-vid-small"  data-aos="fade-down" data-aos-delay="1400">
                                <video src="./videos/vertex-vid6.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="1550">
                                <video src="./videos/vertex-vid7.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="1700">
                                <video src="./videos/vertex-vid8.mp4" autoPlay loop muted />
                        </div>
                    </div>
                    
                    <div className="hero-section-vid-column">
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="2050">
                            <video src="./videos/vertex-vid9.mp4" autoPlay loop muted />
                    </div>
                    <div className="hero-section-vid-container container-vid-big" data-aos="fade-down" data-aos-delay="1900">
                            <video src="./videos/vertex-vid11.mp4" autoPlay loop muted />
                    </div>
                    </div>
                    <div className="hero-section-btn-mobile">
                        <button data-aos="fade-right" data-aos-delay="400">About Us</button>
                        <HashLink to="#footerSection" smooth>
                            <button id="home-section-git-mobile" data-aos="fade-left" data-aos-delay="400">Get in Touch</button>
                        </HashLink>
                    </div>
                </div>
            </div>
        </section>
    )
}