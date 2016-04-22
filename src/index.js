import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';

class DumbImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: null
        }
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

    destroy() {
        if (this.image) {
            this.image.onload = null;
            this.image.onerror = null;
            this.image = null;
        }
    }

    onLoad() {
        this.destroy();
        this.setState({
            src: this.props.src
        });
    }

    onError() {
        this.destroy();
        this.setState({
            src: this.props.default
        });
    }

    hasFallBack() {
        return !!this.props.default;
    }

    render() {
        const others = omit(this.props, ['src', 'default']);
        if (this.hasFallBack()) {
            if (this.state.src) {
                return <img {...others} src={this.state.src}/>
            }
            return null;
        }
        return <img {...others} src={this.props.src}/>;
    }
}

DumbImage.propTypes = {
    src: PropTypes.string.isRequired,
    default: PropTypes.string // fall back image
};

export default DumbImage;
