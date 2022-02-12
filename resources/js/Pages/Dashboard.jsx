import React from 'react'
import Base from '../Layouts/Base'

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                                <h5 className="font-weight-bolder">
                                $53,000
                                </h5>
                                <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+55%</span>
                                since yesterday
                                </p>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                                <h5 className="font-weight-bolder">
                                2,300
                                </h5>
                                <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+3%</span>
                                since last week
                                </p>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">New Clients</p>
                                <h5 className="font-weight-bolder">
                                +3,462
                                </h5>
                                <p className="mb-0">
                                <span className="text-danger text-sm font-weight-bolder">-2%</span>
                                since last quarter
                                </p>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Sales</p>
                                <h5 className="font-weight-bolder">
                                $103,430
                                </h5>
                                <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+5%</span> than last month
                                </p>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                <i className="ni ni-cart text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-7 mb-lg-0 mb-4">
                    <div className="card z-index-2 h-100">
                        <div className="card-header pb-0 pt-3 bg-transparent">
                        <h6 className="text-capitalize">Sales overview</h6>
                        <p className="text-sm mb-0">
                            <i className="fa fa-arrow-up text-success" />
                            <span className="font-weight-bold">4% more</span> in 2021
                        </p>
                        </div>
                        <div className="card-body p-3">
                        <div className="chart">
                            <canvas id="chart-line" className="chart-canvas" height={300} />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-5">
                    <div className="card card-carousel overflow-hidden h-100 p-0">
                        <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
                        <div className="carousel-inner border-radius-lg h-100">
                            <div className="carousel-item h-100 active" style={{backgroundImage: 'url("/img/carousel-1.jpg")', backgroundSize: 'cover'}}>
                            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                <i className="ni ni-camera-compact text-dark opacity-10" />
                                </div>
                                <h5 className="text-white mb-1">Get started with Argon</h5>
                                <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
                            </div>
                            </div>
                            <div className="carousel-item h-100" style={{backgroundImage: 'url("/img/carousel-2.jpg")', backgroundSize: 'cover'}}>
                            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                <i className="ni ni-bulb-61 text-dark opacity-10" />
                                </div>
                                <h5 className="text-white mb-1">Faster way to create web pages</h5>
                                <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
                            </div>
                            </div>
                            <div className="carousel-item h-100" style={{backgroundImage: 'url("/img/carousel-3.jpg")', backgroundSize: 'cover'}}>
                            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                <i className="ni ni-trophy text-dark opacity-10" />
                                </div>
                                <h5 className="text-white mb-1">Share with us your design tips!</h5>
                                <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-7 mb-lg-0 mb-4">
                    <div className="card ">
                        <div className="card-header pb-0 p-3">
                        <div className="d-flex justify-content-between">
                            <h6 className="mb-2">Sales by Country</h6>
                        </div>
                        </div>
                        <div className="table-responsive">
                        <table className="table align-items-center ">
                            <tbody>
                            <tr>
                                <td className="w-30">
                                <div className="d-flex px-2 py-1 align-items-center">
                                    <div>
                                    <img src="/img/icons/flags/US.png" alt="Country flag" />
                                    </div>
                                    <div className="ms-4">
                                    <p className="text-xs font-weight-bold mb-0">Country:</p>
                                    <h6 className="text-sm mb-0">United States</h6>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                    <h6 className="text-sm mb-0">2500</h6>
                                </div>
                                </td>
                                <td>
                                <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0">Value:</p>
                                    <h6 className="text-sm mb-0">$230,900</h6>
                                </div>
                                </td>
                                <td className="align-middle text-sm">
                                <div className="col text-center">
                                    <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                    <h6 className="text-sm mb-0">29.9%</h6>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-30">
                                <div className="d-flex px-2 py-1 align-items-center">
                                    <div>
                                    <img src="/img/icons/flags/DE.png" alt="Country flag" />
                                    </div>
                                    <div className="ms-4">
                                    <p className="text-xs font-weight-bold mb-0">Country:</p>
                                    <h6 className="text-sm mb-0">Germany</h6>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                    <h6 className="text-sm mb-0">3.900</h6>
                                </div>
                                </td>
                                <td>
                                <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0">Value:</p>
                                    <h6 className="text-sm mb-0">$440,000</h6>
                                </div>
                                </td>
                                <td className="align-middle text-sm">
                                <div className="col text-center">
                                    <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                    <h6 className="text-sm mb-0">40.22%</h6>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-30">
                                <div className="d-flex px-2 py-1 align-items-center">
                                    <div>
                                    <img src="/img/icons/flags/GB.png" alt="Country flag" />
                                    </div>
                                    <div className="ms-4">
                                    <p className="text-xs font-weight-bold mb-0">Country:</p>
                                    <h6 className="text-sm mb-0">Great Britain</h6>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                    <h6 className="text-sm mb-0">1.400</h6>
                                </div>
                                </td>
                                <td>
                                <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0">Value:</p>
                                    <h6 className="text-sm mb-0">$190,700</h6>
                                </div>
                                </td>
                                <td className="align-middle text-sm">
                                <div className="col text-center">
                                    <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                    <h6 className="text-sm mb-0">23.44%</h6>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-30">
                                <div className="d-flex px-2 py-1 align-items-center">
                                    <div>
                                    <img src="/img/icons/flags/BR.png" alt="Country flag" />
                                    </div>
                                    <div className="ms-4">
                                    <p className="text-xs font-weight-bold mb-0">Country:</p>
                                    <h6 className="text-sm mb-0">Brasil</h6>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                    <h6 className="text-sm mb-0">562</h6>
                                </div>
                                </td>
                                <td>
                                <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0">Value:</p>
                                    <h6 className="text-sm mb-0">$143,960</h6>
                                </div>
                                </td>
                                <td className="align-middle text-sm">
                                <div className="col text-center">
                                    <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                    <h6 className="text-sm mb-0">32.14%</h6>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-5">
                    <div className="card">
                        <div className="card-header pb-0 p-3">
                        <h6 className="mb-0">Categories</h6>
                        </div>
                        <div className="card-body p-3">
                        <ul className="list-group">
                            <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                            <div className="d-flex align-items-center">
                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                <i className="ni ni-mobile-button text-white opacity-10" />
                                </div>
                                <div className="d-flex flex-column">
                                <h6 className="mb-1 text-dark text-sm">Devices</h6>
                                <span className="text-xs">250 in stock, <span className="font-weight-bold">346+ sold</span></span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
                            </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                            <div className="d-flex align-items-center">
                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                <i className="ni ni-tag text-white opacity-10" />
                                </div>
                                <div className="d-flex flex-column">
                                <h6 className="mb-1 text-dark text-sm">Tickets</h6>
                                <span className="text-xs">123 closed, <span className="font-weight-bold">15 open</span></span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
                            </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                            <div className="d-flex align-items-center">
                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                <i className="ni ni-box-2 text-white opacity-10" />
                                </div>
                                <div className="d-flex flex-column">
                                <h6 className="mb-1 text-dark text-sm">Error logs</h6>
                                <span className="text-xs">1 is active, <span className="font-weight-bold">40 closed</span></span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
                            </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                            <div className="d-flex align-items-center">
                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                <i className="ni ni-satisfied text-white opacity-10" />
                                </div>
                                <div className="d-flex flex-column">
                                <h6 className="mb-1 text-dark text-sm">Happy users</h6>
                                <span className="text-xs font-weight-bold">+ 430</span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <footer className="footer pt-3  ">
                    <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="copyright text-center text-sm text-muted text-lg-start">
                            © ,
                            made with <i className="fa fa-heart" /> by
                            <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</a>
                            for a better web.
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                            <li className="nav-item">
                            <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
                </div>
        </>
    )
}

Dashboard.layout = (page) => <Base children={page} title={"Dashboard"}/>
