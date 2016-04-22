import React from 'react';
import { render } from 'react-dom';
import DumbImage from '../src/index';

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

render(
    <DumbImage
        src="http://imagedoesnotexist.com"
        default="image1.jpg"
    />,
    image1
);

render(
    <DumbImage
        src="image2.jpg"
    />,
    image2
);

render(
    <DumbImage
        src="image3.jpg"
        default="image1.jpg"
    />,
    image3
);