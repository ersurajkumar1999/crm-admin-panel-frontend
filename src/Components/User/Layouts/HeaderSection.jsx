import React, { useState } from 'react'
import userAuth from '../../../Services/UserAuth';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
export function HeaderSection() {
  const navigate = useNavigate();
  const handleLogout = async (event) => {
    event.preventDefault();
    const logout = await userAuth.doLogOut();
    if (logout) {
      toast.success("User logged out");
      navigate('/auth/login');
      setIsModalVisible(false);
    }
    console.log("logout==>", logout);
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to handle the button click and show the modal
  const handleShowModal = () => {
    setIsModalVisible(true);
  };
  // Function to handle the "NO" button click and close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <header className="main-header">
        <a href="index.html" className="logo">

          <span className="logo-mini">
            <img src="assets/dist/img/mini-logo.png" alt="" />
          </span>
          <span className="logo-lg">
            <img src="assets/dist/img/logo.png" alt="" />
          </span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="pe-7s-angle-left-circle"></span>
          </a>
          <a href="#search"><span className="pe-7s-search"></span></a>
          <div id="search">
            <button type="button" className="close">×</button>
            <form>
              <input type="search" placeholder="Search.." />
              <button type="submit" className="btn btn-add">Search...</button>
            </form>
          </div>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle admin-notification" data-toggle="dropdown">
                  <i className="pe-7s-cart"></i>
                  <span className="label label-primary">5</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#" className="border-gray">
                          <div className="pull-left">
                            <img src="assets/dist/img/basketball-jersey.png" className="img-thumbnail"
                              alt="User Image" />
                          </div>
                          <h4>polo shirt</h4>
                          <p><strong>total item:</strong> 21
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="border-gray">
                          <div className="pull-left">
                            <img src="assets/dist/img/shirt.png" className="img-thumbnail" alt="User Image" />
                          </div>
                          <h4>Kits</h4>
                          <p><strong>total item:</strong> 11
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="border-gray">
                          <div className="pull-left">
                            <img src="assets/dist/img/football.png" className="img-thumbnail" alt="User Image" />
                          </div>
                          <h4>Football</h4>
                          <p><strong>total item:</strong> 16
                          </p>
                        </a>
                      </li>
                      <li className="nav-list">
                        <a href="#" className="border-gray">
                          <div className="pull-left">
                            <img src="assets/dist/img/shoe.png" className="img-thumbnail" alt="User Image" />
                          </div>
                          <h4>Sports sheos</h4>
                          <p><strong>total item:</strong> 10
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-user">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="assets/dist/img/avatar5.png" className="img-circle" width="45" height="45" alt="user" /></a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="active" to="/user/profile">
                      <i className="fa fa-user"></i> User Profile
                    </Link>
                  </li>
                  <li> <a data-toggle="modal" href='#' onClick={handleShowModal}><i className="fa fa-sign-out"></i> Signout123</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className={`modal fade ${isModalVisible ? 'in' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalVisible ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-header-primary">
              <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3><i className="fa fa-sign-out m-r-5"></i> Log Out</h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <form className="form-horizontal">
                    <fieldset>
                      <div className="col-md-12 form-group user-form-group">
                        <label className="control-label">Are you sure you want to log out?</label>
                        <div className="pull-right">
                          <button type="button" className="btn btn-danger ml-3" onClick={handleCloseModal}>NO</button> &nbsp;
                          <button type="button" className="btn btn-add ml-3" onClick={handleLogout}>YES</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger pull-left" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}