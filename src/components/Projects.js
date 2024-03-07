import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "User App",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Admin Panel",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Movie Website",
      description: "provides a seamless and enjoyable platform for movie enthusiasts.",
      imgUrl: projImg3,
    },
    {
      title: "ETUFOƆ SHOP",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "ETUFOƆ SHOP",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "ETUFOƆ SHOP",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Padus Catering App",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Padus Catering App",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "Padus Catering App",
      description: "Design & Development",
      imgUrl: projImg12,
    },
    {
      title: "Pharmacy Webite",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Pharmacy Webite",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Pharmacy Webite",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am a skilled and passionate developer, and this website serves as a showcase of my work, skills, and accomplishments. Here, you will find a collection of the projects I have worked on, demonstrating my expertise in various areas of software development..</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Feel free to reach out if you're interested in any of these subjects or if you're eager to embark on a learning journey in mathematics, science, technology, or programming. I'm here to help you achieve your educational and career goals.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Feel free to reach out if you're interested in any of these subjects or if you're eager to embark on a learning journey in mathematics, science, technology, or programming. I'm here to help you achieve your educational and career goals.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
