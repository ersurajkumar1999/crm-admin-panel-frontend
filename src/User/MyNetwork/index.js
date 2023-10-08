import React, { useEffect, useState } from 'react'
import { ContentHeaderSection } from '../../Components/User/Layouts/ContentHeaderSection'
import UserInfo from '../../Services/UserInfo';

function MyNetwork() {
    const [users, setUsers] = useState([]);
    const page = 1;
    const perPage = 100;

    const contentHeader = {
        icon: "fa fa-sitemap",
        titel: "Professional Networking",
        subTitle: "Welcome to NetWork",
    }
    // const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const getMyNetwork = async (page, perPage) =>{
        const response = await UserInfo.getMyNetwork(page, perPage);
        if(response?.status){
            setUsers(response?.data);
        }
    }
    
    useEffect(()=>{
        if(!users.length){

            getMyNetwork(page, perPage);
        }
        
    })

    return (
        <div className="content-wrapper">
            <ContentHeaderSection contentHeader={contentHeader} />
            <section className="content">
                <div className="row">
                    {users.length > 0 && users.map((user) => {
                        return (
                            <div key={user?._id} className="col-sm-12 col-md-3">
                                <div className="card">
                                    <div className="card-header">
                                        <div className='remove-btn-outer'> <span className='remove-btn'>X</span></div>
                                        <div className="card-header-headshot"></div>
                                    </div>

                                    <div className="card-content">
                                        <div className="card-content-languages">
                                            <div className="card-content-languages-group">
                                                <div>
                                                    <h4><b>{user?.full_name}</b></h4>
                                                </div>
                                            </div>
                                            <div className="card-content-languages-group">
                                                <div>
                                                    <h5>description:</h5>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-footer-message text-center">
                                            <button type='button' className='btn btn-secondary'><i className="fa fa-comments"></i> <span>Message me</span></button>
                                            {/* <h4><i className="fa fa-comments"></i> Message me</h4> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default MyNetwork