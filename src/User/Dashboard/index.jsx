import React, { useEffect, useState } from 'react'
import { ContentHeaderSection } from '../../Components/User/Layouts/ContentHeaderSection'
import UserInfo from '../../Services/UserInfo';

function Dashboard() {
  const [user, setUser] = useState(null);
  const contentHeader = {
    icon: "fa fa-dashboard",
    titel: "CRM Admin Dashboard",
    subTitle: "Welcome to CRM Admin Dashboard",
  }

  useEffect(()=>{
    if(!user){
      console.log("getUserById");
      getUserById();
    }
  })
  const getUserById = async () => {
    const userInfo = await UserInfo.getUserById();
    setUser(userInfo?.data);
  }
  return (
    <>
      <div className="content-wrapper">
        <ContentHeaderSection contentHeader={contentHeader} />
        {/* <section className="content-header">
          <div className="header-icon">
            <i className="fa fa-dashboard"></i>
          </div>
          <div className="header-title">
            <h1>CRM Admin Dashboard</h1>
            <small>Very detailed & featured admin.</small>
          </div>
        </section> */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox1">
                <div className="statistic-box">
                  <i className="fa fa-user-plus fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">11</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Active Client</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox2">
                <div className="statistic-box">
                  <i className="fa fa-user-secret fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">4</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Active Admin</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox3">
                <div className="statistic-box">
                  <i className="fa fa-money fa-3x"></i>
                  <div className="counter-number pull-right">
                    <i className="ti ti-money"></i><span className="count-number">965</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Total Expenses</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox4">
                <div className="statistic-box">
                  <i className="fa fa-files-o fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">11</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Running Projects</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox1">
                <div className="statistic-box">
                  <i className="fa fa-user-plus fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">11</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Active Client</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox2">
                <div className="statistic-box">
                  <i className="fa fa-user-secret fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">4</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Active Admin</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox3">
                <div className="statistic-box">
                  <i className="fa fa-money fa-3x"></i>
                  <div className="counter-number pull-right">
                    <i className="ti ti-money"></i><span className="count-number">965</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Total Expenses</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox4">
                <div className="statistic-box">
                  <i className="fa fa-files-o fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">11</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Running Projects</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox1">
                <div className="statistic-box">
                  <i className="fa fa-user-plus fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">11</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Active Client</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox2">
                <div className="statistic-box">
                  <i className="fa fa-user-secret fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">4</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Active Admin</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox3">
                <div className="statistic-box">
                  <i className="fa fa-money fa-3x"></i>
                  <div className="counter-number pull-right">
                    <i className="ti ti-money"></i><span className="count-number">965</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Total Expenses</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div id="cardbox4">
                <div className="statistic-box">
                  <i className="fa fa-files-o fa-3x"></i>
                  <div className="counter-number pull-right">
                    <span className="count-number">11</span>
                    <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                    </span>
                  </div>
                  <h3> Running Projects</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard