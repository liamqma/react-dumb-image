react-dumb-image
================

[![Build Status](https://travis-ci.org/liamqma/react-dumb-image.svg?branch=master)](https://travis-ci.org/liamqma/react-dumb-image)

Motivation
----------
When dealing with third-party API, more than often I have to deal with external images. react-dumb-image provides an easy solution to show a fallback image if given image is invalid. This is achieved by creating an image `new Image()` on the fly and verify whether or not the src is valid by attaching `onerror` event. I didn't use react [onerror](https://facebook.github.io/react/docs/events.html#image-events) (e.g. `<img onError={this.handleError} src={src} />`) event because users will see a 'flip' from broken image to fallback image.

Usage
-----

```javascript
import React from 'react';
import DumbImage from 'react-dumb-image';

React.render((
  <DumbImage
    src="invalid.jpg"
    default="valid.jpg"
  </ImageLoader>
), document.body);

```
