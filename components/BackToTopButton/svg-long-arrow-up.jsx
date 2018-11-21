import React, { Component } from 'react';

class SvgLongArrowUp extends Component {
    render() {
        return (
            <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <defs>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: '.cls-1,.cls-2{fill:none;}.cls-1{stroke-miterlimit:10;stroke-width:2px;}'
                        }}
                    />
                </defs>
                <title>Back to top</title>
                <polyline className="cls-1" points="6 7.5 12 1.5 18 7.5" />
                <line className="cls-1" x1={12} y1={2} x2={12} y2={24} />
                <rect className="cls-2" width={24} height={24} />
            </svg>
        );
    }
}

export default SvgLongArrowUp;
