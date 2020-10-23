import React from 'react';
import API from '../api';
import ButtonLink from '../components/button'

class PcPage extends React.Component {
    render() {
        return (
            <div className="page pc-page">
                <ButtonLink
                    title={'назад'}
                    styles={'btn-link btn-link_pc'}
                    pathname={''}
                />
                <div className="img-container">
                    <img src='https://raw.githubusercontent.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex-image-big.jpeg' 
                    alt={"hint"} />
                </div>
            </div>
        )
    }
}

export default API.connect(PcPage) 