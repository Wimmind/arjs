import React from 'react';
import API from '../api';
import ButtonLink from '../components/button'

class PcPage extends React.Component {
    render() {
        return (
            <div className="pc-page">
                <ButtonLink
                    title={'назад'}
                    styles={'btn-link btn-link_pc'}
                    pathname={'main'} />
                <div style={{ backgroundColor: 'black', width: '100px', height: '100px' }}>

                </div>
            </div>
        )
    }
}

export default API.connect(PcPage) 