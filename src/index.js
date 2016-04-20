import React, { Component, PropTypes } from 'react';

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
            const image = new window.Image();
            image.onload = () => {
                this.setState({
                    src: this.props.src
                });
            };
            image.onerror = () => {
                this.setState({
                    src: this.props.default
                });
            };
            image.src = this.props.src;
        }
    }

    hasFallBack() {
        return !!this.props.default;
    }

    render() {
        if (this.hasFallBack()) {
            if (this.state.src) {
                return <img src={this.state.src}/>
            }
            return null;
        }
        return <img src={this.props.src}/>;
    }
}

DumbImage.propTypes = {
    src: PropTypes.string.isRequired,
    default: PropTypes.string // fall back image
};

export default DumbImage;
