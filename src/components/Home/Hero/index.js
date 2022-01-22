import Particles from "react-tsparticles";
import './index.scss'

const Hero = () => {

    return (
        <div>
            <div className="hero1 text-center " style={{ position: "relative" }}>
                <Particles
                    className="particles"
                    options={{
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 700
                                }
                            },
                            "color": {
                                "value": "#32CD32"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    // "width": 100,
                                    // "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 4,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 200,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 1,
                                "direction": "top",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "window",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 200,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 3,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }}
                />
                <div>
                    <p className="head layer" data-depth="1.0">Farook Jintha</p>
                </div>
                <div>
                    <p id="textdisp" class="text layer" data-depth="0.5">Machine Learning Engineer - Full Stack Developer</p>
                </div>
                <div class="icons" >

                    <div class="hexagon-wrapper">
                        <div class="hexagon">
                            <a target="_blank" href="https://github.com/farookjintha" title="Github">
                                <i class="fa fa-github"></i></a>
                        </div>
                    </div>
                    <div class="hexagon-wrapper">
                        <div class="hexagon">
                            <a target="_blank" href="https://www.linkedin.com/in/farookjintha" title="LinkedIn">
                                <i class="fa fa-linkedin fa-2x"></i></a>
                        </div>
                    </div>
                    <div class="hexagon-wrapper">
                        <div class="hexagon">
                            <a target="_blank" href="https://www.kaggle.com/farookjintha" title="Kaggle">
                                <i class="fa fa-kaggle fa-2x"></i></a>
                        </div>
                    </div>
                    <div class="hexagon-wrapper">
                        <div class="hexagon">
                            <a target="_blank" href="https://twitter.com/theFarookJintha" title="Twitter">
                                <i class="fa fa-twitter fa-2x"></i></a>
                        </div>
                    </div>
                    <div class="hexagon-wrapper">
                        <div class="hexagon">
                            <a target="_blank" href="https://www.facebook.com/farook.tendulkar" title="Facebook">
                                <i class="fa fa-facebook fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;