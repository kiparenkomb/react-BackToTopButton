import React, { Component } from 'react';

import './styles.scss';

import SvgLongArrowUp from './svg-long-arrow-up.jsx';

class BackToTopButton extends Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0,
            visibeleButton: false,
        };

        this._scrollStep = this._scrollStep.bind(this);
        this._scrollToTop = this._scrollToTop.bind(this);
    }

    componentWillMount() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= 6000) {
                this.setState({
                    visibeleButton: true,
                });
            } else {
                this.setState({
                    visibeleButton: false,
                });
            }
        });
    }

    _scrollStep () {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
    }

    _scrollToTop () {
        let intervalId = setInterval(this._scrollStep, .8);
        this.setState({ intervalId: intervalId });
    }

    render () {
        const { visibeleButton } = this.state;
        return (
            <div>
                <button
                    title='Back to top'
                    className = { visibeleButton ? 'BackToTopButton is-visibleButton' : 'BackToTopButton'}
                    onClick = { this._scrollToTop }
                >
                    <SvgLongArrowUp />
                </button>
            </div>
        );
    }
}

export default BackToTopButton;
