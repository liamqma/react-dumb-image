import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import DumbImage from '../src/index';

describe('<DumbImage />', function () {

    beforeEach(function () {
        global.window.Image = function () {
        };
    });

    describe('when no default src', function () {
        it('it should render an image', function () {
            expect(shallow(<DumbImage src="foo"/>)).to.contain(<img src="foo"/>);
        });
    });
    describe('when has default src', function () {
        it('it should fallback to default if src fails', function () {
            global.window.Image.prototype.__defineSetter__('src', function () {
                this.onerror();
            });
            expect(mount(<DumbImage src="foo" default="bar"/>)).to.contain(<img src="bar"/>);
        });
        it('it should use src if src success', function () {
            global.window.Image.prototype.__defineSetter__('src', function () {
                this.onload();
            });
            expect(mount(<DumbImage src="foo" default="bar"/>)).to.contain(<img src="foo"/>);
        });
    })
});