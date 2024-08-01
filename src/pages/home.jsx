import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import portraitImage from '../images/portrait_1.jpeg';

export const Home = () => {
    return (
        <div className='container'>
            <div className='row justify-content-end'>
                <div className='col-lg-4'>
                    <div className='card' style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <img src={portraitImage} className='card-img-top' alt='home' style={{ borderRadius: '15px', padding: '10px', backgroundColor: '#fff' }}/>
                        <div className='card-body'>
                            <p className='card-text'>
                                As a second year student at ISIMA in France, my current research focuses on Image Processing, Natural Language Processing(NLP) and Code Generation Based on ML/AI.
                            </p>
                            <p className='card-text'>
                                In the meantime, I am honoured to invite you to visit my website on art.
                            </p>
                            <a href='https://aoxie.myportfolio.com/' className="btn btn-blue">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
