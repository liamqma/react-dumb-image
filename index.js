import React from 'react';
import { render } from 'react-dom';
import DumbImage from '../src/index';

const rootEl = document.getElementById('root');

render(
    <DumbImage
        src="http://imagedoesnotexist.com"
        default="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3BDX_i2rHh_BvcNgho-4MRl0dt5bzZx30t4lQac0Bm1gQt56g"
    />,
    rootEl
)