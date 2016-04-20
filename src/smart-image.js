import React, { Component, PropTypes } from 'react';

class SmartImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: null
        }
    }

    componentDidMount() {
        // if fall back image is given,
        // use src if src is loaded correctly
        // otherwise use defaultSrc
        if (this.hasFallBack()) {
            const image = new Image();
            image.onload = () => {
                this.setState({
                    src: this.props.src
                });
            };
            image.onerror = () => {
                this.setState({
                    src: this.props.defaultSrc
                });
            };
            image.src = this.props.src;
        }
    }

    hasFallBack() {
        return !!this.props.defaultSrc;
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

SmartImage.propTypes = {
    src: PropTypes.string.isRequired,
    defaultSrc: PropTypes.string // fall back image
};

export default SmartImage;
