import React from "react";
import {Container, Row, Col} from "react-bootstrap";
const projectsList = [
    {
        name: "Information Distribution Website",
        brief: "An information distribution website written for the Sigma Student Office",
        nbGroup: "2",
        time:"Dec. 2022 - Mar. 2023",
        url: "https://gitlab.isima.fr/aoxie/site_bde",
        task: "Responsible for Progressive Web App",
    },
    {
        name: "Naval War",
        brief: "Web game with front-end ang back-end separation.",
        nbGroup: "4",
        time:"Feb. 2023 - Mar. 2023",
        url: "https://github.com/CestMerNeil/Naval_War",
        task: "Responsible for front-end design and front and back-end communication.",
    },
    {
        name: "Contact Management System",
        brief: "A contact management system controlled in the terminal based on C#. ",
        nbGroup: "1",
        time:"Jan. 2023",
        url: "https://github.com/CestMerNeil/Gestion_de_Contacts/",
        task: "Responsible for all the system.",
    },
    {
        name: "Numpy-based MNIST dataset detection",
        brief: "N/A",
        nbGroup: "1",
        time:"Jan. 2022 - Aug. 2022",
        url: "N/A",
        task: "Responsible for all the system.",
    },
    {
        name: "Real_Time Road Traffic Sign Detection Based on YOLO",
        brief: "N/A",
        nbGroup: "1",
        time:"Oct. 2021 - May. 2022",
        url: "N/A",
        task: "Responsible for all the system.",
    },
];

const Projects = () => {
    return (
        <Container className="py-0">
            {projectsList.map((project, index) => (
                <Row className="mb-0" key={index}>
                    <Col md={4} className="text-secondary">
                        <h3 className="mb-0">{project.name}</h3>
                        <h8 className="mb-0">In A Group of {project.nbGroup}</h8>
                        <h6 className="mb-0">{project.time}</h6>
                    </Col>
                    <Col md={8} className="pl-md-5">

                        <p className="mb-0">{project.brief}</p>
                        <p className="mb-0">{project.task}</p>
                        <p className="mb-0">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                {project.url}
                            </a>
                        </p>
                    </Col>
                    {index !== projectsList.length - 1 && (
                        <Col md={12}>
                            <hr className="my-5" />
                        </Col>
                        )}
                </Row>
                ))}
        </Container>
        );
};

export default Projects;