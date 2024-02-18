
export default function HeroSection() {
    return(
        <section className="hero-section">
            <div className="hero-section-container">
                <div className="hero-section-left-container">
                    <div className="hero-section-header">
                        <h1 data-aos="fade-down">VERTEX</h1>
                        <div className="hero-section-header-shadow" data-aos="fade-down" data-aos-delay="200">
                            <h1>VERTEX</h1>
                        </div>
                    </div>
                    <div className="hero-section-btn">
                        <button data-aos="fade-right" data-aos-delay="900">About Us</button>
                        <button data-aos="fade-left" data-aos-delay="900">Get in Touch</button>
                    </div>
                </div>
                <div className="hero-section-right-container">
                    <div className="hero-section-vid-column">
                    <div className="hero-section-vid-container container-vid-big" data-aos="fade-down" data-aos-delay="1100">
                            <video src="./videos/vertex-vid1.mp4" autoPlay loop muted />
                    </div>
                    <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="1250">
                            <video src="./videos/vertex-vid2.mp4" autoPlay loop muted />
                    </div>
                    </div>
                    
                    <div className="hero-section-vid-column">
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="1700">
                            <video src="./videos/vertex-vid3.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="1550">
                                <video src="./videos/vertex-vid4.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="1400">
                                <video src="./videos/vertex-vid5.mp4" autoPlay loop muted />
                        </div>
                    </div>

                    <div className="hero-section-vid-column">
                        <div className="hero-section-vid-container container-vid-small"  data-aos="fade-down" data-aos-delay="1950">
                                <video src="./videos/vertex-vid6.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="2100">
                                <video src="./videos/vertex-vid7.mp4" autoPlay loop muted />
                        </div>
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="2250">
                                <video src="./videos/vertex-vid8.mp4" autoPlay loop muted />
                        </div>
                    </div>
                    
                    <div className="hero-section-vid-column">
                        <div className="hero-section-vid-container container-vid-small" data-aos="fade-down" data-aos-delay="2600">
                            <video src="./videos/vertex-vid9.mp4" autoPlay loop muted />
                    </div>
                    <div className="hero-section-vid-container container-vid-big" data-aos="fade-down" data-aos-delay="2450">
                            <video src="./videos/vertex-vid11.mp4" autoPlay loop muted />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}