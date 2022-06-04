import React from 'react';
import './Dashboard.scss';

const Dashboard = ({ allUsers }) => {



  return (
    <div className="dashboard-area">
      <div className="row">
        <div className="col-12 col-lg-6 col-xl-3">
          <div className="single-widget">
            <div className="widget-header">
              <div className="widget-title">
                <h3>USERS</h3>
              </div>
              <div className="widget-percentage">
                <i className="fa-solid fa-chevron-up text-success"></i>
                <h3 className='text-success'>20 %</h3>
              </div>
            </div>
            <div className="widget-body">
              <h2>{allUsers.length > 0 ? allUsers.length : 0}</h2>
            </div>
            <div className="widget-footer">
              <a>See all users</a>
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3">
          <div className="single-widget">
            <div className="widget-header">
              <div className="widget-title">
                <h3>ORDERS</h3>
              </div>
              <div className="widget-percentage">
                <i className="fa-solid fa-chevron-up text-success"></i>
                <h3 className='text-success'>20 %</h3>
              </div>
            </div>
            <div className="widget-body">
              <h2>100</h2>
            </div>
            <div className="widget-footer">
              <a>View all orders</a>
              <i className="fa-solid fa-cart-shopping" style={{ background: '#FDEDC9', color: '#E2C56D' }}></i>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3">
          <div className="single-widget">
            <div className="widget-header">
              <div className="widget-title">
                <h3>EARNINGS</h3>
              </div>
              <div className="widget-percentage">
                <i className="fa-solid fa-chevron-up text-success"></i>
                <h3 className='text-success'>20 %</h3>
              </div>
            </div>
            <div className="widget-body">
              <h2>$ 100</h2>
            </div>
            <div className="widget-footer">
              <a>View all earnings</a>
              <i className="fa-solid fa-coins" style={{ background: '#C3EAC2', color: '#63A661' }}></i>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3">
          <div className="single-widget">
            <div className="widget-header">
              <div className="widget-title">
                <h3>BALANCE</h3>
              </div>
              <div className="widget-percentage">
                <i className="fa-solid fa-chevron-up text-success"></i>
                <h3 className='text-success'>20 %</h3>
              </div>
            </div>
            <div className="widget-body">
              <h2>$ 100</h2>
            </div>
            <div className="widget-footer">
              <a>See details</a>
              <i className="fa-solid fa-wallet" style={{ background: '#D6AFD7', color: '#823883' }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard