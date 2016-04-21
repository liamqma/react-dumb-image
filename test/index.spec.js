import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import DumbImage from '../src/index';

describe('<DumbImage />', function () {

    beforeEach(function () {
        global.window.Image = function () {
        };
    });

    it('should include alt if alt is provided', function() {
        expect(shallow(<DumbImage src="foo" alt="bar"/>)).to.contain(<img src="foo" alt="bar"/>);
    });

    describe('when no default src', function () {
        it('it should render an image', function () {
            expect(shallow(<DumbImage src="foo"/>)).to.contain(<img src="foo"/>);
        });
    });
    describe('when has default src', function () {
        it('should fallback to default if src fails', function () {
            global.window.Image.prototype.__defineSetter__('src', function () {
                this.onerror();
            });
            expect(mount(<DumbImage src="foo" default="bar"/>)).to.contain(<img src="bar"/>);
        });
        it('should use src if src success', function () {
            global.window.Image.prototype.__defineSetter__('src', function () {
                this.onload();
            });
            expect(mount(<DumbImage src="foo" default="bar"/>)).to.contain(<img src="foo"/>);
        });
    });
    describe('static rendering (server side rendering)', function () {
        it('should render nothing if fall back image is given', function () {
            expect(render(<DumbImage src="foo" default="bar"/>).html()).to.equal('');
        });
    });
});