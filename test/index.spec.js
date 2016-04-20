import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Image from '../src/index';

describe('<Image />', function () {
    describe('when no default src', function () {
        it("it should render an image", function () {
            expect(shallow(<Image src="foo"/>)).to.contain(<img src="foo"/>);
        });
    });
});