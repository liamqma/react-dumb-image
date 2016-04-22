import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';

class DumbImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: null,
    };
  }

  componentDidMount() {
    // if fall back image is given,
    // use src if src is loaded correctly
    // otherwise use default src
    if (typeof window !== 'undefined' && this.hasFallBack()) {
      this.image = new window.Image();
      this.image.onload = this.onLoad.bind(this);
      this.image.onerror = this.onError.bind(this);
      this.image.src = this.props.src;
    }
  }

  componentWillUnmount() {
    this.destroy();
  }

  onLoad() {
    this.destroy();
    this.setState({
      src: this.props.src,
    });
  }

  onError() {
    this.destroy();
    this.setState({
      src: this.props.default,
    });
  }

  destroy() {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
      this.image = null;
    }
  }

  hasFallBack() {
    return !!this.props.default;
  }

  render() {
    const others = omit(this.props, ['alt', 'src', 'default']);
    if (this.hasFallBack()) {
      if (this.state.src) {
        return <img {...others} alt={this.props.alt} src={this.state.src} />;
      }
      return null;
    }
    return <img {...others} alt={this.props.alt} src={this.props.src} />;
  }
}

DumbImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  default: PropTypes.string, // fall back image
};

export default DumbImage;
