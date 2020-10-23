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
                    <a-sphere position='0 0.5 0' color='blue'></a-sphere>
                    <a-marker-camera preset='hiro'></a-marker-camera>
                </a-scene>
            </div>
        )
    }
}

export default API.connect(MobilePage)

{/* <div className="page mobile-page">
<ButtonLink
    title={'назад'}
    styles={'btn-link btn-link_pc fixed'}
    pathname={''}
/>
<a-scene embedded arjs>
    <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
    <a-marker-camera preset='hiro'></a-marker-camera>
</a-scene>
</div> */}