import React from 'react';
import API from '../api';
import ButtonLink from '../components/button'

class MainPage extends React.Component {
  render() {
    return (
      <div className="page main-page">
        <div className="main-page_group-buttons">
          <ButtonLink
            title={'пк'}
            styles={'btn-link btn-link_pc'}
            pathname={'pc'} />
          <ButtonLink
            title={'телефон'}
            styles={'btn-link btn-link_mobile'}
            pathname={'mobile'} />
        </div>
      </div>
    )
  }
}

export default API.connect(MainPage) 