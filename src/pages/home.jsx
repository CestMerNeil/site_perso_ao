import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import portraitImage from '../images/portrait.jpeg';

export const Home = () => {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <img alt='home' src={portraitImage} className='img-fluid' style={{ borderRadius: '8%' }}/>
                </div>
                <div className='col-lg-6'>
                    <p>
                        As a second year student at ISIMA in France, my current research focuses on Image Processing, Natural Language Processing(NLP) and Code Generation Based on ML/AI.
                    </p>
                    <p>
                        In the meantime, I am honoured to invite you to visit my website on art.
                    </p>
                    <button type="button" className="btn btn-light" onClick={() => {window.location.href = 'https://aoxie.myportfolio.com/';}}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};
