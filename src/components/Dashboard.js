import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="dash-board">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </nav>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <Link to="" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
            </div>
        </div>
    )
}

export default Dashboard
