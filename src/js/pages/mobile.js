import React from 'react';
import API from '../api';
import ButtonLink from '../components/button';

import * as three from '../three';

class MobilePage extends React.Component {

    // componentDidMount() {
    //     three.initialize();
    //     three.animate();
    // }

    render() {
        return (
            <div className="page mobile-page">
                <a-scene embedded artoolkit='sourceType: webcam;'>

                    <a-image src="jiraf.jpg" width="3" height="1.5" ></a-image>

                    <a-marker-camera preset='hiro'></a-marker-camera>
                </a-scene>
            </div>
        )
    }
}

export default API.connect(MobilePage)
