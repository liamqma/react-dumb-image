import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';

class DumbImage extends Component {

    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            src: null
        }
    }

    componentDidMount() {
        this._isMounted = true;
        // if fall back image is given,
        // use src if src is loaded correctly
        // otherwise use default src
        if (typeof window !== 'undefined' && this.hasFallBack()) {
            const image = new window.Image();
            image.onload = () => {
                if (this._isMounted) {
                    this.setState({
                        src: this.props.src
                    });
                }
            };
            image.onerror = () => {
                if (this._isMounted) {
                    this.setState({
                        src: this.props.default
                    });
                }
            };
            image.src = this.props.src;
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
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
