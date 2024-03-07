import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.jpeg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Welcome to my developer portfolio website! Here you will find a showcase of my skills and expertise as a developer. With a passion for creating innovative solutions and a deep understanding of various programming languages and technologies, I am dedicated to delivering high-quality software and web applications..</p>
                        <p>I also welcome students who are interested in learning programming languages for website and mobile app development. My expertise extends to teaching subjects such as core mathematics, elective mathematics, physics, chemistry, as well as web technologies like HTML and CSS. I can also guide students in programming languages and frameworks such as JavaScript, Java,SQL, Dart, and Python,react, flutter, codeigniter and django. Furthermore, my skills in ethical hacking enable me to teach this valuable cybersecurity discipline.</p>
                        <p>Feel free to reach out if you're interested in any of these subjects or if you're eager to embark on a learning journey in mathematics, science, technology, or programming. I'm here to help you achieve your educational and career goals.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5> Network Penetration Testing</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Software Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Penetration Testing</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
