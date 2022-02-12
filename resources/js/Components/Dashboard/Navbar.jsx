import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navbar(props) {
    const { auth } = usePage().props;

    return (
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="javascript:;">Pages</a></li>
                        <li className="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard</li>
                    </ol>
                <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div className="input-group">
                            <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true" /></span>
                            <input type="text" className="form-control" placeholder="Type here..." />
                        </div>
                    </div>
                    <ul className="navbar-nav  justify-content-end">                        
                        { auth.user != null 
                            ?   <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {auth.user.name}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Setting</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" as='button' method='post' href={route('logout')}>Logout</Link></li>
                                    </ul>
                                </li> 
                            : <li className="nav-item d-flex align-items-center">
                                <Link href={route('login')} className="nav-link text-white font-weight-bold px-0">
                                    <i className="fa fa-user me-sm-1" />
                                    <span className="d-sm-inline d-none">Sign In</span>
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
