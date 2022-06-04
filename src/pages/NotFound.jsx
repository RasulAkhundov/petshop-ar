import React from 'react';
import '../css/NotFound.scss';
import BreadCrumb from '../components/BreadCrumb';

const breadCrumbName = {
  name: '404 Not Found'
}

const NotFound = () => {
  return (
    <main>
      <BreadCrumb breadCrumbName={breadCrumbName}/>
      <div className="area-404">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div className="error-content">
                <img src={require('../assets/404.jpg')} className="img-fluid" alt="" />
                <h4>Ooops.... Error 404</h4>
                <h5>Sorry, But the page you are looking for doesn't exist</h5>
                <a href="/"><button type='button'>GO BACK HOME</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound