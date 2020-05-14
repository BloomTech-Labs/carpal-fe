import React from "react";

import blueCutie from "../../img/logos/cutie-colors/blue.png";
import goldenCutie from "../../img/logos/cutie-colors/golden.png";
import grayCutie from "../../img/logos/cutie-colors/gray.png";
import lightGreenCutie from "../../img/logos/cutie-colors/light-green.png";
import turquoiseCutie from "../../img/logos/cutie-colors/OG-turquoise.png";
import redCutie from "../../img/logos/cutie-colors/red.png";
import roseCutie from "../../img/logos/cutie-colors/rose.png";
import yellowOrangeCutie from "../../img/logos/cutie-colors/yellow-orange.png";

import carl from "../../img/team/carl.jpg";
import dang from "../../img/team/dang.jpg";
import daniel from "../../img/team/daniel.jpg";
import darren from "../../img/team/darren.jpg";
import dennis from "../../img/team/dennis.jpg";
import lesley from "../../img/team/lesley.jpg";
import ruth from "../../img/team/ruth.jpg";
import steven from "../../img/team/steven.jpg";

import "./AboutPage.scss";

function AboutPage() {
    return (
        <div className="landing-page about-page">
            <h1 className="landing-header">Meet the CarPallers</h1>
            <section className="carpallers">
                <div className="awesome-aliens-box">
                    <div className="left">
                        <h2>Dennis Padiernos</h2>
                        <h3 className="team-title">Chief Dad Joke Officer</h3>
                        <div className="hide-tablet show-desktop">
                            <div className="img-container">
                                <img
                                    className="over"
                                    src={blueCutie}
                                    alt="CarPal cutie"
                                />
                                <img
                                    className="under"
                                    src={dennis}
                                    alt="Dennis Padiernos"
                                />
                            </div>

                            <div className="socials">
                                <a
                                    href="https://github.com/depadiernos"
                                    target="_blank"
                                >
                                    <i class="fab fa-github fa-3x"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dennispadiernos/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin-in fa-3x"></i>
                                </a>
                            </div>
                        </div>

                        <p>
                            Dennis is a software engineer that also loves music
                            and mechanical keyboards and in his free time, he
                            likes long walks by the beach and being a secret
                            agent of OWCA (Organization Without a Cool Acronym)
                        </p>
                    </div>
                    <div className="right  show-tablet hide-desktop">
                        <div className="img-container">
                            <img
                                className="over"
                                src={blueCutie}
                                alt="CarPal cutie"
                            />
                            <img
                                className="under"
                                src={dennis}
                                alt="Dennis Padiernos"
                            />
                        </div>
                        <div className="socials">
                            <a
                                href="https://github.com/depadiernos"
                                target="_blank"
                            >
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dennispadiernos/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="awesome-aliens-box">
                    <div className="left">
                        <h2>Dang Lu</h2>
                        <h3 className="team-title">Chief</h3>
                        <div className="hide-tablet show-desktop">
                            <div className="img-container">
                                <img
                                    className="over"
                                    src={goldenCutie}
                                    alt="CarPal cutie"
                                />
                                <img
                                    className="under"
                                    src={dang}
                                    alt="Dang Lu"
                                />
                            </div>

                            <div className="socials">
                                <a
                                    href="https://github.com/dangnlu18"
                                    target="_blank"
                                >
                                    <i class="fab fa-github fa-3x"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dang-lu/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin-in fa-3x"></i>
                                </a>
                            </div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className="right  show-tablet hide-desktop">
                        <div className="img-container">
                            <img
                                className="over"
                                src={goldenCutie}
                                alt="CarPal cutie"
                            />
                            <img className="under" src={dang} alt="Dang Lu" />
                        </div>
                        <div className="socials">
                            <a
                                href="https://github.com/dangnlu18"
                                target="_blank"
                            >
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dang-lu/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="awesome-aliens-box">
                    <div className="left">
                        <h2>Carl Redding</h2>
                        <h3 className="team-title">Chief Cutie Creator</h3>
                        <div className="hide-tablet show-desktop">
                            <div className="img-container">
                                <img
                                    className="over"
                                    src={grayCutie}
                                    alt="CarPal cutie"
                                />
                                <img
                                    className="under"
                                    src={carl}
                                    alt="Carl Redding"
                                />
                            </div>

                            <div className="socials">
                                <a
                                    href="https://github.com/miklo88"
                                    target="_blank"
                                >
                                    <i class="fab fa-github fa-3x"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/carl-redding-000a4281/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin-in fa-3x"></i>
                                </a>
                            </div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className="right  show-tablet hide-desktop">
                        <div className="img-container">
                            <img
                                className="over"
                                src={grayCutie}
                                alt="CarPal cutie"
                            />
                            <img
                                className="under"
                                src={carl}
                                alt="Carl Redding"
                            />
                        </div>
                        <div className="socials">
                            <a
                                href="https://github.com/miklo88"
                                target="_blank"
                            >
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/carl-redding-000a4281/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="awesome-aliens-box">
                    <div className="left">
                        <h2>Daniel Martin</h2>
                        <h3 className="team-title">Chief Back-end Guru</h3>
                        <div className="hide-tablet show-desktop">
                            <div className="img-container">
                                <img
                                    className="over"
                                    src={lightGreenCutie}
                                    alt="CarPal cutie"
                                />
                                <img
                                    className="under"
                                    src={daniel}
                                    alt="Daniel Martin"
                                />
                            </div>

                            <div className="socials">
                                <a
                                    href="https://github.com/ohfr"
                                    target="_blank"
                                >
                                    <i class="fab fa-github fa-3x"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/daniel-p-martin/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin-in fa-3x"></i>
                                </a>
                            </div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className="right  show-tablet hide-desktop">
                        <div className="img-container">
                            <img
                                className="over"
                                src={lightGreenCutie}
                                alt="CarPal cutie"
                            />
                            <img
                                className="under"
                                src={daniel}
                                alt="Daniel Martin"
                            />
                        </div>
                        <div className="socials">
                            <a href="https://github.com/ohfr" target="_blank">
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/daniel-p-martin/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="awesome-aliens-box">
                    <div className="left">
                        <h2>Darren Angus</h2>
                        <h3 className="team-title">Chief Front-end Guru</h3>
                        <div className="hide-tablet show-desktop">
                            <div className="img-container">
                                <img
                                    className="over"
                                    src={turquoiseCutie}
                                    alt="CarPal cutie"
                                />
                                <img
                                    className="under"
                                    src={darren}
                                    alt="Darren Angus"
                                />
                            </div>

                            <div className="socials">
                                <a
                                    href="https://github.com/dangus1924"
                                    target="_blank"
                                >
                                    <i class="fab fa-github fa-3x"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/darren-angus-441b7b188/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin-in fa-3x"></i>
                                </a>
                            </div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className="right  show-tablet hide-desktop">
                        <div className="img-container">
                            <img
                                className="over"
                                src={turquoiseCutie}
                                alt="CarPal cutie"
                            />
                            <img
                                className="under"
                                src={darren}
                                alt="Darren Angus"
                            />
                        </div>
                        <div className="socials">
                            <a
                                href="https://github.com/dangus1924"
                                target="_blank"
                            >
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/darren-angus-441b7b188/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="awesome-aliens-box">
                    <div className="left">
                        <h2>Lesley Banadzem</h2>
                        <h3 className="team-title">Chief</h3>
                        <div className="hide-tablet show-desktop">
                            <div className="img-container">
                                <img
                                    className="over"
                                    src={redCutie}
                                    alt="CarPal cutie"
                                />
                                <img
                                    className="under"
                                    src={lesley}
                                    alt="Lesley Banadzem"
                                />
                            </div>

                            <div className="socials">
                                <a
                                    href="https://github.com/lesleyfon"
                                    target="_blank"
                                >
                                    <i class="fab fa-github fa-3x"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lesley-banadzem/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin-in fa-3x"></i>
                                </a>
                            </div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className="right  show-tablet hide-desktop">
                        <div className="img-container">
                            <img
                                className="over"
                                src={redCutie}
                                alt="CarPal cutie"
                            />
                            <img
                                className="under"
                                src={lesley}
                                alt="Lesley Banadzem"
                            />
                        </div>
                        <div className="socials">
                            <a
                                href="https://github.com/lesleyfon"
                                target="_blank"
                            >
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lesley-banadzem/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="awesome-aliens-box">
                    <div className="left">
                        <h2>Ruth Poliakon</h2>
                        <h3 className="team-title">Chief Zoom Host</h3>
                        <div className="hide-tablet show-desktop">
                            <div className="img-container">
                                <img
                                    className="over"
                                    src={roseCutie}
                                    alt="CarPal cutie"
                                />
                                <img
                                    className="under"
                                    src={ruth}
                                    alt="Ruth Poliakon"
                                />
                            </div>

                            <div className="socials">
                                <a
                                    href="https://github.com/rupol"
                                    target="_blank"
                                >
                                    <i class="fab fa-github fa-3x"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ruthpoliakon/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin-in fa-3x"></i>
                                </a>
                            </div>
                        </div>

                        <p>
                            Ruth is an entomologist, master gardener, and
                            chicken enthusiast who applies the skills she gained
                            in biological research to front end development.
                        </p>
                    </div>
                    <div className="right  show-tablet hide-desktop">
                        <div className="img-container">
                            <img
                                className="over"
                                src={roseCutie}
                                alt="CarPal cutie"
                            />
                            <img
                                className="under"
                                src={ruth}
                                alt="Ruth Poliakon"
                            />
                        </div>
                        <div className="socials">
                            <a href="https://github.com/rupol" target="_blank">
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ruthpoliakon/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="awesome-aliens-box">
                    <div className="left">
                        <h2>Steven Vandenburg</h2>
                        <h3 className="team-title">Chief Driver</h3>
                        <div className="hide-tablet show-desktop">
                            <div className="img-container">
                                <img
                                    className="over"
                                    src={yellowOrangeCutie}
                                    alt="CarPal cutie"
                                />
                                <img
                                    className="under"
                                    src={steven}
                                    alt="Steven Vandenburg"
                                />
                            </div>

                            <div className="socials">
                                <a
                                    href="https://github.com/smv5047"
                                    target="_blank"
                                >
                                    <i class="fab fa-github fa-3x"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/stevenvandenburg/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin-in fa-3x"></i>
                                </a>
                            </div>
                        </div>

                        <p>Debonair Dad, DJ, and Developer</p>
                    </div>
                    <div className="right  show-tablet hide-desktop">
                        <div className="img-container">
                            <img
                                className="over"
                                src={yellowOrangeCutie}
                                alt="CarPal cutie"
                            />
                            <img
                                className="under"
                                src={steven}
                                alt="Steven Vandenburg"
                            />
                        </div>
                        <div className="socials">
                            <a
                                href="https://github.com/smv5047"
                                target="_blank"
                            >
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/stevenvandenburg/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
