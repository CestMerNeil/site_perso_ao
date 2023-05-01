import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const education = [
    {
        school_name:
            "Institut Supérieur d’Informatique, de Modélisation et de leurs Applications",
        school_url: "https://www.isima.fr/",
        education_time: "2022-2024",
        degree: "French engineer degree",
        major: "Software Engineering and Computer Systems",
    },
    {
        school_name: "Centre FLEURA - Université Clermont Auvergne",
        school_url: "https://www.uca.fr/international/apprendre-le-francais/centre-fleura",
        education_time: "2021-2022",
        major: "DUEFS Ingénieur B2 ",
    },
    {
        school_name: "Université Clermont Auvergne",
        school_url: "https://www.uca.fr/",
        education_time: "2018-2021",
        degree: "Bachelor's degree",
        major: "Smart Science and Technologies",
    },
    {
        school_name: "Hubei University of Automotive Technology",
        school_url: "https://iae.huat.edu.cn/",
        education_time: "2018-2022",
        college: "Institute of Automotive Engineers",
        degree: "Bachelor's degree",
        major: "Computer Science and Technology (Automotive Intelligences and Informatics)",
    },
];

const Education = () => {
    return (
        <Container className="py-0">
            {education.map((school, index) => (
                <Row className="mb-0" key={index}>
                    <Col md={4} className="text-secondary">
                        <h4 className="mb-0">{school.school_name}</h4>
                        
                    </Col>
                    <Col md={8} className="pl-md-5">
                        <p className="mb-0">{school.degree}</p>
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

