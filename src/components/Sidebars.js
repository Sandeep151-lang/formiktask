
import web from './images/undraw_rocket.svg'
import { Link } from 'react-router-dom'
import { Collapse, Button } from 'reactstrap';
import { useState } from 'react'



const Sidebars = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <>
            <Collapse isOpen={isOpen} className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link to="" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </Link>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link to="/" className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    CRUD
                </div>
                <li className="nav-item">
                    <Link to="/" className="nav-link collapsed" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-users-cog"></i>
                        <span>User List</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/create" className="nav-link collapsed" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="far fa-user"></i>
                        <span>Add User</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link to="" className="collapse-item" >Login</Link>
                            <Link to="" className="collapse-item">Register</Link>
                            <Link to="" className="collapse-item" >Forgot Password</Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link to="" className="collapse-item" >404 Page</Link>
                            <Link to="" className="collapse-item" >Blank Page</Link>
                        </div>
                    </div>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src={web} alt="..." />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <Link to="" className="btn btn-success btn-sm">Upgrade to Pro!</Link>
                </div>
            </Collapse>
            <Button onClick={toggle} className="mt-3 pb-3 side-arrow" color="success" >{(isOpen) ? <i className="fas fa-arrow-to-left"></i> : <i class="fal fa-arrow-to-right mb-2 mr-5"></i>}</Button>

        </>
    );
};

export default Sidebars;
