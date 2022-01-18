import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>This is about page {id}</h1>
        </div>
    )
}

export default About
