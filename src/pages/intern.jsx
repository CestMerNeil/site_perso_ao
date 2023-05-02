import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const internship = [
    {
        internship_subjet: "FPGA-based computer artificial intelligence and deep learning",
        internship_time: "2023 April - 2023 August",
        internship_place: "Waseda University",
        internship_department: "Department of Electronic and Physical Systems",
        url: "https://github.com/CestMerNeil/Internship_Waseda",
        internship_role: "Researcher",
    },
];

const Internships = () => {
    return (
        <Container className="py-0">
            {internship.map((intern, index) => (
                <Row className="mb-0" key={index}>
                    <Col md={4} className="text-secondary">
                        <h4 className="mb-0">{intern.internship_subjet}</h4>
                        <h6 className="mb-0">{intern.internship_time}</h6>

                    </Col>
                    <Col md={8} className="pl-md-5">
                        <p className="mb-0">{intern.internship_role}</p>
                        <p className="mb-0">{intern.internship_place}</p>
                        <p className="mb-0">{intern.internship_department}</p>
                        <p className="mb-0">
                            <a href={intern.url} target="_blank" rel="noopener noreferrer">
                                {intern.url}
                            </a>
                        </p>
                    </Col>
                    {index !== internship.length - 1 && (
                        <Col md={12}>
                            <hr className="my-5"/>
                        </Col>
                    )}
                </Row>
            ))}
        </Container>
    );
};

export default Internships;
