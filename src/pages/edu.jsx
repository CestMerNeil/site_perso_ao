import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const education = [
    {
        school_name:
            "Institut Supérieur d’Informatique, de Modélisation et de leurs Applications",
        school_url: "https://www.isima.fr/",
        education_time: "2022-2024",
        college: "School of Engineering",
        major: "Software Engineering and Computer Systems",
    },
    {
        school_name: "Université Clermont Auvergne",
        school_url: "https://www.uca.fr/",
        education_time: "2018-2022",
        college: "N/A",
        major: "Smart Science and Technologies",
    },
    {
        school_name: "Hubei University of Automotive Technology",
        school_url: "https://www.huat.edu.cn/",
        education_time: "2018-2022",
        college: "IAE",
        major: "Computer Science and Technology (Automotive Intelligences and Informatics)",
    },
];

const Education = () => {
    return (
        <Container className="py-5">
            {education.map((school, index) => (
                <Row className="mb-5" key={index}>
                    <Col md={4} className="text-secondary">
                        <h4 className="mb-2">{school.school_name}</h4>
                        
                    </Col>
                    <Col md={8} className="pl-md-5">
                        <p className="mb-0">{school.college}</p>
                        <p className="mb-0">{school.major}</p>
                        <p className="mb-0">{school.education_time}</p>
                        <p className="mb-0">
                            <a href={school.school_url} target="_blank" rel="noopener noreferrer">
                                {school.school_url}
                            </a>
                        </p>
                    </Col>
                    {index !== education.length - 1 && (
                        <Col md={12}>
                            <hr className="my-5" />
                        </Col>
                        )}
                </Row>
                ))}
        </Container>
        );
};

export default Education;

