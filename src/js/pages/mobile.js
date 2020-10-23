import React from 'react';
import API from '../api';
import ButtonLink from '../components/button'

class MobilePage extends React.Component {
    render() {
        return (
            <div className="page mobile-page">
                <ButtonLink
                    title={'назад'}
                    styles={'btn-link btn-link_pc fixed'}
                    pathname={''}
                />
                <a-scene
                    vr-mode-ui="enabled: false;"
                    renderer="logarithmicDepthBuffer: true;"
                    embedded
                    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
                >
                    <a-nft
                        type="nft"
                        url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
                        smooth="true"
                        smoothCount="10"
                        smoothTolerance=".01"
                        smoothThreshold="5"
                    >
                        <a-entity
                            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                            scale="5 5 5"
                            position="50 150 0"
                        >
                        </a-entity>
                    </a-nft>
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        )
    }
}

export default API.connect(MobilePage) 